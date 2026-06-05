import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Languages } from "lucide-react";

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: { from: number; to: number; duration?: number; suffix?: string; prefix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(from + easeProgress * (to - from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef} className="font-mono tabular-nums">
      {prefix}{count % 1 !== 0 ? count.toFixed(2) : Math.floor(count)}{suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { label: "M.Tech CGPA", value: 8.55, suffix: "" },
    { label: "Hackathon Rank", value: 16, suffix: "", prefix: "#" },
    { label: "Months Data Science Training", value: 9, suffix: "+" },
    { label: "Key Projects", value: 4, suffix: "+" },
  ];

  return (
    <Section id="about">
      <SectionHeading 
        title="01. Profile" 
        subtitle="Background and core statistics"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed">
            Enthusiastic <span className="text-white font-medium">Data Analyst</span> with a strong foundation in data analysis, statistical modeling, and machine learning. Proficient in <span className="text-white font-medium">Python, SQL, Tableau, and Power BI</span>, with proven experience designing dashboards and building predictive models. Holder of Data Science certifications from <span className="text-white font-medium">Besant Technologies</span> and <span className="text-white font-medium">Reliance Foundation</span>, with expertise in data preprocessing, visualization, and deriving actionable insights from complex datasets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Motivated to apply analytical and technical skills to solve business challenges and drive data-informed decision-making in dynamic, results-oriented organizations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pursuing an <span className="text-white font-medium">M.Tech in ECE (VLSI)</span> at KL University (2025–2027). Upcoming thesis: design of a railway passenger system using Verilog — developing digital logic for passenger-flow control, reservation/ticketing state machines, display interfaces, and system-level integration with RTL simulation and verification.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Already completed a major M.Tech project as <span className="text-white font-medium">team lead</span> on a custom <span className="text-primary font-medium">RTL neural network accelerator</span> (SystemVerilog, fixed-point arithmetic, UART, Python host). Toolkit spans Verilog, SystemVerilog, digital/CMOS design, static timing analysis, and UVM — connecting data analytics with dependable hardware engineering.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 flex flex-col justify-center h-full">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-primary">
                      <Counter from={0} to={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Location + Languages */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Location</div>
                  <div className="text-white font-semibold text-sm">India</div>
                  <div className="text-muted-foreground text-xs mt-0.5">Nellore, Andhra Pradesh</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                  <Languages className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">Languages</div>
                  <div className="flex flex-wrap gap-1">
                    {["Telugu", "Tamil", "English", "Kannada"].map(lang => (
                      <span key={lang} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
