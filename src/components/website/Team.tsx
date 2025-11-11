import { ImageWithFallback } from "../figma/ImageWithFallback";
import andrewImage from "figma:asset/2e6926818e8e7e5cc64c27b5330dd94be9ac235a.png";

const teamMembers = [
  {
    name: "Andrew Steven Boima",
    role: "Founder & Project Lead",
    image: andrewImage
  },
  {
    name: "Dieudonne Ngum",
    role: "Technical Development Lead",
    image: "https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYyNTI2Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Marvin Mayonga Ogore",
    role: "Technical Supervisory Coach",
    image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBtYWxlfGVufDF8fHx8MTc2MjUyNjI4OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Henry Chukwudi John",
    role: "Strategic Stakeholder Engagement Lead",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjQ5OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-4">Meet the team</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* Circular Avatar */}
              <div className="relative mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-blue-500 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 group-hover:scale-110">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
              </div>

              {/* Name and Role */}
              <div className="text-center max-w-[200px] transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-white mb-1 font-semibold group-hover:text-blue-300 transition-colors duration-300">{member.name}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Details Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => {
            const details = [
              {
                name: "Andrew Steven Boima",
                affiliation: "ALU – BSc (Hons) Entrepreneurial Leadership",
                responsibilities: "Leads project vision, strategy, and partnerships."
              },
              {
                name: "Dieudonne Ngum",
                affiliation: "ALU – BSc (Hons) Software Engineering",
                responsibilities: "Oversees AI model design and system integration."
              },
              {
                name: "Marvin Mayonga Ogore",
                affiliation: "ALU Faculty – Machine Learning Coach",
                responsibilities: "Provides technical guidance and quality assurance."
              },
              {
                name: "Henry Chukwudi John",
                affiliation: "ALU – Library Services Lead",
                responsibilities: "Manages institutional relations and engagement strategy."
              }
            ];

            return (
              <div 
                key={index}
                className="bg-white/5 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-sm transition-all rounded-lg p-6"
              >
                <h4 className="text-white mb-4">{member.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">Affiliation:</span>
                    <span className="text-gray-300">{details[index].affiliation}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">Responsibilities:</span>
                    <span className="text-gray-300">{details[index].responsibilities}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Image */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1583100524290-599c9ac2bf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWZyaWNhfGVufDF8fHx8MTc2MjUyMjg4NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="African Leadership University Campus"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
