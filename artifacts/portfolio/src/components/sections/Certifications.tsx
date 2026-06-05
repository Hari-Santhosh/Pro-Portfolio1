import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Terminal } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "AI/ML FPGA Hackathon 2025",
      issuer: "NIT Jamshedpur / VLSI FOR ALL",
      date: "2025",
      highlight: "Rank 16",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      featured: true
    },
    {
      title: "Data Science Essentials",
      issuer: "Reliance Foundation",
      date: "Nov 2024",
      icon: <Award className="w-6 h-6 text-primary" />,
      featured: false
    },
    {
      title: "Data Science Training Program",
      issuer: "Besant Technologies",
      date: "Jan 2024 – Sep 2024",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      featured: false
    },
    {
      title: "Java Full Stack",
      issuer: "JSpiders Hebbal",
      date: "Jan 2023 – Jun 2023",
      details: "Java, HTML, CSS, JS, SQL",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      featured: false
    }
  ];

  return (
    <Section id="certifications">
      <SectionHeading 
        title="05. Certifications & Awards" 
        subtitle="Continuous learning and competitive achievements"
      />

      <div className="grid gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className={`relative overflow-hidden ${cert.featured ? 'border-yellow-500/50 bg-yellow-500/5' : 'bg-card/30 border-border/50 hover:bg-card/50 transition-colors'}`}>
              {cert.featured && (
                <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />
              )}
              
              <CardContent className="p-6 flex items-center gap-6">
                <div className={`shrink-0 p-4 rounded-xl ${cert.featured ? 'bg-yellow-500/10' : 'bg-white/5'}`}>
                  {cert.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
                    <h3 className={`text-lg font-bold ${cert.featured ? 'text-yellow-400' : 'text-white'}`}>
                      {cert.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground px-2 py-1 rounded bg-white/5 border border-white/10 w-fit">
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="text-muted-foreground font-medium mb-1">
                    {cert.issuer}
                  </div>
                  
                  {cert.details && (
                    <div className="text-sm font-mono text-muted-foreground/80 mt-2">
                      <span className="text-primary/50 mr-2">{'>'}</span>{cert.details}
                    </div>
                  )}
                </div>

                {cert.highlight && (
                  <div className="hidden md:flex shrink-0 items-center justify-center">
                    <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold font-mono tracking-widest shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                      {cert.highlight}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
