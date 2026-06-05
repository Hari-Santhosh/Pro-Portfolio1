import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { SectionSeparator } from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      {/* Abstract background noise/gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-[0.03]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>
      
      <div className="fixed top-[-50%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-50%] right-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Education />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Certifications />
        <SectionSeparator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
