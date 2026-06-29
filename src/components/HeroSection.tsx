import { motion } from "framer-motion";
import {
  ArrowDown,
  Cloud,
  Crosshair,
  Download,
  Fingerprint,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { resumePdfDownloadName, resumePdfHref } from "@/lib/resume";

const focusAreas = [
  { icon: Crosshair, label: "Red team operations" },
  { icon: ShieldCheck, label: "Threat-led validation" },
  { icon: Cloud, label: "Cloud and identity paths" },
  { icon: Fingerprint, label: "Executive-ready reporting" },
];

const stats = [
  { value: "5", label: "Years security, analytics, consulting" },
  { value: "200+", label: "ATT&CK-mapped validation runs" },
  { value: "5", label: "Anonymized proof case studies" },
  { value: "3", label: "Production security tools" },
];

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[82vh] flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/0.18),transparent_30%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.86)_42%,hsl(var(--background)/0.72)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/[0.09] border border-primary/20 text-primary text-xs font-mono mb-5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-green opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gh-green" />
              </span>
              <span className="break-words">proof hub: Google Cloud / Mandiant Red Team Consultant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-display font-bold leading-[1.12] mb-4 max-w-4xl break-words"
            >
              Red Team & Cloud Security Consultant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-foreground/76 leading-7 mb-6 max-w-3xl break-words"
            >
              I validate real attack paths across cloud, identity, enterprise, web, mobile, and
              critical infrastructure environments - then turn the evidence into executive reporting,
              remediation priorities, and retestable detection improvements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2.5 mb-6"
            >
              {focusAreas.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/55 px-3 py-2 text-xs font-mono text-foreground/76"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-6"
            >
              {[
                { icon: MapPin, text: "Doha, Qatar" },
                { icon: Mail, text: "akmalmuhammed93@gmail.com", href: "mailto:akmalmuhammed93@gmail.com" },
                { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/akmal-muhammed-m-k/" },
              ].map(({ icon: Icon, text, href }) => {
                const Wrapper = href ? "a" : "span";
                return (
                  <Wrapper
                    key={text}
                    {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                    className="inline-flex max-w-full items-center gap-1.5 break-all font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" /> {text}
                  </Wrapper>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg bg-primary text-primary-foreground"
              >
                view_case_studies <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="#evidence"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-border bg-background/55 text-foreground hover:bg-accent transition-colors"
              >
                role_evidence
              </motion.a>
              <motion.a
                href={resumePdfHref}
                download={resumePdfDownloadName}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg border border-primary/20 bg-primary/[0.08] text-primary hover:bg-primary/[0.13] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> download_cv.pdf
              </motion.a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-border bg-background/72 p-5 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
              <div className="w-12 h-12 rounded-lg border border-primary/20 bg-primary/[0.08] flex items-center justify-center font-display text-lg font-bold text-primary">
                AM
              </div>
              <div className="min-w-0">
                <p className="text-sm font-display font-bold text-foreground">Akmal Muhammed</p>
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">Red Team & Adversary Emulation</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/70 bg-card/70 p-3">
                  <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-[11px] font-mono text-muted-foreground leading-relaxed mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
