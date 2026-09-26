import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles, Layers, Terminal } from 'lucide-react'
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
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden bright-dots"
    >
      {/* Top Editorial Anchor & Micro Data */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] pb-4 z-10 font-mono text-[11px]">
        <div className="flex items-center gap-3 text-dark-muted tracking-wider">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint" />
          </span>
          <span className="text-dark font-medium">AVAILABLE FOR OPPORTUNITIES</span>
          <span className="text-black/15 hidden sm:inline">|</span>
          <span className="text-dark-muted hidden sm:inline">FULL-TIME &amp; CONTRACT</span>
        </div>

        <div className="flex items-center gap-4 text-dark-muted tracking-widest uppercase">
          <span>ABESIT · CSE</span>
          <span className="text-black/15">•</span>
          <span className="text-sky font-semibold">SIH 2025 NATIONAL FINALIST</span>
        </div>
      </div>

      {/* Main Grid: Editorial Typography (Left) + Iridescent Digital Core (Right) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        {/* Left Column: Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.08] shadow-soft-sm text-[11px] font-mono font-semibold text-dark mb-6">
              <span className="w-2 h-2 rounded-full bg-aqua" />
              <span>FULL STACK / APPLIED AI ENGINEER</span>
            </div>

            {/* Enormous Typography */}
            <h1 className="font-display text-6xl sm:text-8xl xl:text-9xl font-black tracking-tightest text-dark uppercase leading-[0.9]">
              YASH<br />
              <span className="text-iridescent">KUMAR</span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-aqua inline-block rounded-full" />
              <h2 className="font-display text-sm sm:text-base tracking-[0.2em] text-dark uppercase font-bold">
                I BUILD DIGITAL SYSTEMS, PRODUCTS AND AI EXPERIENCES.
              </h2>
            </div>

            <p className="mt-4 text-base sm:text-lg text-dark-muted max-w-xl font-sans leading-relaxed tracking-tight">
              Bridging high-concurrency systems architecture with refined product design — from real-time multiplayer code editors to high-throughput speech acoustic analysis backends.
            </p>
          </motion.div>

          {/* Tactile Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={handleScrollToProjects}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider bg-dark text-white hover:bg-sky transition-all duration-300 shadow-soft-md hover:shadow-soft-lg"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-mono text-xs font-medium tracking-wider text-dark bg-white/80 border border-black/[0.08] hover:border-black/[0.2] hover:bg-white transition-all duration-300 shadow-soft-sm"
            >
              <Download size={14} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>

          {/* Technical Metadata Matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pt-6 grid grid-cols-3 gap-6 border-t border-black/[0.06] max-w-lg text-left font-mono"
          >
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-dark">SIH '25</div>
              <div className="text-[10px] text-dark-muted uppercase tracking-wider mt-1">National Finalist</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-dark">5+</div>
              <div className="text-[10px] text-dark-muted uppercase tracking-wider mt-1">Major Systems</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-sky">&lt; 45ms</div>
              <div className="text-[10px] text-dark-muted uppercase tracking-wider mt-1">CRDT Sync Latency</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Iridescent Digital Core */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <DigitalSystemCore />

          {/* Floating Studio Micro Labels */}
          <div className="absolute top-2 right-2 sm:right-6 pointer-events-none font-mono text-[10px] text-dark-muted tracking-wider p-3.5 rounded-2xl glass-bright z-20">
            <div className="text-dark font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
              DIGITAL CORE // STUDIO 3D
            </div>
            <div className="text-[9px] text-dark-muted mt-0.5">IRIDESCENT REFRACTIVE MATERIAL</div>
          </div>

          <div className="absolute bottom-4 left-2 sm:left-4 pointer-events-none font-mono text-[10px] text-dark-muted tracking-wider p-3.5 rounded-2xl glass-bright z-20">
            <div className="text-dark font-semibold">CORE PROTOCOL</div>
            <div className="text-[9px] text-sky font-semibold mt-0.5">REACT 19 · YJS · FASTAPI</div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-dark-muted tracking-widest uppercase border-t border-black/[0.06] pt-4 z-10">
        <div className="flex items-center gap-2">
          <Layers size={13} className="text-sky" />
          <span>CREATIVE TECHNOLOGY &amp; APPLIED AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span>SCROLL TO DISCOVER</span>
          <span className="w-6 h-[1.5px] bg-dark inline-block" />
        </div>
      </div>
    </section>
  )
}
