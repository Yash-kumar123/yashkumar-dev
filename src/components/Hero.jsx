import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'
import DigitalSystemCore from './three/DigitalSystemCore'
import { scrollToTarget } from '../utils/smoothScroll'

export default function Hero() {
  const handleScrollToProjects = () => {
    scrollToTarget('#projects', -60)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Top Subtle Availability Anchor */}
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

      {/* Main Grid: Editorial Typography (Left) + Futuristic Liquid Sculpture (Right) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center z-10">
        {/* Left Column: Bold Personal Identity & Value Proposition */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-soft-sm text-[11px] font-mono font-semibold text-dark mb-6">
              <span className="w-2 h-2 rounded-full bg-aqua" />
              <span>FULL STACK + APPLIED AI ENGINEER</span>
            </div>

            {/* Enormous Personal Typography */}
            <h1 className="font-display text-6xl sm:text-8xl xl:text-9xl font-black tracking-tightest text-dark uppercase leading-[0.88]">
              YASH<br />
              <span className="text-iridescent">KUMAR</span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-aqua inline-block rounded-full" />
              <h2 className="font-display text-sm sm:text-base tracking-[0.2em] text-dark uppercase font-bold">
                BUILDING DIGITAL SYSTEMS, PRODUCTS AND AI EXPERIENCES.
              </h2>
            </div>

            <p className="mt-4 text-base sm:text-lg text-dark-muted max-w-lg font-sans leading-relaxed tracking-tight">
              Engineering high-concurrency systems, real-time collaboration engines, and multi-agent AI workflows that ship to production.
            </p>
          </motion.div>

          {/* Tactile Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-mono text-xs font-medium tracking-wider text-dark bg-white/90 border border-black/[0.08] hover:border-black/[0.25] hover:bg-white transition-all duration-300 shadow-soft-sm"
            >
              <Download size={14} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Pure 3D Sculptural Presence (NO HUD labels) */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pointer-events-auto">
          <DigitalSystemCore />
        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-dark-muted tracking-widest uppercase border-t border-black/[0.06] pt-4 z-10">
        <div className="flex items-center gap-2">
          <span>ABESIT · AKTU · B.TECH CSE '27</span>
        </div>
        <div className="flex items-center gap-2">
          <span>SCROLL DOWN</span>
          <span className="w-6 h-[1.5px] bg-dark inline-block" />
        </div>
      </div>
    </section>
  )
}
