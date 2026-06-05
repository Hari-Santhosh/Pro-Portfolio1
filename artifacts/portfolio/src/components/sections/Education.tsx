import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FlaskConical, Building2, Calendar, Award } from "lucide-react";

const education = [
  {
    id: "mtech",
    institution: "KL University",
    location: "Vijayawada, Andhra Pradesh",
    degree: "M.Tech — Electronics & Communication Engineering",
    specialization: "VLSI Design",
    period: "2025 – 2027",
    grade: "CGPA 8.55",
    current: true,
    accent: "primary",
    border: "border-primary/30",
    bg: "bg-primary/5",
    dotColor: "bg-primary",
    badgeClass: "bg-primary/15 border-primary/30 text-primary",
    statusBadge: "Pursuing",
    thesis: {
      title: "Design of Railway Passenger System using Verilog",
      details: "RTL design for passenger-flow control, reservation/ticketing state machines, display interfaces, and system-level integration with RTL simulation and verification.",
    },
    highlights: [
      "RTL Neural Network Accelerator — Team Lead",
      "SystemVerilog · Fixed-point · UART · Python host",
      "Static Timing Analysis · UVM · CMOS Design",
    ],
    courses: ["VLSI Design", "Digital IC Design", "RTL Verification", "Embedded Systems", "Advanced Digital Signal Processing"],
  },
  {
    id: "btech",
    institution: "KL University",
    location: "Vijayawada, Andhra Pradesh",
    degree: "B.Tech — Electronics & Communication Engineering",
    specialization: null,
    period: "2021 – 2025",
    grade: "CGPA 8.55",
    current: false,
    accent: "blue",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    dotColor: "bg-blue-500",
    badgeClass: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    statusBadge: "Completed",
    thesis: null,
    highlights: [
      "Data Science & Analytics — Python, SQL, ML",
      "Full-stack Banking Application — Django & PostgreSQL",
      "Tableau & Power BI dashboards",
    ],
    courses: ["Data Structures", "Digital Electronics", "Signals & Systems", "Communication Systems", "VLSI Fundamentals"],
  },
  {
    id: "inter",
    institution: "Viswasai Junior College",
    location: "Andhra Pradesh",
    degree: "Intermediate — MPC",
    specialization: "Mathematics, Physics, Chemistry",
    period: "2016 – 2018",
    grade: "931 / 1000",
    current: false,
    accent: "emerald",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    dotColor: "bg-emerald-500",
    badgeClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    statusBadge: "Completed",
    thesis: null,
    highlights: [],
    courses: [],
  },
  {
    id: "10th",
    institution: "Sri Sainadh High School",
    location: "Andhra Pradesh",
    degree: "10th Grade — SSC",
    specialization: null,
    period: "2016",
    grade: "CGPA 9.2",
    current: false,
    accent: "orange",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    dotColor: "bg-orange-500",
    badgeClass: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    statusBadge: "Completed",
    thesis: null,
    highlights: [],
    courses: [],
  },
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        title="03. Education"
        subtitle="Academic background and performance"
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border/40 to-transparent" />

        <div className="space-y-8 pl-16">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[43px] top-6 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${item.dotColor} border-2 border-background z-10 relative`}>
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  )}
                </div>
              </div>

              <Card className={`border ${item.border} ${item.bg} hover:border-opacity-60 transition-all duration-300`}>
                <CardContent className="p-6">

                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className={`font-mono text-[10px] ${item.badgeClass}`}>
                          {item.statusBadge}
                        </Badge>
                        {item.current && (
                          <Badge className="font-mono text-[10px] bg-green-500/15 border-green-500/30 text-green-300">
                            ● Active
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {item.degree}
                      </h3>
                      {item.specialization && (
                        <div className="text-primary text-sm font-medium mt-0.5">
                          {item.specialization}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className={`font-mono text-xl font-black ${
                        item.accent === "primary" ? "text-primary" :
                        item.accent === "blue" ? "text-blue-400" :
                        item.accent === "emerald" ? "text-emerald-400" : "text-orange-400"
                      }`}>
                        {item.grade}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs font-mono">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-medium text-white/80">{item.institution}</span>
                    <span className="text-border">·</span>
                    <span>{item.location}</span>
                  </div>

                  {/* Thesis (M.Tech only) */}
                  {item.thesis && (
                    <div className="mb-4 p-4 rounded-xl bg-white/3 border border-white/8">
                      <div className="flex items-center gap-2 mb-2">
                        <FlaskConical className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                          Thesis / Research
                        </span>
                      </div>
                      <div className="text-white font-semibold text-sm mb-1">{item.thesis.title}</div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.thesis.details}</p>
                    </div>
                  )}

                  {/* Highlights */}
                  {item.highlights.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                        // Key Projects & Skills
                      </div>
                      <div className="space-y-1">
                        {item.highlights.map(h => (
                          <div key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Award className="w-3 h-3 shrink-0 mt-0.5 text-primary/60" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Courses */}
                  {item.courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <BookOpen className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                          Key Courses
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.courses.map(c => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded font-mono text-[10px] bg-white/5 border border-white/10 text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
