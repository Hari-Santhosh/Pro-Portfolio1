import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-mono text-primary bg-primary/10 px-3 py-1 rounded-full text-sm border border-primary/20">
              System initialization complete //
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 leading-[1.1]"
          >
            GALI HARI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-primary">
              SANTHOSH
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-mono text-muted-foreground mb-8"
          >
            <span className="text-white">Data Analyst</span> <span className="text-primary/50">|</span> <span className="text-white">M.Tech VLSI</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Building at the intersection of <span className="text-primary font-medium">Data</span> & <span className="text-primary font-medium">Silicon</span>. Translating complex datasets into actionable insights and designing high-performance RTL architectures.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono" asChild data-testid="button-hero-projects">
              <a href="#projects">
                View Systems <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-border hover:bg-white/5 font-mono" asChild data-testid="button-hero-contact">
              <a href="#contact">
                <FileText className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            
            <div className="flex gap-4 ml-2 md:ml-4">
              <a 
                href="https://github.com/Hari-Santhosh" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 text-muted-foreground hover:text-white transition-colors hover:bg-white/5 rounded-full"
                data-testid="link-hero-github"
              >
                <SiGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/gali-hari-santhosh-502657245" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 text-muted-foreground hover:text-[#0a66c2] transition-colors hover:bg-white/5 rounded-full"
                data-testid="link-hero-linkedin"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative grid elements */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-[0.02] pointer-events-none hidden lg:block"
           style={{ backgroundImage: 'linear-gradient(to right, #58a6ff 1px, transparent 1px), linear-gradient(to bottom, #58a6ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
