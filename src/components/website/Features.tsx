import { BookOpen, Building2, TrendingUp, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Help with assignments, course navigation, and access to materials.",
    color: "blue"
  },
  {
    icon: Building2,
    title: "Campus Services",
    description: "Connect with departments, schedule appointments, and request assistance.",
    color: "purple"
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Career advice, skills development, and mentorship opportunities.",
    color: "green"
  },
  {
    icon: Calendar,
    title: "Event Updates",
    description: "Stay informed about deadlines, internships, scholarships, and campus events.",
    color: "orange"
  },
  {
    icon: Users,
    title: "Human Assistance",
    description: "Switch seamlessly from AI to live staff when needed.",
    color: "pink"
  }
];

const colorMap = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40"
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/40"
  },
  green: {
    gradient: "from-green-500 to-green-600",
    border: "border-green-500/20",
    hoverBorder: "hover:border-green-500/40"
  },
  orange: {
    gradient: "from-orange-500 to-orange-600",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40"
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    border: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/40"
  }
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Comprehensive AI-powered support designed to enhance every aspect of student life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index}
                className={`bg-white/5 ${colors.border} ${colors.hoverBorder} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10 cursor-pointer group`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-3 font-semibold transition-colors duration-300 group-hover:text-blue-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
