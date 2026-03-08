import { motion, useInView } from "framer-motion";
import { Cpu, Eye, Brain, Code2, Cloud, PieChart } from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  { title: "Security Operations", icon: Eye, items: ["Detection Engineering", "Alert Triage", "Threat Hunting", "Incident Response", "SIEM/Log Analysis"] },
  { title: "SOC Platforms", icon: Cpu, items: ["Microsoft Sentinel", "Defender XDR", "Cortex XDR/XSOAR", "SentinelOne", "Darktrace", "Trend Micro XDR"] },
  { title: "Threat Intelligence", icon: Brain, items: ["MITRE ATT&CK", "APT Analysis", "IOC Management", "Kaspersky TI", "VirusTotal Enterprise"] },
  { title: "Automation", icon: Code2, items: ["Python", "KQL", "XSOAR Playbooks", "SOAR Orchestration"] },
  { title: "Cloud & Infra", icon: Cloud, items: ["Prisma Cloud", "Azure Security", "Microsoft Entra ID", "Forescout"] },
  { title: "Reporting & Tools", icon: PieChart, items: ["Tenable", "Power BI", "Looker Studio", "Executive Reporting"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// expertise</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Technical Skills</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center"
                >
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
                    transition={{ delay: i * 0.08 + j * 0.03 + 0.2 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-accent text-foreground/70 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
