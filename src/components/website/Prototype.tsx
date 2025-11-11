import { ExternalLink, MessageSquare, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function Prototype() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4">Prototype and MVP Status</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            To demonstrate feasibility, the Student Companion AI project has already developed 
            two working versions of the system:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Functional Prototype (Poe) */}
          <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-blue-400 mb-2 font-semibold text-xl">Functional Prototype</h3>
                  <p className="text-gray-400 text-sm">Hosted on Poe</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                A live version of the chatbot is currently accessible on the Poe platform, 
                allowing users to interact with core features such as student Q&As, academic guidance, 
                student life support, admission, and student professional development hub information.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Student Q&As</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Academic guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Student life support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Admission information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Professional development hub</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
              >
                Try Poe Prototype
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* ALU-Compatible MVP Shell */}
          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-400 mb-2">ALU-Compatible MVP Shell</h3>
                  <p className="text-gray-400">Independent Platform</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                In line with ALU's data privacy and security expectations, the project team has built 
                its own platform shell, a stand-alone MVP environment that is designed for secure data 
                integration and hosting within ALU's infrastructure.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">ALU email domain only</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Google Single Sign-On (SSO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Institutional compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Secure data integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Flexible for future scaling</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                onClick={() => window.open('https://alu-student-companion.onrender.com/', '_blank')}
              >
                Access MVP Platform
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Banner */}
        <div className="bg-gradient-to-r from-blue-950/50 to-purple-950/50 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white mb-2">Security & Compliance</h4>
              <p className="text-gray-300">
                The MVP platform ensures compliance with institutional standards while providing 
                flexibility for future scaling. Access is restricted to ALU email domains with 
                Google SSO authentication, maintaining the highest security standards for student data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
