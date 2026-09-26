import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ShieldCheck, Activity, ExternalLink, Github } from 'lucide-react'

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null

  const arch = project.architecture || {
    flow: ['Client Input', 'API Gateway', 'Processing Core', 'Database'],
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xl font-sans overflow-y-auto">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl my-auto bg-white dark:bg-darktheme-surface border border-black/[0.08] dark:border-white/10 rounded-4xl p-6 sm:p-10 shadow-2xl overflow-hidden transition-colors duration-700"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-black/[0.06] dark:border-white/10 pb-6 mb-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-light-sky dark:text-darktheme-sky font-mono text-xs uppercase tracking-widest font-semibold">
                <Activity size={14} className="animate-pulse" />
                <span>INTERACTIVE CASE STUDY // SYSTEM ARCHITECTURE</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-light-text dark:text-darktheme-text tracking-tight">
                {project.name}
              </h2>
              <p className="text-light-muted dark:text-darktheme-muted text-sm font-sans">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-muted dark:text-darktheme-muted hover:text-light-text dark:hover:text-darktheme-text transition-all"
              aria-label="Close Architecture Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* End-to-End Pipeline Execution Stream */}
          <div className="mb-8 p-6 rounded-3xl bg-black/[0.02] dark:bg-black/20 border border-black/[0.06] dark:border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-light-muted dark:text-darktheme-muted tracking-widest uppercase font-semibold">
                End-To-End Execution Stream
              </span>
              <span className="font-mono text-[10px] text-light-sky dark:text-darktheme-sky font-bold">LATENCY &amp; STATE VERIFIED</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              {arch.flow.map((node, idx) => (
                <div key={node} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-darktheme-elevated border border-black/[0.08] dark:border-white/10 text-light-text dark:text-darktheme-text font-medium flex items-center gap-2 shadow-soft-sm hover:border-light-sky dark:hover:border-darktheme-sky transition-colors">
                    <span className="w-2 h-2 rounded-full bg-light-sky dark:bg-darktheme-sky" />
                    <span>{node}</span>
                  </div>
                  {idx < arch.flow.length - 1 && (
                    <ArrowRight size={14} className="text-light-sky dark:text-darktheme-sky shrink-0 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Grid: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-sans">
            {/* Engineering Challenge */}
            <div className="p-6 sm:p-8 rounded-3xl bg-light-peach/20 dark:bg-darktheme-peach/10 border border-light-peach/30 dark:border-darktheme-peach/20 space-y-3">
              <div className="font-mono text-xs font-bold text-light-peach dark:text-darktheme-peach uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-peach dark:bg-darktheme-peach" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm text-light-subtext dark:text-darktheme-subtext leading-relaxed">
                {project.challenge || project.description}
              </p>
            </div>

            {/* Architectural Solution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-light-sky/15 dark:bg-darktheme-sky/10 border border-light-sky/30 dark:border-darktheme-sky/20 space-y-3">
              <div className="font-mono text-xs font-bold text-light-sky dark:text-darktheme-sky uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-sky dark:bg-darktheme-sky" />
                <span>System Architecture Solution</span>
              </div>
              <p className="text-sm text-light-subtext dark:text-darktheme-subtext leading-relaxed">
                {project.solution || project.bullets?.[0]}
              </p>
            </div>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="mb-8 p-6 rounded-3xl bg-black/[0.02] dark:bg-black/20 border border-black/[0.06] dark:border-white/10">
            <div className="font-mono text-xs text-light-muted dark:text-darktheme-muted tracking-widest uppercase mb-3 font-semibold">
              Production Verified Metrics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              {(project.metrics || ['Production Ready', 'Zero Downtime', 'Sub-second Latency']).map((m) => (
                <div key={m} className="flex items-center gap-2 text-light-text dark:text-darktheme-text font-medium">
                  <ShieldCheck size={16} className="text-light-sky dark:text-darktheme-sky shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips & Action Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/[0.06] dark:border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-darktheme-elevated border border-black/[0.08] dark:border-white/10 font-mono text-xs text-light-text dark:text-darktheme-text shadow-soft-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider bg-dark text-white hover:bg-light-sky dark:bg-darktheme-aqua dark:text-black dark:hover:bg-darktheme-sky transition-all shadow-soft-sm"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-medium text-light-text dark:text-darktheme-text bg-white dark:bg-darktheme-elevated border border-black/[0.1] dark:border-white/10 hover:border-black/[0.25] dark:hover:border-white/30 transition-all shadow-soft-sm"
                >
                  <Github size={13} />
                  <span>SOURCE REPO</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
