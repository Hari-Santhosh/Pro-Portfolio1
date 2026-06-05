import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-primary mb-4 text-sm tracking-wider uppercase">06. What's Next?</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Whether you have a question about data analytics, want to discuss hardware architecture, or just want to say hi, my inbox is always open.
          </p>
          
          <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-white/90 group" asChild>
            <a href="mailto:harisanthosh2000@gmail.com" data-testid="button-contact-email">
              <Mail className="mr-2 h-5 w-5" /> Say Hello <ArrowUpRight className="ml-2 h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>

          <div className="mt-16 flex items-center justify-center gap-6">
            <a 
              href="https://github.com/Hari-Santhosh" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors font-mono text-sm"
              data-testid="link-contact-github"
            >
              <SiGithub size={20} /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/gali-hari-santhosh-502657245" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-[#0a66c2] transition-colors font-mono text-sm"
              data-testid="link-contact-linkedin"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
