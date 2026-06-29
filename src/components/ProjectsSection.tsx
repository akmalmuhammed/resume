import { motion, useInView } from "framer-motion";
import { Bot, Cloud, Crosshair, FileSearch, RadioTower } from "lucide-react";
import { useRef } from "react";

const caseStudies = [
  {
    title: "Threat-Led Adversary Emulation Program",
    context: "Critical infrastructure / enterprise controls",
    problem: "Security leadership needed evidence that GCC-region threat behaviors would be detected across endpoint, identity, network, and SIEM layers.",
    approach:
      "Translated threat-actor TTPs into controlled test scenarios, mapped each step to ATT&CK, measured coverage, and converted validation gaps into detection-engineering work.",
    outcome: "Created a repeatable purple-team cadence with executive-ready findings, technical evidence, and retestable remediation actions.",
    tags: ["MITRE ATT&CK", "Mandiant Security Validation", "KQL", "Purple Team"],
    icon: Crosshair,
  },
  {
    title: "Cloud Identity Attack Path Assessment",
    context: "Azure, GCP, IAM, and posture review",
    problem: "Cloud posture findings needed to be reframed from isolated misconfigurations into realistic identity and privilege paths.",
    approach:
      "Reviewed identity controls, service principals, conditional access, IAM exposure, cloud posture tooling output, and detection coverage across Azure and GCP.",
    outcome: "Produced prioritized remediation themes for identity hardening, cloud control validation, and monitoring improvements.",
    tags: ["GCP", "Azure / Entra ID", "Prisma Cloud", "Defender for Cloud"],
    icon: Cloud,
  },
  {
    title: "Autonomous External Assessment Platform",
    context: "Assessment throughput and evidence quality",
    problem: "Manual external assessments were slow to repeat, hard to scale, and inconsistent in evidence capture.",
    approach:
      "Built five isolated agent workflows for OSINT, enumeration, screenshots, controlled validation, and technical/executive report generation with human approval gates.",
    outcome: "Compressed assessment cycles from days to hours while preserving consulting-quality evidence and controlled execution.",
    tags: ["Python", "FastAPI", "Docker", "GCP", "LLM Orchestration"],
    icon: Bot,
  },
  {
    title: "Phishing Intelligence & Triage Platform",
    context: "MXLens / browser-local analysis",
    problem: "Analysts needed faster verdicts for suspicious emails without uploading sensitive message content to third-party systems.",
    approach:
      "Built browser-local detection modules for spoofing, typosquatting, QR phishing, redirects, authentication signals, and phishing intent scoring.",
    outcome: "Reduced investigation time from manual review to a fast local verdict while supporting red-team scenario design and SOC triage workflows.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    icon: FileSearch,
  },
  {
    title: "OT/IoT Visibility & Segmentation Review",
    context: "Clinical, venue, and operations networks",
    problem: "Operational networks needed safer visibility into unmanaged devices and segmentation paths without disruptive active scanning.",
    approach:
      "Used passive visibility tooling, architecture review, and controlled path validation to identify asset exposure and segmentation improvement areas.",
    outcome: "Delivered a safer remediation plan for device inventory, network segmentation, and monitoring without exposing sensitive asset details publicly.",
    tags: ["OT/IoT", "Forescout", "Segmentation", "Critical Infrastructure"],
    icon: RadioTower,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="case-studies" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// case studies</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Anonymized Consulting Proof</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Public-safe case studies that show the operating model: problem framing, controlled execution, evidence capture, and remediation outcomes.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 ? "rounded-[8px] border border-primary/20 bg-card p-5 lg:col-span-2" : "rounded-[8px] border border-border bg-card p-5"}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="w-10 h-10 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0">
                  <study.icon className="w-4.5 h-4.5 text-primary" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-4">
                    <h3 className="text-base font-display font-bold text-foreground">{study.title}</h3>
                    <p className="text-[11px] font-mono text-primary/70 mt-1">{study.context}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      ["Problem", study.problem],
                      ["Approach", study.approach],
                      ["Outcome", study.outcome],
                    ].map(([label, text]) => (
                      <div key={label} className="rounded-[8px] border border-border/70 bg-background/55 p-3">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-primary/70 mb-2">{label}</p>
                        <p className="text-xs text-foreground/72 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
