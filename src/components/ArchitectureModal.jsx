import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu, Server, Database, Layers, ArrowRight, ShieldCheck, Activity, Terminal, ExternalLink, Github } from 'lucide-react'

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null

  const arch = project.architecture || {
    flow: ['Client Input', 'API Gateway', 'Processing Core', 'Database'],
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-void/90 backdrop-blur-2xl font-sans overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl my-auto glass-panel bg-void/95 border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-white/[0.08] pb-6 mb-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-widest">
                <Activity size={13} className="animate-pulse" />
                <span>ENGINEERING CASE STUDY // SYSTEM ARCHITECTURE</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {project.name}
              </h2>
              <p className="text-secondary text-sm font-sans">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-secondary hover:text-primary hover:border-cyan/40 hover:bg-cyan/[0.05] transition-all"
              aria-label="Close Architecture Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Data Pipeline & Execution Stream (Animated Pipeline) */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#09090D] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                End-To-End Execution Stream
              </span>
              <span className="font-mono text-[10px] text-cyan">LATENCY OPTIMIZED</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              {arch.flow.map((node, idx) => (
                <div key={node} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-primary flex items-center gap-2 hover:border-cyan/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    <span>{node}</span>
                  </div>
                  {idx < arch.flow.length - 1 && (
                    <ArrowRight size={13} className="text-cyan shrink-0 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Grid: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-sans">
            {/* Engineering Challenge */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="font-mono text-xs font-semibold text-red-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                {project.challenge || project.description}
              </p>
            </div>

            {/* Architectural Solution */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-cyan/20 space-y-3">
              <div className="font-mono text-xs font-semibold text-cyan uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span>System Architecture Solution</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                {project.solution || project.bullets?.[0]}
              </p>
            </div>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
              Production Verified Metrics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              {(project.metrics || ['Production Ready', 'Zero Downtime', 'Sub-second Latency']).map((m) => (
                <div key={m} className="flex items-center gap-2 text-primary">
                  <ShieldCheck size={14} className="text-cyan shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips & Action Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-secondary"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider bg-cyan text-void hover:bg-cyan-bright transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-medium text-primary bg-white/[0.04] border border-white/[0.1] hover:border-cyan/40 hover:text-cyan transition-all"
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
