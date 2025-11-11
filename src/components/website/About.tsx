import chatbotImage from "figma:asset/e0d117d7c62ad45303b9bac8805cf007143cbf0e.png";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4">About the Project</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The <span className="text-blue-400">Student Companion AI Chatbot</span> is an innovative, 
            AI-driven platform designed to improve the student experience across African higher education 
            institutions. The chatbot delivers instant academic and administrative assistance, helping 
            students find information, connect with departments, and access resources with ease.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            By integrating with each university's systems, it offers context-aware, reliable support — 
            reducing administrative pressure and enhancing overall engagement.
          </p>

          {/* Image */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 hover:shadow-3xl">
            <img 
              src={chatbotImage}
              alt="ALU Student Companion Chatbot Interface"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
