import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, MessageCircle, Minimize2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { supabase } from "../../lib/supabase";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Wikipedia search integration for general knowledge
const searchWeb = async (query: string): Promise<string> => {
  try {
    // Extract main topic from query
    const searchTopic = query
      .replace(/what is|who is|tell me about|search for|define|explain/gi, '')
      .trim();
    
    // Using Wikipedia API - more reliable and CORS-friendly
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTopic)}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Not found');
    }
    
    const data = await response.json();
    
    if (data.extract) {
      // Limit to first 3 sentences for better readability
      const summary = data.extract.split('. ').slice(0, 3).join('. ') + '.';
      return `🔍 Information about "${data.title}":\n\n${summary}\n\n📖 Source: Wikipedia\n\nWant to know more? Feel free to ask follow-up questions!`;
    }
    
    return "I couldn't find specific information about that. Try:\n• Rephrasing your question\n• Being more specific\n• Asking about ALU courses, campus life, or careers! 📚";
  } catch (error) {
    console.error('Search error:', error);
    
    // Provide intelligent fallback based on common topics
    const topic = query.toLowerCase();
    if (topic.includes('rwanda')) {
      return "🇷🇼 Rwanda is a landlocked country in East Africa, known as the 'Land of a Thousand Hills.' It's home to the African Leadership University and is recognized for its innovation, safety, and economic development. The capital is Kigali.\n\nWould you like to know about ALU Rwanda campus specifically?";
    } else if (topic.includes('alu') || topic.includes('african leadership')) {
      return "🎓 African Leadership University (ALU) is a pan-African network of tertiary institutions with campuses in Rwanda and Mauritius. ALU focuses on developing ethical, entrepreneurial leaders who will transform Africa.\n\nWant to know about specific courses, campus life, or admission?";
    }
    
    return "I'm having trouble searching right now, but I can help with:\n• ALU courses and programs\n• Campus information\n• Deadlines and schedules\n• Career opportunities\n• Student support services\n\nWhat would you like to know?";
  }
};

// Realistic AI responses based on common student queries
const getAIResponse = async (userMessage: string): Promise<string> => {
  const message = userMessage.toLowerCase();
  
  // Academic queries
  if (message.includes("course") || message.includes("class") || message.includes("schedule")) {
    return "I can help you with course information! 📚 What specific course are you interested in? I have access to the full course catalog, schedules, prerequisites, and professor information.";
  }
  
  if (message.includes("deadline") || message.includes("due date") || message.includes("assignment")) {
    return "Let me check your upcoming deadlines... ⏰ You have:\n• Research Paper - Due Nov 15th\n• Math Problem Set - Due Nov 18th\n• Group Project Presentation - Due Nov 22nd\n\nWould you like reminders for any of these?";
  }
  
  if (message.includes("grade") || message.includes("gpa") || message.includes("score")) {
    return "Your current GPA is 3.7 📊 Here's your grade breakdown:\n• Computer Science: A-\n• Mathematics: B+\n• Economics: A\n• English: B+\n\nYou're doing great! Need study tips for any subject?";
  }
  
  // Campus life
  if (message.includes("library") || message.includes("study")) {
    return "📖 The library is open until 10 PM today. Current occupancy: 45% (plenty of space!). Popular study rooms are available on floors 2 and 3. Would you like me to book a study room for you?";
  }
  
  if (message.includes("food") || message.includes("dining") || message.includes("cafeteria")) {
    return "🍽️ Today's dining options:\n• Main Cafeteria: Open until 8 PM\n• Coffee Shop: Open 24/7\n• Food Court: Multiple cuisines available\n\nToday's special: Jollof Rice with grilled chicken! 😋";
  }
  
  if (message.includes("event") || message.includes("activity") || message.includes("club")) {
    return "🎉 Upcoming campus events:\n• Tech Talk: AI in Africa - Tomorrow 6 PM\n• Career Fair - Friday 10 AM\n• Football Match - Saturday 3 PM\n• Coding Bootcamp - Next Week\n\nWhich interests you?";
  }
  
  // Administrative
  if (message.includes("register") || message.includes("enrollment") || message.includes("add course")) {
    return "I can help you with course registration! 📝 The registration period for next semester opens on December 1st. Would you like me to:\n1. Show available courses\n2. Check prerequisites\n3. Set up registration reminders?";
  }
  
  if (message.includes("scholarship") || message.includes("financial aid") || message.includes("tuition")) {
    return "💰 Great question! I can connect you with Financial Aid. Current scholarships available:\n• Merit Scholarship - Apply by Dec 15\n• Need-based Aid - Rolling applications\n• Research Grants - Various deadlines\n\nShall I schedule an appointment with a financial advisor?";
  }
  
  if (message.includes("internship") || message.includes("job") || message.includes("career")) {
    return "🚀 Exciting! Our Career Center has 150+ active internship postings. Top opportunities:\n• Tech Companies: Google, Microsoft, local startups\n• Finance: Banks and consulting firms\n• NGOs: Development organizations\n\nWant me to match you with positions based on your major?";
  }
  
  // Support and wellness
  if (message.includes("counseling") || message.includes("mental health") || message.includes("stress")) {
    return "Your wellbeing matters! 💚 Student Counseling Services:\n• Available Mon-Fri 9 AM - 5 PM\n• Emergency support: 24/7 hotline\n• Group workshops on stress management\n\nWould you like me to book a confidential appointment?";
  }
  
  if (message.includes("housing") || message.includes("dorm") || message.includes("accommodation")) {
    return "🏠 Housing information:\n• On-campus dorms: Applications open in March\n• Off-campus listings: Updated weekly\n• Roommate matching available\n\nNeed help with housing applications or maintenance requests?";
  }
  
  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! 👋 I'm your Student Companion AI. I'm here to help with courses, deadlines, campus life, career support, and much more! What can I assist you with today?";
  }
  
  if (message.includes("help") || message.includes("what can you do")) {
    return "I'm here to make your university life easier! ✨ I can help with:\n\n📚 Academics: Courses, schedules, grades, assignments\n🏫 Campus: Events, dining, library, facilities\n💼 Career: Internships, jobs, networking\n🎯 Admin: Registration, financial aid, housing\n❤️ Support: Counseling, wellness resources\n\nJust ask me anything!";
  }
  
  if (message.includes("thank") || message.includes("thanks")) {
    return "You're very welcome! 😊 Is there anything else I can help you with today? I'm here 24/7!";
  }
  
  // Check if user wants to search the web
  if (message.includes("search") || message.includes("find information") || message.includes("look up")) {
    const searchQuery = userMessage.replace(/search|find information|look up|about|for/gi, '').trim();
    if (searchQuery.length > 3) {
      return await searchWeb(searchQuery);
    }
  }
  
  // For general knowledge questions, try searching
  if (message.includes("what is") || message.includes("who is") || message.includes("define") || 
      message.includes("explain") || message.includes("tell me about")) {
    return await searchWeb(userMessage);
  }
  
  // Default intelligent response
  return "That's a great question! 🤔 I'm here to help with academic support, campus information, career guidance, and administrative tasks. Could you provide more details about what you need? For example:\n• Course information\n• Deadlines and schedules\n• Campus services\n• Career opportunities\n• Financial aid\n\nI'm always learning to serve you better!";
};

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Student Companion AI assistant. How can I help you today? 👋",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Generate or retrieve session ID
  const [sessionId] = useState(() => {
    const stored = sessionStorage.getItem('chat_session_id');
    if (stored) return stored;
    const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('chat_session_id', newId);
    return newId;
  });

  // Debug log to confirm component is rendering
  useEffect(() => {
    console.log("FloatingChatbot mounted! Session:", sessionId);
  }, [sessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Save message to Supabase
  const saveMessageToDatabase = async (message: string, sender: 'user' | 'bot') => {
    try {
      await supabase.from('chat_messages').insert({
        session_id: sessionId,
        message: message,
        sender: sender,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  // Show notification badge when closed and bot responds
  useEffect(() => {
    if (!isOpen && messages.length > 1 && messages[messages.length - 1].sender === "bot") {
      setHasNewMessage(true);
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasNewMessage(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: userInput,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Save user message to database
    saveMessageToDatabase(userInput, 'user');

    // Get AI response (with web search capability)
    try {
      const responseText = await getAIResponse(userInput);
      
      // Simulate realistic thinking delay
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: responseText,
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        
        // Save bot response to database
        saveMessageToDatabase(responseText, 'bot');
      }, 800 + Math.random() * 400);
    } catch (error) {
      console.error('Error getting response:', error);
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "I apologize, I'm having trouble processing that right now. Please try again!",
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "📚 Check deadlines",
    "📖 Library hours",
    "💼 Career help",
    "🔍 Search: What is ALU?",
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`flex flex-col transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden`} 
          style={{ 
            position: 'fixed',
            bottom: '200px',
            right: '24px',
            width: '420px',
            height: isMinimized ? '56px' : '580px',
            maxHeight: '580px',
            zIndex: 99999
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-4 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Student Companion AI</h3>
                <p className="text-blue-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/30 h-9 w-9 transition-all"
                title="Minimize"
              >
                <Minimize2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-red-500/50 h-9 w-9 transition-all hover:scale-110"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex flex-col" style={{ flex: 1, minHeight: 0 }}>
              {/* Messages - Scrollable */}
              <div 
                className="p-4 bg-slate-900/95 backdrop-blur-md space-y-3 scrollbar-thin"
                style={{ 
                  flex: 1,
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                  maxHeight: '360px',
                  minHeight: '360px',
                  overscrollBehavior: 'contain'
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""} animate-fade-in`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "bot" 
                        ? "bg-gradient-to-br from-blue-500 to-purple-500" 
                        : "bg-gradient-to-br from-green-500 to-emerald-500"
                    }`}>
                      {message.sender === "bot" ? (
                        <Bot className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`max-w-[80%] ${message.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.sender === "bot"
                          ? "bg-slate-800/90 text-gray-100 rounded-tl-none shadow-lg border border-slate-700/50"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none shadow-lg"
                      }`}>
                        <p className="whitespace-pre-line leading-relaxed text-[15px] font-normal">{message.text}</p>
                      </div>
                      <span className="text-xs text-gray-400 px-2 mt-1.5 font-medium">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 animate-fade-in">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 px-3 py-2 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions - Fixed at bottom */}
              <div className="flex-shrink-0 p-3 bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(action.replace(/[📚📖💼🎉]/g, '').trim())}
                      className="px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 rounded-full text-blue-300 text-xs font-medium transition-all duration-200 hover:scale-105 hover:border-blue-400"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input - Fixed at bottom */}
              <div className="flex-shrink-0 p-4 bg-slate-800/95 backdrop-blur-md rounded-b-2xl border-t border-slate-700/50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 h-9 text-sm"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-9 w-9 p-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Button with Pointer - Always Visible */}
      {!isOpen && (
        <div style={{ position: 'fixed', bottom: '100px', right: '24px', zIndex: 99999 }}>
          {/* Blinking Pointer Arrow */}
          <div 
            className="absolute -left-16 top-1/2 -translate-y-1/2 animate-bounce"
            style={{ animation: 'bounce 1s infinite' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold bg-blue-600 px-3 py-1 rounded-full shadow-lg animate-pulse">
                Chat with me! 💬
              </span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-blue-600 animate-pulse"
              >
                <path 
                  d="M13 7l5 5-5 5M6 12h12" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          {/* Main Chat Button */}
          <button
            onClick={handleOpen}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
            style={{ 
              width: '80px',
              height: '80px',
            }}
            aria-label="Open chat"
          >
            <MessageCircle className="w-9 h-9 animate-pulse" />
            
            {/* Notification Badge */}
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                1
              </span>
            )}
            
            {/* Multiple Ripple Effects */}
            <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></span>
            <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></span>
          </button>
        </div>
      )}
    </>
  );
}
