import { Button } from "../ui/button";
import { ArrowRight, MessageSquare, Users, Sparkles } from "lucide-react";
import demoVideo from "../../assets/demo.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 border border-purple-500/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full animate-fade-in opacity-0">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">AI-Powered Student Support</span>
            </div>

            <h1 className="text-white animate-fade-in-up opacity-0 animation-delay-100">
              <span className="block">Student Companion</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbot
              </span>
            </h1>

            <p className="text-gray-300 text-xl animate-fade-in-up opacity-0 animation-delay-200">
              Empowering Student Success Through Intelligent Support
            </p>

            <p className="text-gray-400 text-lg animate-fade-in-up opacity-0 animation-delay-300">
              An AI-powered student engagement platform that provides academic, administrative, 
              and personal support to university students — anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
              >
                Try the Prototype
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact the Team
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800 animate-fade-in-up opacity-0 animation-delay-500">
              <div className="transition-transform duration-300 hover:scale-110">
                <div className="text-blue-400 font-bold text-2xl">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <div className="text-purple-400 font-bold text-2xl">AI-Driven</div>
                <div className="text-gray-400 text-sm">Intelligence</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-110">
                <div className="text-green-400 font-bold text-2xl">Instant</div>
                <div className="text-gray-400 text-sm">Answers</div>
              </div>
            </div>
          </div>

          {/* Right content - Video Demo */}
          <div className="relative hidden lg:block animate-fade-in-up opacity-0 animation-delay-200">
            {/* Enhanced Container with multiple effects */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Main video container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 rounded-2xl overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
                
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-10 mix-blend-screen opacity-90"
                  src={demoVideo}
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/60 via-transparent to-purple-950/60 pointer-events-none z-20"></div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/50"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50"></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-white">Ask Anything</div>
                    <div className="text-gray-300">Get instant answers</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-400" />
                  <div>
                    <div className="text-white">Smart Support</div>
                    <div className="text-gray-300">AI + Human Assistance</div>
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
