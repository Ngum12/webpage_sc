import { Calendar, Clock, CheckCircle, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function BookMeeting() {
  const handleScheduleMeeting = () => {
    // Open Calendly in new tab
    window.open('https://calendly.com/d-ngum/alu-student-cc', '_blank');
  };

  const meetingTypes = [
    { value: "demo", label: "Product Demo", icon: "🎯" },
    { value: "consultation", label: "Free Consultation", icon: "💡" },
    { value: "implementation", label: "Implementation Discussion", icon: "🚀" },
    { value: "partnership", label: "Partnership Opportunity", icon: "🤝" },
  ];

  return (
    <section id="book-meeting" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Schedule a Meeting</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Talk About Your
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              University's Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a personalized demo or consultation with our team. We'll show you how Student Companion 
            can transform your institution's student support services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Meeting Info */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Personalized Demo</h4>
                      <p className="text-gray-400 text-sm">See how our AI chatbot works with your specific use cases and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Consultation</h4>
                      <p className="text-gray-400 text-sm">Get answers to all your questions from our experienced team.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Custom Proposal</h4>
                      <p className="text-gray-400 text-sm">Receive a tailored implementation plan and pricing for your institution.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Types */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Meeting Types</h3>
                <div className="grid grid-cols-2 gap-3">
                  {meetingTypes.map((type) => (
                    <div 
                      key={type.value}
                      className="p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-blue-500/50 transition-all"
                    >
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm text-gray-300 font-medium">{type.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Schedule with Calendly */}
            <div className="animate-fade-in-right">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Meeting</h3>
                
                <div className="text-center space-y-6">
                  <p className="text-gray-300 text-lg">
                    Click the button below to schedule a meeting at your convenience using our Calendly calendar.
                  </p>
                  
                  <div className="flex flex-col items-center gap-4 my-8">
                    <Calendar className="w-16 h-16 text-blue-400 animate-pulse" />
                    <p className="text-sm text-gray-400">
                      Choose from available time slots that work best for you
                    </p>
                  </div>

                  {/* Calendly Button */}
                  <Button
                    onClick={handleScheduleMeeting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] text-lg"
                  >
                    <Calendar className="w-6 h-6 mr-2" />
                    Schedule on Calendly
                  </Button>

                  <div className="space-y-3 mt-8 pt-6 border-t border-slate-700">
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      15-30 minute sessions available
                    </p>
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Instant confirmation
                    </p>
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Automatic calendar invites
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
