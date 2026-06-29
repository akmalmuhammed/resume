import { motion, useInView } from "framer-motion";
import { Cloud, Crosshair, FileText, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const fitCards = [
  {
    title: "Threat-led red and purple team delivery",
    icon: Crosshair,
    body: "Built adversary emulation plans for GCC-region threat actors and converted TTPs into controlled test scenarios, detection coverage checks, and remediation backlogs.",
    evidence: ["APT39 / MuddyWater / APT34 profiling", "MITRE ATT&CK mapping", "Purple-team retest cycles"],
  },
  {
    title: "Payload, EDR, and operating-system tradecraft",
    icon: ShieldCheck,
    body: "Hands-on payload validation across endpoint controls, Windows internals, Active Directory attack paths, lateral movement, and privilege-escalation scenarios.",
    evidence: ["Python / C / Nim tooling", "AMSI / ETW / syscall concepts", "BloodHound-driven AD paths"],
  },
  {
    title: "Cloud security assessment and attack paths",
    icon: Cloud,
    body: "Validated Azure and GCP posture with identity, IAM, service principal, conditional-access, and cloud-control review using Prisma Cloud and Defender for Cloud.",
    evidence: ["GCP posture review", "Azure / Entra ID attack paths", "Cloud control validation"],
  },
  {
    title: "Client advisory and executive reporting",
    icon: FileText,
    body: "Delivered technical evidence, executive summaries, risk narratives, live briefings, and engagement-to-remediation closure for critical infrastructure stakeholders.",
    evidence: ["C-level briefings", "Technical and executive reports", "Remediation closure"],
  },
];

const MandiantFitSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="fit" className="py-20 sm:py-24 border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// role fit</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Google Cloud / Mandiant Red Team Alignment</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            The role asks for red and purple team assessments, adversary emulation, cloud security, payload development, reporting, and client-facing consulting. These are the strongest matching signals from the latest CV.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {fitCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-border bg-background/70 p-5 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0">
                  <card.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{card.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.evidence.map((item) => (
                      <span key={item} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground">
                        {item}
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

export default MandiantFitSection;
