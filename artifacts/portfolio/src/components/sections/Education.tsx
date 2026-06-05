import { Section, SectionHeading } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: "mtech",
      institution: "KL University",
      degree: "M.Tech ECE, VLSI Specialization",
      period: "2025 – 2027",
      grade: "CGPA 8.55",
      current: true
    },
    {
      id: "be",
      institution: "New Prince Shri Bhavani COE",
      degree: "B.E ECE",
      period: "2018 – 2022",
      grade: "CGPA 7.9",
      current: false
    },
    {
      id: "inter",
      institution: "Viswasai Junior College",
      degree: "Intermediate MPC",
      period: "2016 – 2018",
      grade: "931 Marks",
      current: false
    },
    {
      id: "10th",
      institution: "Sri Sainadh High School",
      degree: "10th Grade",
      period: "2016",
      grade: "CGPA 9.2",
      current: false
    }
  ];

  return (
    <Section id="education">
      <SectionHeading 
        title="03. Education" 
        subtitle="Academic background and performance"
      />

      <div className="relative pl-8 md:pl-0">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />

        <div className="space-y-12">
          {education.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-33px] md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10 flex items-center justify-center mt-1.5 md:mt-0"
                     style={{ backgroundColor: item.current ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}>
                  {item.current && (
                    <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"} pt-1 md:pt-0`}>
                  <div className={`p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-colors hover:border-primary/30 relative overflow-hidden ${
                    item.current ? "border-primary/20 bg-primary/5" : ""
                  }`}>
                    <div className="flex items-center gap-2 mb-2 text-primary font-mono text-sm">
                      <GraduationCap size={16} />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <div className="text-muted-foreground mb-4">{item.institution}</div>
                    <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-sm text-white">
                      {item.grade}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
