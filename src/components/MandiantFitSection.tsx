import { motion, useInView } from "framer-motion";
import { CheckCircle2, Cloud, Code2, FileText, Radar, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const evidenceRows = [
  {
    requirement: "Red and purple team assessments",
    evidence: "Critical-infrastructure red team, VAPT, adversary emulation, and quarterly security validation work.",
    proof: ["ATT&CK-mapped execution", "Purple-team retests", "Detection-gap closure"],
    icon: Radar,
  },
  {
    requirement: "Payload, EDR, OS, and AD tradecraft",
    evidence: "Controlled payload validation, Windows internals, Active Directory attack-path testing, lateral movement, and privilege-escalation simulation.",
    proof: ["Python / C / Nim", "Windows internals", "BloodHound-led paths"],
    icon: ShieldCheck,
  },
  {
    requirement: "Cloud security and identity attack paths",
    evidence: "Azure and GCP posture review across identity, IAM, service principals, conditional access, and control validation.",
    proof: ["GCP posture review", "Azure / Entra ID", "Prisma Cloud"],
    icon: Cloud,
  },
  {
    requirement: "Security tool architecture",
    evidence: "Built production security products that automate assessment workflows, phishing intelligence, and zero-footprint analyst utilities.",
    proof: ["FastAPI / GCP", "Next.js / Prisma", "WebAssembly"],
    icon: Code2,
  },
  {
    requirement: "Client-facing consulting delivery",
    evidence: "Technical evidence packs, executive summaries, C-level briefings, remediation planning, and retest-ready engagement closure.",
    proof: ["Executive reporting", "Risk narratives", "Remediation closure"],
    icon: FileText,
  },
];

const MandiantFitSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="evidence" className="py-20 sm:py-24 border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// proof matrix</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Role Requirements Mapped To Evidence</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            A quick recruiter-readable map from the Mandiant red team consultant requirements to public, sanitized proof from the latest CV.
          </p>
        </motion.div>

        <div className="rounded-[8px] border border-border bg-background/70 overflow-hidden">
          {evidenceRows.map((row, i) => (
            <motion.article
              key={row.requirement}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 border-b border-border p-5 last:border-b-0 md:grid-cols-[240px_minmax(0,1fr)_280px] md:items-start"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0">
                  <row.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground leading-snug">{row.requirement}</h3>
              </div>

              <p className="text-sm text-foreground/72 leading-relaxed">{row.evidence}</p>

              <div className="flex flex-wrap gap-1.5">
                {row.proof.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground">
                    <CheckCircle2 className="w-3 h-3 text-gh-green" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MandiantFitSection;
