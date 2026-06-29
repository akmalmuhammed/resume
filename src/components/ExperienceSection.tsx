import { motion, useInView } from "framer-motion";
import { BarChart3, Building2, Calendar, ChevronRight, Radar, Shield } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Security Consultant",
    type: "Information Security",
    company: "INTALEQ Technology & Consulting Services",
    client: "Aspire Zone Foundation",
    location: "Doha, Qatar",
    period: "Feb 2024 - Present",
    icon: Shield,
    summary:
      "Embedded offensive security consultant supporting red team assessments, adversary emulation, security validation, detection engineering, and executive advisory across critical infrastructure environments in Qatar.",
    bullets: [
      "Delivered red team and VAPT engagements across enterprise, web, mobile, wireless, OT/IoT, and cloud environments, translating attack paths into business-impact narratives and remediation plans.",
      "Authored GCC-region adversary emulation playbooks for APT39, MuddyWater, Stealth Falcon, and APT34, mapping behaviors to MITRE ATT&CK and environment-specific detection coverage.",
      "Ran quarterly Mandiant Security Validation exercises across endpoint, email, network, and cloud controls using 200+ ATT&CK-mapped techniques with retest cycles for validation gaps.",
      "Performed controlled payload, EDR, lateral movement, privilege escalation, and Active Directory attack-path testing across Windows environments using approved engagement rules.",
      "Validated Azure and GCP security posture with Prisma Cloud and Microsoft Defender for Cloud, including identity, service principal, conditional access, and cloud control review.",
      "Built and tuned 200+ KQL detections and threat-hunting workflows across Microsoft Sentinel, Cortex XDR/XSOAR, SentinelOne, Defender XDR, and Darktrace telemetry.",
      "Produced technical and executive reports, C-level briefings, and engagement-to-remediation closure materials for high-visibility event and critical infrastructure stakeholders.",
    ],
    tags: ["Red Team", "Mandiant Security Validation", "MITRE ATT&CK", "Azure/GCP", "KQL", "Cortex XSOAR"],
  },
  {
    role: "Senior Analyst",
    type: "Cybersecurity & Analytics",
    company: "Interactive Avenues (IPG / WPP)",
    location: "Mumbai, India",
    period: "Mar 2023 - Dec 2023",
    icon: Radar,
    summary:
      "Delivered web security, VAPT, malicious JavaScript analysis, anomaly detection, and client-facing remediation guidance for enterprise digital platforms.",
    bullets: [
      "Conducted web application security assessments that identified XSS, SQL injection, IDOR, authentication weaknesses, and malicious JavaScript injection patterns.",
      "Reverse-engineered suspicious client-side payloads to document behavior, delivery path, and attacker objective for incident and remediation reporting.",
      "Built Python anomaly-detection workflows for traffic analysis, bot identification, suspicious behavior surfacing, and third-party script exposure review.",
      "Implemented data security and role-based access controls for BI/reporting environments and converted scan output into prioritized remediation guidance.",
    ],
    tags: ["Web AppSec", "VAPT", "Python", "RBAC", "Client Reporting"],
  },
  {
    role: "Executive",
    type: "Analytics and Reporting",
    company: "GroupM",
    location: "Bengaluru, India",
    period: "Jun 2021 - Jun 2023",
    icon: BarChart3,
    summary:
      "Built enterprise reporting, access-control, SQL, and stakeholder-delivery habits that now support security consulting, detection engineering, and executive reporting.",
    bullets: [
      "Built Power BI, SQL, and Salesforce Datorama reporting workflows for large enterprise client environments with recurring validation and delivery automation.",
      "Designed least-privilege access models across multi-tenant reporting infrastructure, strengthening the access-control foundation used in later AD and cloud attack-path work.",
      "Managed stakeholder communication and project delivery across cross-functional teams, building the advisory discipline required for consulting engagements.",
    ],
    tags: ["Power BI", "SQL", "Access Control", "Stakeholder Delivery"],
  },
];

const ExperienceCard = ({ exp, index }: { exp: (typeof experiences)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-lg border border-border bg-card p-5 sm:p-6 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-10 h-10 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0"
        >
          <exp.icon className="w-4.5 h-4.5 text-primary" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base font-display font-bold text-foreground">
                {exp.role}
                {exp.type && <span className="block sm:inline text-xs font-mono font-normal text-muted-foreground sm:ml-2">// {exp.type}</span>}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mt-1 flex flex-wrap items-center gap-1.5">
                <Building2 className="w-3 h-3" />
                {exp.company}
                {exp.client && <span className="text-primary/70">{"->"} {exp.client}</span>}
                <span className="text-muted-foreground/60">/ {exp.location}</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground whitespace-nowrap shrink-0 px-2 py-0.5 rounded-md bg-secondary">
              <Calendar className="w-3 h-3" /> {exp.period}
            </span>
          </div>

          <p className="text-sm text-foreground/70 leading-relaxed mb-4">{exp.summary}</p>

          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + j * 0.04 + 0.2 }}
                className="flex gap-2 text-sm text-foreground/70 leading-relaxed"
              >
                <ChevronRight className="w-3 h-3 text-primary/60 shrink-0 mt-1.5" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// career</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Relevant Consulting Experience</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Public-facing summary tailored for red team consulting: high-signal outcomes, client advisory, and sanitized operational detail.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
