import { Section, SectionHeading } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Database, Cpu, Code2, Users, Star } from "lucide-react";
import {
  SiPython, SiPostgresql, SiDjango,
  SiJavascript, SiHtml5, SiGithub, SiJupyter, SiScikitlearn, SiPandas,
} from "react-icons/si";
import { BarChart2, BarChart3 } from "lucide-react";

/* ── Core tools with icons + proficiency (1–5) ── */
const coreTools = [
  { name: "Python",       icon: <SiPython size={18} />,      level: 5, color: "text-yellow-400" },
  { name: "SQL",          icon: <Database size={18} />,       level: 5, color: "text-blue-400" },
  { name: "Tableau",      icon: <BarChart2 size={18} />,      level: 4, color: "text-orange-400" },
  { name: "Power BI",     icon: <BarChart3 size={18} />,      level: 4, color: "text-yellow-500" },
  { name: "Scikit-learn", icon: <SiScikitlearn size={18} />,  level: 4, color: "text-orange-300" },
  { name: "Pandas",       icon: <SiPandas size={18} />,       level: 5, color: "text-purple-400" },
  { name: "Jupyter",      icon: <SiJupyter size={18} />,      level: 4, color: "text-orange-400" },
  { name: "PostgreSQL",   icon: <SiPostgresql size={18} />,   level: 3, color: "text-sky-400" },
  { name: "Django",       icon: <SiDjango size={18} />,       level: 3, color: "text-green-400" },
  { name: "GitHub",       icon: <SiGithub size={18} />,       level: 4, color: "text-white" },
];

/* ── Grouped skill chips ── */
const skillCategories = [
  {
    title: "Data Science & Analytics",
    icon: <Database className="w-5 h-5" />,
    accent: "blue",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    hoverBorder: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    chipColor: "border-blue-500/30 text-blue-300 bg-blue-500/5 hover:border-blue-500/60 hover:bg-blue-500/10",
    skills: ["Python", "Oracle SQL", "Excel", "Advanced Excel", "Statistics", "Probability", "Machine Learning", "Deep Learning", "NLP", "Data Preprocessing", "Data Visualization"],
  },
  {
    title: "BI & Dashboards",
    icon: <Star className="w-5 h-5" />,
    accent: "orange",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    hoverBorder: "group-hover:border-orange-500/50",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    chipColor: "border-orange-500/30 text-orange-300 bg-orange-500/5 hover:border-orange-500/60 hover:bg-orange-500/10",
    skills: ["Tableau", "Power BI", "KPI Dashboards", "Data Storytelling", "Retail Analytics", "Sales Reporting", "Executive Reports"],
  },
  {
    title: "Hardware & VLSI",
    icon: <Cpu className="w-5 h-5" />,
    accent: "purple",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
    hoverBorder: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    chipColor: "border-purple-500/30 text-purple-300 bg-purple-500/5 hover:border-purple-500/60 hover:bg-purple-500/10",
    skills: ["Verilog", "SystemVerilog", "UVM", "RTL Design", "Digital Circuits", "CMOS Logic", "Static Timing Analysis", "FPGA", "Fixed-point Arithmetic", "UART"],
  },
  {
    title: "Web & Software",
    icon: <Code2 className="w-5 h-5" />,
    accent: "emerald",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    hoverBorder: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    chipColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5 hover:border-emerald-500/60 hover:bg-emerald-500/10",
    skills: ["Java", "HTML", "CSS", "JavaScript", "Django", "Tkinter", "PostgreSQL", "Parameterized SQL"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    accent: "teal",
    border: "border-teal-500/30",
    bg: "bg-teal-500/5",
    hoverBorder: "group-hover:border-teal-500/50",
    iconBg: "bg-teal-500/10 border-teal-500/20",
    iconColor: "text-teal-400",
    chipColor: "border-teal-500/30 text-teal-300 bg-teal-500/5 hover:border-teal-500/60 hover:bg-teal-500/10",
    skills: ["Communication", "Problem-solving", "Adaptability", "Critical Thinking", "Active Listening", "Team Lead"],
  },
];

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= level ? "bg-primary" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="02. Tech Stack"
        subtitle="Tools, languages, and methodologies I work with"
      />

      {/* ── Core Tools Spotlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
      >
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-5">
          // Core Tools
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {coreTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className={`${tool.color} group-hover:scale-110 transition-transform duration-200`}>
                {tool.icon}
              </div>
              <span className="text-[11px] font-mono text-muted-foreground group-hover:text-white transition-colors text-center">
                {tool.name}
              </span>
              <ProficiencyDots level={tool.level} />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
          <span className="text-[10px] font-mono text-muted-foreground">Proficiency:</span>
          <div className="flex items-center gap-1">
            <ProficiencyDots level={5} />
            <span className="text-[10px] font-mono text-muted-foreground ml-1">Expert</span>
          </div>
          <div className="flex items-center gap-1">
            <ProficiencyDots level={3} />
            <span className="text-[10px] font-mono text-muted-foreground ml-1">Proficient</span>
          </div>
          <div className="flex items-center gap-1">
            <ProficiencyDots level={1} />
            <span className="text-[10px] font-mono text-muted-foreground ml-1">Familiar</span>
          </div>
        </div>
      </motion.div>

      {/* ── Grouped Skill Categories ── */}
      <div className="grid md:grid-cols-2 gap-5">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`group p-6 rounded-2xl border ${category.border} ${category.bg} ${category.hoverBorder} backdrop-blur-sm transition-all duration-300 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3 mb-5">
              <div className={`p-2 rounded-lg border ${category.iconBg} ${category.iconColor}`}>
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-white">{category.title}</h3>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">{category.skills.length} skills</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] border transition-all duration-200 ${category.chipColor}`}
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
