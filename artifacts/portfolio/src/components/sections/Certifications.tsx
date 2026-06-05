import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Terminal, CheckCircle2, Calendar, Building2, Zap } from "lucide-react";

/* ── Featured achievement ── */
const hackathon = {
  title: "AI/ML FPGA Hackathon 2025",
  organizer: "NIT Jamshedpur × VLSI FOR ALL",
  date: "2025",
  rank: "Rank 16",
  description:
    "National-level competition focused on deploying AI/ML workloads on FPGA hardware. Competed against teams from premier engineering institutions across India, ranking 16th nationwide.",
  highlights: [
    "FPGA-based ML deployment challenge",
    "National-level competition",
    "Teams from IITs, NITs & premier institutes",
  ],
};

/* ── Certifications ── */
const certs = [
  {
    title: "Data Science Training Program",
    issuer: "Besant Technologies",
    period: "Jan 2024 – Sep 2024",
    duration: "9 months",
    type: "Training Certificate",
    color: "blue",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    icon: <BookOpen className="w-5 h-5" />,
    topics: [
      "Python for Data Science",
      "Statistics & Probability",
      "Machine Learning algorithms",
      "Deep Learning & NLP",
      "Data preprocessing & visualization",
      "Model evaluation & tuning",
    ],
    description:
      "Comprehensive 9-month data science program covering the full ML pipeline — from data wrangling to deploying predictive models.",
  },
  {
    title: "Data Science Essentials",
    issuer: "Reliance Foundation",
    period: "Nov 2024",
    duration: "Certificate course",
    type: "Certification",
    color: "emerald",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badgeClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    icon: <Award className="w-5 h-5" />,
    topics: [
      "Data analysis fundamentals",
      "Statistical modeling",
      "Actionable insights from data",
      "Business-oriented analytics",
    ],
    description:
      "Industry-recognised certification from Reliance Foundation covering core data science principles and practical analytics workflows.",
  },
  {
    title: "Java Full Stack Development",
    issuer: "JSpiders Hebbal",
    period: "Jan 2023 – Jun 2023",
    duration: "6 months",
    type: "Training Certificate",
    color: "orange",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    badgeClass: "bg-orange-500/10 border-orange-500/30 text-orange-300",
    icon: <Terminal className="w-5 h-5" />,
    topics: ["Core Java & OOP", "HTML · CSS · JavaScript", "SQL & database design", "Full-stack project development"],
    description:
      "Hands-on full-stack training covering Java back-end development, front-end web technologies, and relational database design.",
  },
];

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        title="05. Certifications & Awards"
        subtitle="Continuous learning and competitive achievements"
      />

      {/* ── Featured Hackathon Achievement ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-8"
      >
        <Card className="relative overflow-hidden border-yellow-500/40 bg-yellow-500/5 hover:border-yellow-500/60 transition-all duration-300">
          {/* glow orbs */}
          <div className="absolute -right-10 -top-10 w-52 h-52 bg-yellow-500/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-[50px] pointer-events-none" />

          <CardContent className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">

              {/* Trophy icon + rank */}
              <div className="flex md:flex-col items-center gap-4 md:gap-3 shrink-0">
                <div className="p-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                  <Trophy className="w-9 h-9 text-yellow-400" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-2xl font-black text-yellow-400 leading-none">16</span>
                  <span className="font-mono text-[10px] text-yellow-500/70 uppercase tracking-widest">Rank</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <Badge className="bg-yellow-500/20 border-yellow-500/40 text-yellow-300 font-mono text-[10px]">
                    🏆 National Competition
                  </Badge>
                  <Badge variant="outline" className="font-mono text-[10px] bg-white/5 border-white/10 text-muted-foreground">
                    {hackathon.date}
                  </Badge>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-1">
                  {hackathon.title}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{hackathon.organizer}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hackathon.highlights.map(h => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-yellow-300/80">
                      <Zap className="w-3 h-3 text-yellow-500 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ── Certifications grid ── */}
      <div className="grid md:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="h-full"
          >
            <Card className={`group h-full border ${cert.border} ${cert.bg} hover:border-opacity-60 transition-all duration-300`}>
              <CardContent className="p-5 flex flex-col h-full">

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${cert.iconBg} ${cert.iconColor}`}>
                    {cert.icon}
                  </div>
                  <Badge variant="outline" className={`font-mono text-[10px] ${cert.badgeClass}`}>
                    {cert.type}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors mb-1 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                  <Building2 className="w-3 h-3 shrink-0" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span className="font-mono">{cert.period}</span>
                  <span className="text-border">·</span>
                  <span>{cert.duration}</span>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Topics */}
                <div className="mt-auto space-y-1.5">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    // Topics covered
                  </div>
                  {cert.topics.map(topic => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className={`w-3 h-3 shrink-0 ${cert.iconColor}`} />
                      {topic}
                    </div>
                  ))}
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
