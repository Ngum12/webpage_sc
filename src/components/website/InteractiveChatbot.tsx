import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Realistic AI responses based on common student queries
const getAIResponse = (userMessage: string): string => {
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
  
  // Default intelligent response
  return "That's a great question! 🤔 I'm here to help with academic support, campus information, career guidance, and administrative tasks. Could you provide more details about what you need? For example:\n• Course information\n• Deadlines and schedules\n• Campus services\n• Career opportunities\n• Financial aid\n\nI'm always learning to serve you better!";
};

export function InteractiveChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Student Companion AI 👋 Your 24/7 personal university assistant. I can help with courses, deadlines, campus life, careers, and more! What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking delay (realistic)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 400); // 800-1200ms delay for realism
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "Check my deadlines",
    "Library hours",
    "Career opportunities",
    "Register for courses",
    "Campus events"
  ];

  return (
    <section id="live-demo" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Live Interactive Demo</span>
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Experience Student Companion
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Right Now!
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Try our AI chatbot below. Ask real questions and see how it can transform your university experience. 
            This is a <span className="text-blue-400 font-semibold">fully functional demo</span> - go ahead, chat with it!
          </p>
        </div>

        {/* Chatbot Interface */}
        <Card className={`mx-auto bg-white/5 border-2 border-blue-500/30 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-w-6xl' : 'max-w-4xl'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Student Companion AI</h3>
                <p className="text-blue-100 text-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Ready to help
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/20"
            >
              {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-900/50 to-blue-950/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""} animate-fade-in`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "bot" 
                    ? "bg-gradient-to-br from-blue-500 to-purple-500" 
                    : "bg-gradient-to-br from-green-500 to-emerald-500"
                }`}>
                  {message.sender === "bot" ? (
                    <Bot className="w-5 h-5 text-white" />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className={`max-w-[70%] ${message.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.sender === "bot"
                      ? "bg-white/10 text-gray-100 rounded-tl-none"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none"
                  }`}>
                    <p className="whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none">
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

          {/* Quick Actions */}
          <div className="p-4 bg-slate-900/50 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-2">Quick questions to try:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(action)}
                  className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-full text-blue-300 text-sm transition-all duration-200 hover:scale-105"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900/80 border-t border-white/10">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything... (courses, deadlines, events, careers, etc.)"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 This is a live demo - try asking about deadlines, courses, campus events, or career opportunities!
            </p>
          </div>
        </Card>

        {/* Below Chatbot CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Impressed? Imagine having this power at your fingertips 24/7!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
            >
              Try Full Version
              <Sparkles className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Bring This to My University
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
