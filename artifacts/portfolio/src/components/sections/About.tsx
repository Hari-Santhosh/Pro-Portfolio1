import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
          className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-white"
        >
          <p>
            I am an enthusiastic <strong>Data Analyst</strong> with strengths in statistical modeling, machine learning, dashboards, and predictive analytics. I leverage tools like <strong>Python, SQL, Tableau, and Power BI</strong> to extract meaningful narratives from complex data.
          </p>
          <p>
            Currently pursuing my <strong>M.Tech in ECE (VLSI)</strong> at KL University, I am fascinated by the intersection of hardware performance and software intelligence. My upcoming thesis focuses on the Design of a Railway Passenger System using Verilog, and I have recently completed a production-grade RTL Neural Network accelerator project.
          </p>
          <p>
            Certified via <strong>Besant Technologies</strong> and <strong>Reliance Foundation</strong>, I bring a rigorous engineering mindset to data problems and an analytical approach to hardware design.
          </p>
        </motion.div>
        
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
      </div>
    </Section>
  );
}
