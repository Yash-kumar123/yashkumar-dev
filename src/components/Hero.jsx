import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolioData'

const DUST_PARTICLES = [
  { top: '12%', left: '8%', size: '2.1px', color: 'rgba(252,107,47,0.6)', delay: '0s' },
  { top: '25%', left: '82%', size: '1.5px', color: 'rgba(255,255,255,0.25)', delay: '0.6s' },
  { top: '40%', left: '15%', size: '2.8px', color: 'rgba(255,255,255,0.25)', delay: '1.2s' },
  { top: '58%', left: '91%', size: '1.2px', color: 'rgba(252,107,47,0.6)', delay: '1.8s' },
  { top: '72%', left: '24%', size: '2.4px', color: 'rgba(255,255,255,0.25)', delay: '2.4s' },
  { top: '18%', left: '64%', size: '1.8px', color: 'rgba(255,255,255,0.25)', delay: '3.0s' },
  { top: '84%', left: '45%', size: '2.6px', color: 'rgba(252,107,47,0.6)', delay: '3.6s' },
  { top: '33%', left: '37%', size: '1.4px', color: 'rgba(255,255,255,0.25)', delay: '4.2s' },
]

export default function Hero({ onNavigate }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-void flex flex-col justify-between py-24 px-6 md:px-14 lg:px-20 overflow-hidden font-poppins"
    >
      {/* Background Radial Glow Spotlight */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] md:w-[850px] md:h-[850px] pointer-events-none z-[6]"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.18) 0%, rgba(0,240,255,0.03) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      {/* Floating Ambient Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-[8]" aria-hidden="true">
        {DUST_PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: p.size,
              height: p.size,
              background: i % 2 === 0 ? 'rgba(0,240,255,0.75)' : 'rgba(255,255,255,0.3)',
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Top Left Tagline & SIH Finalist Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-[40] flex flex-wrap items-center gap-3 pt-4 sm:pt-0"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/40 bg-cyan/10 text-cyan text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.25)]">
          <span className="w-[7px] h-[7px] rounded-full bg-cyan animate-pulse shadow-[0_0_12px_#00f0ff]" />
          <span>SIH 2025 NATIONAL FINALIST</span>
        </div>
        <span className="text-[11px] text-ash tracking-[0.2em] uppercase font-medium font-display">
          · Shipping Ideas Into Reality.
        </span>
      </motion.div>

      {/* Giant Center Title & Subtext */}
      <div className="my-auto py-12 z-[15] select-none w-full flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-4xl xs:text-5xl sm:text-7xl md:text-9xl xl:text-[11rem] tracking-tighter text-white uppercase text-center leading-[0.95] sm:leading-none drop-shadow-[0_0_45px_rgba(0,240,255,0.35)]"
        >
          YASH KUMAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6 text-center"
        >
          <p className="text-[11px] sm:text-[14px] md:text-base font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.7)] font-poppins">
            Crafting Interfaces That People Remember.
          </p>
        </motion.div>
      </div>

      {/* Bottom Row: Left Subtext & Right CTAs */}
      <div className="z-[40] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-4 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-[340px] sm:max-w-[380px] lg:max-w-[440px]"
        >
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-silver leading-[1.7] font-normal tracking-wide font-poppins">
            Full-Stack Developer &amp; Applied AI Builder engineering fast, immersive, and motion-driven digital products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-medium text-[13px] tracking-wide bg-cyan text-black font-semibold hover:bg-cyan-bright transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)]"
          >
            <span className="w-6 h-6 rounded-full border border-black/30 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={13} />
            </span>
            <span>Explore Work →</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-[12px] tracking-wide bg-transparent text-white border border-white/15 hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
          >
            <span>Let's Talk</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll-down Line Visualizer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-[40] flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-ash uppercase tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
