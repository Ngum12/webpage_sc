import logo from "figma:asset/36b051d60104e3285554b24e0c1bcda2866bc06d.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src={logo} 
              alt="ALU Student Companion" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-110"
            />
            <div className="text-center md:text-left">
              <div className="text-gray-500 text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Empowering Student Success
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 font-medium">
              © {currentYear} Student Companion AI Chatbot Project.
            </p>
            <p className="text-gray-500 mt-1 text-sm">
              Developed with ❤️ by students of the African Leadership University (ALU).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
