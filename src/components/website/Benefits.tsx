import { Building, GraduationCap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Benefits() {
  const universityBenefits = [
    "Automates repetitive student inquiries, freeing staff for higher-value work.",
    "Generates data-driven insights on student engagement and service gaps.",
    "Strengthens institutional reputation as a digitally advanced, student-centered university."
  ];

  const studentBenefits = [
    "24/7 access to academic and administrative support.",
    "Instant answers about courses, policies, and deadlines.",
    "Personalized learning guidance and career insights."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4">Institutional Benefits</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Universities */}
          <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-white/10 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-blue-400 font-semibold text-xl">For Universities</h3>
                  <p className="text-gray-400 text-sm">Transform institutional operations</p>
                </div>
              </div>

              <ul className="space-y-4">
                {universityBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* For Students */}
          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold text-xl">For Students</h3>
                  <p className="text-gray-400 text-sm">Empowering academic success</p>
                </div>
              </div>

              <ul className="space-y-4">
                {studentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
