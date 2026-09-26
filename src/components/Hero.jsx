import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Terminal, Layers, Sparkles } from 'lucide-react'
import { profile, stats } from '../data/portfolioData'
import DigitalSystemCore from './three/DigitalSystemCore'
import { scrollToTarget } from '../utils/smoothScroll'

export default function Hero() {
  const handleScrollToProjects = () => {
    scrollToTarget('#projects', -60)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden arch-grid"
    >
      {/* Top Editorial Anchor & Micro Data */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 z-10 font-mono text-[11px]">
        <div className="flex items-center gap-3 text-muted tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
          </span>
          <span className="text-paper font-medium">AVAILABLE FOR OPPORTUNITIES</span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-muted hidden sm:inline">FULL-TIME &amp; CONTRACT</span>
        </div>

        <div className="flex items-center gap-4 text-muted tracking-widest uppercase">
          <span>ABESIT · CSE</span>
          <span className="text-white/20">•</span>
          <span className="text-cyan font-semibold">SIH 2025 NATIONAL FINALIST</span>
        </div>
      </div>

      {/* Main Grid: Editorial Typography (Left) + Digital System Core (Right) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center z-10">
        {/* Left Column: Architectural Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Editorial Header Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-cyan mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              <span>YASH KUMAR // APPLIED AI &amp; SYSTEMS ARCHITECT</span>
            </div>

            {/* Oversized Architectural Typography */}
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-paper uppercase leading-[0.92]">
              BUILDING<br />
              DIGITAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper via-white to-cyan">
                SYSTEMS.
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-cyan/60 inline-block" />
              <h2 className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan uppercase font-semibold">
                FULL STACK / APPLIED AI ENGINEER
              </h2>
            </div>

            <p className="mt-5 text-base sm:text-lg text-muted max-w-xl font-sans leading-relaxed tracking-tight">
              Engineering high-concurrency applications, real-time collaboration engines, and multi-agent AI workflows that scale to production.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={handleScrollToProjects}
              data-cursor="cta"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider bg-paper text-void hover:bg-cyan transition-all duration-300 shadow-[0_0_30px_rgba(245,243,238,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)]"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-mono text-xs font-medium tracking-wider text-paper bg-white/[0.04] border border-white/[0.12] hover:border-cyan/50 hover:text-cyan transition-all duration-300"
            >
              <Download size={14} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>

          {/* Technical Metadata Matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-6 grid grid-cols-3 gap-6 border-t border-white/[0.06] max-w-lg text-left font-mono"
          >
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-paper">SIH '25</div>
              <div className="text-[10px] text-muted uppercase tracking-wider mt-1">National Finalist</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-paper">5+</div>
              <div className="text-[10px] text-muted uppercase tracking-wider mt-1">Production Systems</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-cyan">&lt; 45ms</div>
              <div className="text-[10px] text-muted uppercase tracking-wider mt-1">CRDT Sync Latency</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Digital System Core with Ambient Floating Labels */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <DigitalSystemCore />

          {/* Floating HUD Micro Labels */}
          <div className="absolute top-2 right-2 sm:right-6 pointer-events-none font-mono text-[10px] text-muted tracking-wider p-3 rounded-2xl liquid-glass border-white/[0.08] z-20">
            <div className="text-paper font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              DIGITAL CORE // RUNNING
            </div>
            <div className="text-[9px] text-muted mt-0.5">AVAILABILITY: 99.98%</div>
          </div>

          <div className="absolute bottom-4 left-2 sm:left-4 pointer-events-none font-mono text-[10px] text-muted tracking-wider p-3 rounded-2xl liquid-glass border-white/[0.08] z-20">
            <div className="text-paper font-semibold">STACK ORCHESTRATION</div>
            <div className="text-[9px] text-cyan mt-0.5">REACT 19 · YJS · FASTAPI</div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-muted tracking-widest uppercase border-t border-white/[0.06] pt-4 z-10">
        <div className="flex items-center gap-2">
          <Layers size={13} className="text-cyan" />
          <span>TECHNOLOGY LABORATORY // 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <span>SCROLL DOWN</span>
          <span className="w-6 h-[1px] bg-muted inline-block" />
        </div>
      </div>
    </section>
  )
}
