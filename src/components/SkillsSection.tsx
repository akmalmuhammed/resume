import { motion, useInView } from "framer-motion";
import { Brain, Cloud, Code2, Crosshair, FileText } from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Offensive Operations",
    icon: Crosshair,
    summary: "Red team assessments, adversary emulation, payload validation, lateral movement, privilege escalation, web/mobile testing, and controlled PoC validation.",
    highlights: ["Red / purple team", "AD attack paths", "Web + mobile AppSec"],
  },
  {
    title: "Cloud & Identity Security",
    icon: Cloud,
    summary: "GCP and Azure posture review, identity attack paths, IAM exposure, service principals, conditional access, device-code flows, and cloud-control validation.",
    highlights: ["GCP", "Azure / Entra ID", "Prisma Cloud"],
  },
  {
    title: "Detection & Validation",
    icon: Brain,
    summary: "Mandiant Security Validation, MITRE ATT&CK mapping, KQL detection engineering, threat hunting, XDR/SIEM tuning, and SOAR workflow design.",
    highlights: ["MSV", "KQL", "Sentinel / XDR / XSOAR"],
  },
  {
    title: "Security Tool Development",
    icon: Code2,
    summary: "Python, FastAPI, Next.js, TypeScript, Docker, PostgreSQL, WebAssembly, and LLM orchestration for offensive and analyst tooling.",
    highlights: ["FastAPI", "Next.js", "Docker / GCP"],
  },
  {
    title: "Consulting Delivery",
    icon: FileText,
    summary: "Scoping, rules of engagement, stakeholder briefings, executive reporting, technical evidence packs, remediation planning, and retest closure.",
    highlights: ["Executive reports", "Risk narratives", "Retest cycles"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-20 sm:py-24 border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// capability map</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Core Capabilities</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Grouped like a senior technical portfolio: capability first, tools second.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-5">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[8px] border border-border bg-background/70 p-5 hover:border-primary/15 transition-colors duration-300 lg:col-span-1"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center">
                  <group.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">{group.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{group.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.highlights.map((item) => (
                  <span key={item} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground">
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

export default SkillsSection;
