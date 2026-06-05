import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ id, children, className = "", delay = 0 }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
      >
        {title}
        <span className="text-primary">.</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function SectionSeparator() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
  );
}
