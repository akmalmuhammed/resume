import { motion, useInView } from "framer-motion";
import { ClipboardCheck, Crosshair, FileCheck2, Flag, Repeat2, ScanSearch } from "lucide-react";
import { useRef } from "react";

const deliverySteps = [
  {
    step: "01",
    title: "Scope",
    body: "Define objectives, rules of engagement, success criteria, safety controls, and reporting expectations.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Model",
    body: "Translate threat intelligence and business context into ATT&CK-mapped hypotheses and realistic attack paths.",
    icon: ScanSearch,
  },
  {
    step: "03",
    title: "Execute",
    body: "Run controlled assessments across external, cloud, identity, web, mobile, endpoint, and network surfaces.",
    icon: Crosshair,
  },
  {
    step: "04",
    title: "Validate",
    body: "Measure control coverage, collect evidence, distinguish risk from noise, and identify detection or process gaps.",
    icon: Flag,
  },
  {
    step: "05",
    title: "Report",
    body: "Deliver technical findings, executive summaries, business-impact narratives, and prioritized remediation actions.",
    icon: FileCheck2,
  },
  {
    step: "06",
    title: "Retest",
    body: "Close the loop with validation retests, detection improvements, and engagement-to-remediation tracking.",
    icon: Repeat2,
  },
];

const DeliverySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="delivery" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-10">
          <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">// delivery model</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">How I Run Consulting Engagements</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
            The site should show not only what I know, but how I deliver. This lifecycle makes the consulting operating model visible.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {deliverySteps.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[8px] border border-border bg-card p-5 hover:border-primary/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-[8px] bg-primary/[0.07] border border-primary/15 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary/60">{item.step}</span>
              </div>
              <h3 className="text-sm font-display font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
