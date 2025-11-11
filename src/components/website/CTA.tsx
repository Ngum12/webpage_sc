import { ArrowRight, Sparkles, Users, Building2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Ready to Transform Your Campus?</span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Join the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Student Support
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Empower your students with 24/7 AI-powered support. Reduce administrative burden. 
            Improve engagement and success rates across your institution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-6 text-lg"
              onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
            >
              Try Live Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 gap-2 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Demo
              <Users className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Two-Column CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <Card className="bg-white/5 border-blue-500/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">For Students</h3>
              <p className="text-gray-300 mb-6">
                Get instant answers, personalized guidance, and 24/7 support for your academic journey.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
              >
                Start Chatting Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* For Universities */}
          <Card className="bg-white/5 border-purple-500/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">For Universities</h3>
              <p className="text-gray-300 mb-6">
                Transform your student services with AI. Reduce costs, improve satisfaction, gain insights.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Partnership
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Trusted by educational institutions across Africa</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="text-gray-500 text-sm">🔒 GDPR Compliant</div>
            <div className="text-gray-500 text-sm">✓ ISO 27001 Certified</div>
            <div className="text-gray-500 text-sm">🛡️ Enterprise Security</div>
            <div className="text-gray-500 text-sm">⚡ 99.9% Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
