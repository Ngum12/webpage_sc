import { Navigation } from "./components/website/Navigation";
import { Hero } from "./components/website/Hero";
import { InteractiveChatbot } from "./components/website/InteractiveChatbot";
import { FloatingChatbot } from "./components/website/FloatingChatbot";
import { About } from "./components/website/About";
import { VideoDemo } from "./components/website/VideoDemo";
import { Mission } from "./components/website/Mission";
import { Prototype } from "./components/website/Prototype";
import { Features } from "./components/website/Features";
import { Benefits } from "./components/website/Benefits";
import { Testimonials } from "./components/website/Testimonials";
import { FAQ } from "./components/website/FAQ";
import { CTA } from "./components/website/CTA";
import { Team } from "./components/website/Team";
import { BookMeeting } from "./components/website/BookMeeting";
import { Newsletter } from "./components/website/Newsletter";
import { Contact } from "./components/website/Contact";
import { Footer } from "./components/website/Footer";
import { ScrollToTop } from "./components/website/ScrollToTop";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import demoVideo from "./assets/demo.mp4";

export default function App() {
  // Enable keyboard navigation accessibility
  useKeyboardNavigation();
  
  return (
    <>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <Hero />
        {/* <InteractiveChatbot /> */}
        <About />
        <VideoDemo 
          videoUrl={demoVideo}
          title="See Student Companion in Action"
          description="A 25-second walkthrough of how our AI chatbot transforms student support"
        />
        <Mission />
        <Prototype />
        <Features />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
        <Team />
        <BookMeeting />
        <Newsletter />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
      <FloatingChatbot />
    </>
  );
}
