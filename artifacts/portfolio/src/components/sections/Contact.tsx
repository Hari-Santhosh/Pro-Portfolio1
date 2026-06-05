import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Linkedin, MapPin, Languages, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";

const contactItems = [
  {
    icon: <Mail className="w-4 h-4 text-primary" />,
    label: "Email",
    value: "harisanthosh2000@gmail.com",
    href: "mailto:harisanthosh2000@gmail.com",
    display: "harisanthosh2000@gmail.com",
  },
  {
    icon: <MapPin className="w-4 h-4 text-primary" />,
    label: "Location",
    value: null,
    href: null,
    display: "Nellore, Andhra Pradesh, India",
  },
  {
    icon: <Languages className="w-4 h-4 text-primary" />,
    label: "Languages",
    value: null,
    href: null,
    display: "Telugu · Tamil · English · Kannada",
  },
];

const socialLinks = [
  {
    icon: <SiGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Hari-Santhosh",
    hoverColor: "hover:text-white",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/gali-hari-santhosh-502657245",
    hoverColor: "hover:text-[#0a66c2]",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <SectionHeading
        number="06."
        title="06. Get In Touch"
        subtitle="Open to analytics roles, research collaborations, and hardware projects"
      />

      <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">

        {/* Left — copy + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Whether you have a question about data analytics, want to discuss hardware architecture, or just want to say hi — my inbox is always open.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm actively looking for opportunities where I can apply my skills in <span className="text-white font-medium">data analysis, ML, and VLSI design</span>. Feel free to reach out for any role, collaboration, or just a conversation.
          </p>

          <Button
            size="lg"
            className="h-12 px-7 bg-primary text-black font-semibold hover:bg-primary/90 group"
            onClick={() => window.open("mailto:harisanthosh2000@gmail.com", "_blank")}
          >
            <Send className="mr-2 h-4 w-4" />
            Send a Message
            <ArrowUpRight className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Button>

          {/* Social links */}
          <div className="flex gap-4 pt-2">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 text-muted-foreground ${link.hoverColor} transition-colors font-mono text-sm`}
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — contact info cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium text-sm hover:text-primary transition-colors truncate block"
                      >
                        {item.display}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-sm">{item.display}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
