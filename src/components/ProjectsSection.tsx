import { motion, useInView } from "framer-motion";
import { ExternalLink, ShieldAlert, Wrench, Crosshair } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "MX Lens",
    tagline: "Email Security SaaS",
    description: "B2B platform reducing SOC workload by 85% through automated phishing detection. 11 detection modules, admin panel, Stripe billing.",
    tags: ["Next.js", "Prisma", "Stripe"],
    icon: ShieldAlert,
    accent: "primary",
  },
  {
    title: "CyberTools Hub",
    tagline: "SOC Operations Toolkit",
    description: "Privacy-first SaaS centralizing critical SOC and IR analysis tools into a single streamlined workflow.",
    tags: ["SaaS", "SOC Tools", "Privacy"],
    icon: Wrench,
    accent: "gh-green",
  },
  {
    title: "Threat Hunting Initiative",
    tagline: "Aspire Zone Foundation",
    description: "Custom hunting queries integrating Sentinel, Cortex XDR, and Kaspersky TI targeting MENA-based APT activity.",
    tags: ["Sentinel", "MITRE ATT&CK", "Cortex XDR"],
    icon: Crosshair,
    accent: "gh-orange",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// portfolio</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Key Projects</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-xl border border-border bg-card overflow-hidden cursor-default"
            >
              <div className="p-5 relative">
                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/0 group-hover:bg-primary/[0.04] rounded-bl-[60px] transition-all duration-500" />

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-10 h-10 rounded-xl bg-primary/[0.07] border border-primary/15 flex items-center justify-center"
                  >
                    <p.icon className="w-4.5 h-4.5 text-primary" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </div>

                <h3 className="text-sm font-display font-bold text-foreground mb-0.5">{p.title}</h3>
                <p className="text-[11px] font-mono text-primary/60 mb-3">{p.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
