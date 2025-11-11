import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Send, Paperclip, Mic, FileText, Briefcase, Calendar, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onFeatureSelect: (feature: string) => void;
}

export function ChatInterface({ onFeatureSelect }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const features = [
    {
      id: "resume",
      icon: FileText,
      title: "Resume & Cover Letter Analyzer",
      description: "Get AI-powered feedback on your resume and cover letter"
    },
    {
      id: "jobs",
      icon: Briefcase,
      title: "Internship/Job Matching",
      description: "Find opportunities that match your skills and interests"
    },
    {
      id: "planner",
      icon: Calendar,
      title: "Study Planner + Learning Nudges",
      description: "Stay on track with personalized study plans and reminders"
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track student progress and insights (For Advisors)"
    }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: "I'm here to help! I can assist you with resume analysis, job matching, study planning, or provide analytics insights. What would you like to work on today?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Welcome Screen or Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="text-center space-y-4 py-12">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
              <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                ALU Student Companion
              </h1>
              <p className="text-muted-foreground">
                Welcome! How can I help you today?
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <Card
                  key={feature.id}
                  className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => onFeatureSelect(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="size-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-muted-foreground">
              Free Research Preview. ALU Student Companion may produce inaccurate information.
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white">AI</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <span>U</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card/50 backdrop-blur">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-end gap-2">
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Paperclip className="size-5" />
            </Button>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Send a message..."
              className="min-h-[48px] max-h-32 resize-none bg-input-background border-border"
            />
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Mic className="size-5" />
            </Button>
            <Button
              onClick={handleSend}
              size="icon"
              className="flex-shrink-0 bg-primary hover:bg-primary/90"
            >
              <Send className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
