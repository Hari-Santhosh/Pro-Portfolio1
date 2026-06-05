import { Section, SectionHeading } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Database, Cpu, Code2, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: <Database className="w-5 h-5" />,
      skills: ["Python", "Oracle SQL", "Excel", "Advanced Excel", "Tableau", "Power BI", "Statistics", "Probability", "Machine Learning", "Deep Learning", "NLP"],
      color: "border-blue-500/30 text-blue-400 bg-blue-500/5 hover:border-blue-500/60 hover:bg-blue-500/10"
    },
    {
      title: "Hardware & VLSI",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Verilog", "SystemVerilog", "UVM", "Digital Circuits", "CMOS Logic", "Static Timing Analysis", "FPGA"],
      color: "border-purple-500/30 text-purple-400 bg-purple-500/5 hover:border-purple-500/60 hover:bg-purple-500/10"
    },
    {
      title: "Web & Software",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Java", "HTML", "CSS", "JavaScript", "Django"],
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500/60 hover:bg-emerald-500/10"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Communication", "Problem-solving", "Adaptability", "Critical Thinking", "Active Listening"],
      color: "border-orange-500/30 text-orange-400 bg-orange-500/5 hover:border-orange-500/60 hover:bg-orange-500/10"
    }
  ];

  return (
    <Section id="skills">
      <SectionHeading 
        title="02. Tech Stack" 
        subtitle="Tools, languages, and methodologies I work with"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/5 text-white">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs border transition-all duration-300 ${category.color}`}
                  data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
