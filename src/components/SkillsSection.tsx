import { motion, useInView } from "framer-motion";
import { Brain, Cloud, Code2, Cpu, Crosshair, Eye, Fingerprint, Network } from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Red / Purple Team",
    icon: Crosshair,
    items: ["Red team assessments", "Adversary emulation", "Attack simulation", "Detection-gap analysis", "Controlled PoC validation"],
  },
  {
    title: "Payloads & EDR",
    icon: Fingerprint,
    items: ["Python / C / Nim", "Shellcode loaders", "Process injection", "AMSI / ETW concepts", "Syswhispers3", "Sleep masking"],
  },
  {
    title: "AD & Lateral Movement",
    icon: Network,
    items: ["BloodHound", "Impacket", "Mimikatz", "Rubeus", "Kerberoasting", "Delegation abuse", "Windows privilege escalation"],
  },
  {
    title: "Web & Mobile AppSec",
    icon: Eye,
    items: ["OWASP Top 10", "Burp Suite Pro", "API testing", "Fortra SAST / DAST", "Frida", "objection", "Certificate pinning bypass"],
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    items: ["GCP posture review", "Azure / Entra ID", "Service principal abuse", "Device-code phishing", "AWS IAM enumeration", "Prisma Cloud"],
  },
  {
    title: "Threat Intelligence",
    icon: Brain,
    items: ["MITRE ATT&CK", "ATT&CK for ICS", "APT profiling", "Kaspersky TIP", "VirusTotal Enterprise", "Mandiant Security Validation"],
  },
  {
    title: "SIEM / SOAR / IR",
    icon: Cpu,
    items: ["Microsoft Sentinel", "KQL", "Cortex XDR / XSOAR", "SentinelOne", "Defender XDR", "Darktrace", "XSOAR playbooks"],
  },
  {
    title: "Tool Development",
    icon: Code2,
    items: ["FastAPI", "Next.js", "TypeScript", "Docker", "PostgreSQL", "WebAssembly", "LLM orchestration"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-20 sm:py-24 border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// expertise</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Technical Skills</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Offensive security, cloud, tooling, and consulting skills pulled from the latest CV and weighted toward the Red Team Consultant role.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-lg border border-border bg-background/70 p-5 hover:border-primary/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="w-8 h-8 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center">
                  <group.icon className="w-3.5 h-3.5 text-primary" />
                </motion.div>
                <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.06 + j * 0.025 + 0.2 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-accent text-foreground/70 cursor-default"
                  >
                    {item}
                  </motion.span>
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
