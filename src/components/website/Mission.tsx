import { Target, Lightbulb } from "lucide-react";

export function Mission() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-2">OUR MISSION INFOGRAPHIC</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Shaping the future of student support in Africa</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="relative group">
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Target className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-gray-800 mb-6 uppercase tracking-wide">
                Mission
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed mb-8">
                To revolutionize student support systems across universities in Africa through 
                AI-driven tools that improve accessibility, engagement, and student success.
              </p>

              {/* Orange accent bar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-yellow-400 via-orange-500 to-orange-600 rounded-r-full"></div>
              
              {/* Number badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 text-white w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                  <span className="transform -rotate-45">01</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-gray-800 mb-6 uppercase tracking-wide">
                Vision
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed mb-8">
                To become Africa's leading AI-powered student support platform — empowering learners 
                through personalized guidance, seamless access to resources, and transformative 
                learning experiences.
              </p>

              {/* Blue accent bar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-r-full"></div>
              
              {/* Number badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                  <span className="transform -rotate-45">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
