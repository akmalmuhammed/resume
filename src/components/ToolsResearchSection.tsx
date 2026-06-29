import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BookOpen, Bot, FileText, ShieldAlert, Wrench } from "lucide-react";
import { useRef } from "react";

const tools = [
  {
    name: "Autonomous Agentic Pentest Platform",
    description: "Five-workflow external assessment system for reconnaissance, enumeration, evidence capture, controlled validation, and report generation.",
    stack: ["Python", "FastAPI", "Docker", "GCP"],
    icon: Bot,
  },
  {
    name: "MXLens",
    description: "Browser-local phishing intelligence platform for SOC triage and red-team scenario design.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    href: "https://mxlens.com",
    icon: ShieldAlert,
  },
  {
    name: "SecUtil / CyberTools Hub",
    description: "Zero-footprint client-side utility surface for sensitive environments where uploads and installs are not acceptable.",
    stack: ["WebAssembly", "JavaScript", "Client-side"],
    href: "https://cybertools.hub",
    icon: Wrench,
  },
];

const notes = [
  {
    title: "Structuring adversary emulation for GCC-region threat models",
    status: "field note",
    body: "How to turn threat intelligence into safe, scoped, ATT&CK-mapped validation plans.",
  },
  {
    title: "Cloud identity attack paths I check first",
    status: "field note",
    body: "A practical checklist for IAM, service principals, conditional access, and monitoring coverage.",
  },
  {
    title: "From validation gaps to detection engineering",
    status: "field note",
    body: "How control validation findings become KQL rules, SOAR actions, retests, and executive narratives.",
  },
];

const ToolsResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="tools" className="py-20 sm:py-24 border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// tools & research</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Security Tools And Tradecraft Notes</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            Senior portfolios usually make proof durable through tools and writing. This section separates built systems from the research themes that can become public posts.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="space-y-3">
            {tools.map((tool, i) => {
              const Wrapper = tool.href ? motion.a : motion.article;
              return (
                <Wrapper
                  key={tool.name}
                  {...(tool.href ? { href: tool.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group block rounded-[8px] border border-border bg-background/70 p-5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center shrink-0">
                      <tool.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-display font-bold text-foreground">{tool.name}</h3>
                        {tool.href && <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-70 group-hover:text-primary" />}
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed mt-2">{tool.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {tool.stack.map((item) => (
                          <span key={item} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary text-secondary-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[8px] border border-border bg-background/70 p-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-foreground">Research Queue</h3>
                <p className="text-xs font-mono text-muted-foreground">Public-safe tradecraft topics</p>
              </div>
            </div>

            <div className="space-y-3">
              {notes.map((note) => (
                <article key={note.title} className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary/70">{note.status}</span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-foreground leading-snug">{note.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{note.body}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ToolsResearchSection;
