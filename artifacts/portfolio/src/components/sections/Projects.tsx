import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FolderGit2, Cpu, Activity, Database, Sparkles, Zap, Clock, MemoryStick, Layers, Radio, Train, FlaskConical, Monitor, Globe, ShieldCheck, BarChart3, TrendingUp, MapPin, ShoppingCart } from "lucide-react";

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

        {/* Banking Application */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="h-full"
        >
          <Card className="group h-full bg-card/40 border-border/50 hover:border-blue-500/40 transition-all duration-300 border-l-4 border-l-blue-500 hover:shadow-[0_0_28px_-8px_rgba(59,130,246,0.3)]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 w-fit">
                  <FolderGit2 className="w-5 h-5 text-blue-400" />
                </div>
                <Badge variant="outline" className="font-mono text-[10px] bg-green-500/10 border-green-500/30 text-green-300">Completed</Badge>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                Banking Application
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                Full banking system with a Django web interface and Tkinter desktop client, backed by PostgreSQL — covering everyday workflows end-to-end from onboarding to transactions.
              </p>
            </CardHeader>
            <CardContent className="pb-3 space-y-1.5">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Monitor className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Dual interface:</span> Django web UI + Tkinter desktop sharing the same backend logic</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Transactions:</span> balance checks, deposits, and withdrawals with validation</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Database className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Data layer:</span> PostgreSQL schemas, connection pooling, and parameterized SQL queries</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Globe className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Account management:</span> customer onboarding, profile views, and record maintenance</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex-wrap gap-1.5">
              {["Python", "Django", "Tkinter", "PostgreSQL", "SQL"].map(t => (
                <TechChip key={t} label={t} />
              ))}
            </CardFooter>
          </Card>
        </motion.div>

        {/* Super Store Sales Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="h-full"
        >
          <Card className="group h-full bg-card/40 border-border/50 hover:border-teal-500/40 transition-all duration-300 border-l-4 border-l-teal-500 hover:shadow-[0_0_28px_-8px_rgba(20,184,166,0.3)]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 w-fit">
                  <BarChart3 className="w-5 h-5 text-teal-400" />
                </div>
                <Badge variant="outline" className="font-mono text-[10px] bg-green-500/10 border-green-500/30 text-green-300">Completed</Badge>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                Super Store Sales Report
              </h3>
              {/* KPI highlights */}
              <div className="flex gap-3 mt-2">
                <div className="flex flex-col">
                  <span className="font-mono text-teal-300 text-sm font-bold">$1.48M</span>
                  <span className="text-muted-foreground text-[10px]">Total Sales</span>
                </div>
                <div className="w-px bg-border/50" />
                <div className="flex flex-col">
                  <span className="font-mono text-teal-300 text-sm font-bold">13.09%</span>
                  <span className="text-muted-foreground text-[10px]">Profit Margin</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-3 space-y-1.5">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Geographic:</span> region-wise sales totals and state-level ranking of top markets</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShoppingCart className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Product insights:</span> category-wise profit, subcategory sales, and top-performing SKUs</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Growth & correlation:</span> sales trends over time; sales vs. profit vs. discount rate analysis</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <BarChart3 className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Dashboards:</span> dynamic views for AOV, order volume, and period-over-period movement</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex-wrap gap-1.5">
              {["Tableau", "Retail Analytics", "KPI Dashboards", "Data Storytelling"].map(t => (
                <TechChip key={t} label={t} />
              ))}
            </CardFooter>
          </Card>
        </motion.div>

        {/* Solar Power Prediction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="h-full"
        >
          <Card className="group h-full bg-card/40 border-border/50 hover:border-green-500/40 transition-all duration-300 border-l-4 border-l-green-500 hover:shadow-[0_0_28px_-8px_rgba(34,197,94,0.3)]">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
                  <Sparkles className="w-5 h-5 text-green-400" />
                </div>
                <Badge variant="outline" className="font-mono text-[10px] bg-green-500/10 border-green-500/30 text-green-300">Completed</Badge>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-green-300 transition-colors leading-snug">
                Solar Power Prediction
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                ML model predicting solar energy output from environmental and meteorological inputs — demonstrating an end-to-end data science workflow from preprocessing to evaluation.
              </p>
            </CardHeader>
            <CardContent className="pb-3 space-y-1.5">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Zap className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Feature engineering</span> on meteorological inputs for improved predictive accuracy</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Activity className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                <span><span className="text-white font-medium">Model evaluation</span> with standard regression metrics and cross-validation</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Globe className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                <span>Available on <span className="text-white font-medium">GitHub</span> — open-source and reproducible</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex-wrap gap-1.5">
              {["Python", "Scikit-learn", "Pandas", "ML", "GitHub"].map(t => (
                <TechChip key={t} label={t} />
              ))}
            </CardFooter>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
}
