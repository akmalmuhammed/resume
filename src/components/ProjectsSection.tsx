import { motion, useInView } from "framer-motion";
import { Bot, Cloud, ExternalLink, ShieldAlert, Wrench } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Autonomous Agentic Pentest & Red Team Platform",
    tagline: "Consulting-scale attack surface assessment",
    description:
      "Production AI-powered external assessment platform running five isolated workflows for OSINT, enumeration, evidence capture, controlled validation, and dual-format reporting.",
    impact:
      "Compresses external assessment delivery from days to hours while keeping human approval gates for sensitive actions.",
    tags: ["Python", "FastAPI", "Docker", "GCP", "LLM Orchestration"],
    icon: Bot,
  },
  {
    title: "MXLens",
    tagline: "Phishing intelligence SaaS",
    description:
      "B2B email intelligence platform with 11 detection modules covering sender spoofing, reply-to mismatch, typosquatting, QR phishing, DMARC/SPF/DKIM, and intent scoring.",
    impact:
      "Turns a manual phishing triage flow into a 30-second browser-local verdict without uploading message content.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    href: "https://mxlens.com",
    icon: ShieldAlert,
  },
  {
    title: "Cloud Attack Path & Control Validation",
    tagline: "Azure, GCP, identity, and posture review",
    description:
      "Assessment track for cloud identity paths, service principals, conditional access, device-code flows, IAM exposure, and security-control coverage using cloud posture tools.",
    impact:
      "Positions cloud findings as exploitable paths, detection gaps, and remediation priorities instead of isolated configuration issues.",
    tags: ["GCP", "Azure / Entra ID", "Prisma Cloud", "Defender for Cloud"],
    icon: Cloud,
  },
  {
    title: "SecUtil / CyberTools Hub",
    tagline: "Browser-native security utilities",
    description:
      "Zero-footprint WebAssembly security utility surface for encoding, cryptography, hash checks, IOC helpers, and payload string inspection in restricted environments.",
    impact:
      "Supports red team and SOC workflows where uploading artifacts or installing tooling is not acceptable.",
    tags: ["WebAssembly", "JavaScript", "Client-side", "Privacy"],
    href: "https://cybertools.hub",
    icon: Wrench,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// portfolio</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Security Tooling & Project Evidence</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Projects framed around offensive consulting, cloud validation, phishing intelligence, and safe tooling for sensitive environments.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => {
            const Wrapper = p.href ? motion.a : motion.article;
            return (
              <Wrapper
                key={p.title}
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-lg border border-border bg-card overflow-hidden cursor-default hover:border-primary/20 transition-colors"
              >
                <div className="p-5 relative h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/0 group-hover:bg-primary/[0.04] rounded-bl-[60px] transition-all duration-500" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-10 h-10 rounded-lg bg-primary/[0.07] border border-primary/15 flex items-center justify-center"
                    >
                      <p.icon className="w-4.5 h-4.5 text-primary" />
                    </motion.div>
                    {p.href && (
                      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileHover={{ scale: 1.2 }} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    )}
                  </div>

                  <h3 className="text-sm font-display font-bold text-foreground mb-0.5">{p.title}</h3>
                  <p className="text-[11px] font-mono text-primary/70 mb-3">{p.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4 border-l border-primary/25 pl-3">{p.impact}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
