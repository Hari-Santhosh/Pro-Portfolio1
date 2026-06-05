import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FolderGit2, Cpu, Activity, Database, Sparkles, Zap, Clock, MemoryStick, Layers, Radio, Train, FlaskConical } from "lucide-react";

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center min-w-[80px]">
      <span className="font-mono text-primary text-sm font-bold leading-tight">{value}</span>
      <span className="text-muted-foreground text-[10px] mt-0.5 leading-tight">{label}</span>
    </div>
  );
}

function TechChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary/80">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="04. Featured Systems"
        subtitle="Selected hardware and software projects"
      />

      {/* ── Featured hardware projects ── */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">

        {/* HW Neural Network Accelerator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="h-full"
        >
          <Card className="group h-full bg-card/40 border-border/50 hover:border-purple-500/40 transition-all duration-300 border-l-4 border-l-purple-500 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.35)]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono text-[10px]">Project Lead</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-mono text-[10px]">Completed</Badge>
                  <Badge variant="outline" className="font-mono text-[10px] bg-white/5 border-white/10">M.Tech</Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                Hardware Neural Network Accelerator
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                Custom RTL-based 3-layer neural network accelerator without third-party IP. Topology{" "}
                <span className="font-mono text-primary/80 text-xs">4→8→8→8→8→2</span> with 112 on-chip
                weights stored as 16-bit fixed-point values. Served as project lead for top-level
                integration, state-machine design, and full SystemVerilog verification — delivered
                FPGA/ASIC-ready.
              </p>
            </CardHeader>

            <CardContent className="pb-4 space-y-4">
              {/* Performance metrics */}
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">Performance</p>
                <div className="flex flex-wrap gap-2">
                  <MetricPill label="Inference Latency" value="280 cyc" />
                  <MetricPill label="@ 100 MHz" value="2.8 µs" />
                  <MetricPill label="Throughput" value="357K/s" />
                  <MetricPill label="On-chip Weights" value="112 × 16b" />
                </div>
              </div>

              {/* Key features */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">Activations:</span> ReLU, Sigmoid, Tanh, Linear via piecewise-linear approximations for silicon efficiency</span>
                </div>
                <div className="flex items-start gap-2">
                  <Radio className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">UART interface</span> @ 115200 baud for runtime model swapping &amp; weight updates without re-synthesis</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">Python host interface</span> for model load, inference execution, and status monitoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <FlaskConical className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">Verification:</span> SystemVerilog testbench with positive, negative, zero &amp; large-value stimulus — all functional requirements met</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0 flex-wrap gap-1.5">
              {["SystemVerilog", "RTL", "Fixed-point NN", "UART", "Python host", "FPGA/ASIC"].map(t => (
                <TechChip key={t} label={t} />
              ))}
            </CardFooter>
          </Card>
        </motion.div>

        {/* Railway Passenger System */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="h-full"
        >
          <Card className="group h-full bg-card/40 border-border/50 hover:border-orange-500/40 transition-all duration-300 border-l-4 border-l-orange-500 hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Train className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 font-mono text-[10px]">Active Research</Badge>
                  <Badge variant="outline" className="font-mono text-[10px] bg-white/5 border-white/10">M.Tech Thesis</Badge>
                  <Badge variant="outline" className="font-mono text-[10px] bg-white/5 border-white/10">KL University</Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                Design of Railway Passenger System using Verilog
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                Current M.Tech thesis and research direction at KL University (VLSI specialization).
                A complete digital hardware description of a railway passenger management system —
                modeling real-world operational flows using modular Verilog RTL blocks.
              </p>
            </CardHeader>

            <CardContent className="pb-4 space-y-4">
              {/* Architecture pillars */}
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">System Scope</p>
                <div className="flex flex-wrap gap-2">
                  <MetricPill label="Architecture" value="RTL" />
                  <MetricPill label="Design Style" value="FSM" />
                  <MetricPill label="Target" value="FPGA/ASIC" />
                  <MetricPill label="Spec Language" value="Verilog" />
                </div>
              </div>

              {/* Key design areas */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">RTL architecture:</span> hierarchical Verilog modules with clear interfaces between control, datapath, and I/O</span>
                </div>
                <div className="flex items-start gap-2">
                  <Activity className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">FSM design:</span> state machines for booking, validation, seat/berth allocation, and passenger-handling sequences</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">Modeled flows:</span> ticketing, passenger counting, status displays, and supervisory control</span>
                </div>
                <div className="flex items-start gap-2">
                  <FlaskConical className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                  <span><span className="text-white font-medium">Verification:</span> simulation testbenches, functional coverage, and timing-aware design practices toward FPGA prototype</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0 flex-wrap gap-1.5">
              {["Verilog", "RTL", "FSM", "Testbench", "FPGA", "ASIC", "VLSI"].map(t => (
                <TechChip key={t} label={t} />
              ))}
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* ── Secondary projects ── */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            title: "Banking Application",
            description: "Full-stack banking system with Django web interface, Tkinter desktop UI, and PostgreSQL. Implements account creation, deposits, withdrawals, and SQL-driven data management.",
            badges: ["Full Stack", "Completed"],
            icon: <FolderGit2 className="w-5 h-5 text-blue-400" />,
            accent: "border-l-blue-500",
            glow: "hover:shadow-[0_0_28px_-8px_rgba(59,130,246,0.3)]",
            tech: ["Django", "Tkinter", "PostgreSQL", "Python"],
          },
          {
            title: "Super Store Sales Report",
            description: "Interactive Tableau dashboard analyzing $1.48M in retail sales with 13.09% profit margin — region-wise breakdowns, category profits, and dynamic trend dashboards.",
            badges: ["Analytics", "Tableau", "Completed"],
            icon: <Database className="w-5 h-5 text-teal-400" />,
            accent: "border-l-teal-500",
            glow: "hover:shadow-[0_0_28px_-8px_rgba(20,184,166,0.3)]",
            tech: ["Tableau", "Data Viz", "Business Analytics"],
          },
          {
            title: "Solar Power Prediction",
            description: "ML model predicting solar energy output from environmental and meteorological inputs. Demonstrates end-to-end data science workflow from preprocessing to evaluation.",
            badges: ["ML", "GitHub", "Completed"],
            icon: <Sparkles className="w-5 h-5 text-green-400" />,
            accent: "border-l-green-500",
            glow: "hover:shadow-[0_0_28px_-8px_rgba(34,197,94,0.3)]",
            tech: ["Python", "Scikit-learn", "Pandas"],
          },
        ].map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="h-full"
          >
            <Card className={`group h-full bg-card/40 border-border/50 hover:border-border transition-all duration-300 border-l-4 ${project.accent} ${project.glow}`}>
              <CardHeader className="pb-3">
                <div className="p-2.5 rounded-lg bg-white/5 w-fit mb-3">
                  {project.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex-col items-start gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => <TechChip key={t} label={t} />)}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.badges.map(badge => (
                    <Badge
                      key={badge}
                      variant="outline"
                      className="font-mono text-[10px] bg-white/5 border-white/10"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
