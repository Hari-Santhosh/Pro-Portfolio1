import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FolderGit2, Cpu, Activity, Database, Sparkles } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hardware Neural Network Accelerator",
      description: "Production-grade RTL design with 4-8-8-2 architecture and UART interface. Implemented full SystemVerilog UVM testbench and formal verification approach.",
      badges: ["Lead", "Completed", "Hardware"],
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      accent: "border-l-purple-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
    },
    {
      title: "Railway Passenger System",
      description: "Upcoming thesis at KL University. Designing RTL modules for ticketing and passenger flow using Verilog with FSMs for displays, simulation & verification.",
      badges: ["Thesis", "VLSI", "Upcoming"],
      icon: <Activity className="w-6 h-6 text-orange-400" />,
      accent: "border-l-orange-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
    },
    {
      title: "Banking Application",
      description: "Comprehensive desktop and web banking logic built with Django, Tkinter, and PostgreSQL. Handles user accounts, transactions, and security.",
      badges: ["Full Stack", "Completed"],
      icon: <FolderGit2 className="w-6 h-6 text-blue-400" />,
      accent: "border-l-blue-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Super Store Report",
      description: "Interactive Tableau dashboard for retail analytics providing deep insights into sales, profit margins, and consumer trend analysis.",
      badges: ["Analytics", "Tableau", "Completed"],
      icon: <Database className="w-6 h-6 text-teal-400" />,
      accent: "border-l-teal-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]"
    },
    {
      title: "Solar Power Prediction",
      description: "Machine learning model developed to accurately predict solar energy output based on environmental and meteorological factors.",
      badges: ["ML", "GitHub", "Completed"],
      icon: <Sparkles className="w-6 h-6 text-green-400" />,
      accent: "border-l-green-500",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
    }
  ];

  return (
    <Section id="projects">
      <SectionHeading 
        title="04. Featured Systems" 
        subtitle="Selected hardware and software projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="h-full"
          >
            <Card className={`group h-full bg-card/40 border-border/50 hover:border-border transition-all duration-300 border-l-4 ${project.accent} ${project.glow}`}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-white/5">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0 mt-auto flex-wrap gap-2">
                {project.badges.map(badge => (
                  <Badge 
                    key={badge} 
                    variant="outline" 
                    className="font-mono text-[10px] bg-white/5 border-white/10"
                  >
                    {badge}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
