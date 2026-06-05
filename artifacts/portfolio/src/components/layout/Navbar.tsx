import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observers = navLinks.map((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (!element) return null;

      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(link.href);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
    });

    observers.forEach((observer, index) => {
      const element = document.getElementById(navLinks[index].href.substring(1));
      if (element && observer) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tighter text-white z-50 relative"
          data-testid="link-home"
        >
          G<span className="text-primary">.</span>H<span className="text-primary">.</span>S
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-mono transition-colors hover:text-primary ${
                activeSection === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              <span className="text-primary/50 mr-1">//</span>
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs"
            asChild
            data-testid="button-resume-nav"
          >
            <a href="resume.pdf" download="Gali_Hari_Santhosh_Resume.pdf">
              <Download className="mr-1.5 h-3 w-3" /> Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-mono transition-colors ${
                    activeSection === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  <span className="text-primary/50 mr-2">//</span>
                  {link.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="border-primary/50 text-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <a href="resume.pdf" download="Gali_Hari_Santhosh_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
