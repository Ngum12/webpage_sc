import { Mail, MapPin, ExternalLink, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-xl">
            Interested in partnership or collaboration?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-102">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2 font-semibold">Email</h3>
                    <a 
                      href="mailto:studentcompanionai@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:underline"
                    >
                      studentcompanionai@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2 font-semibold">Location</h3>
                    <p className="text-gray-300">Kigali, Rwanda</p>
                  </div>
                </div>

                {/* Demo Link */}
                <div className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-2 font-semibold">Try the Demo</h3>
                    <Button 
                      variant="outline" 
                      className="border-green-500/30 text-green-300 hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
                    >
                      Launch Prototype
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-white mb-4 font-semibold">Connect With Us</h3>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
