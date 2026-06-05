import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Linkedin, MapPin, Languages, Send, Copy, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

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

const EMAIL = "harisanthosh2000@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <Section id="contact" className="pb-32">
      <SectionHeading
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

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 px-7 bg-primary text-black font-semibold hover:bg-primary/90 group"
              onClick={() => window.open(`mailto:${EMAIL}`, "_blank")}
            >
              <Send className="mr-2 h-4 w-4" />
              Send a Message
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-5 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
              onClick={copyEmail}
            >
              {copied
                ? <><Check className="mr-2 h-4 w-4 text-green-400" /><span className="text-green-400">Copied!</span></>
                : <><Copy className="mr-2 h-4 w-4" />Copy Email</>
              }
            </Button>
          </div>

          {/* Email visible */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span className="select-all text-white/70">{EMAIL}</span>
          </div>

          {/* Social links */}
          <div className="flex gap-4 pt-1">
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
          {/* Email card with copy button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            <Card className="bg-card/50 border-border/50 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Email</div>
                  <div className="text-white font-medium text-sm truncate select-all">{EMAIL}</div>
                </div>
                <button
                  onClick={copyEmail}
                  className="shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location + Languages cards */}
          {contactItems.slice(1).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.23 + i * 0.08 }}
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
                    <div className="text-white font-medium text-sm">{item.display}</div>
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
