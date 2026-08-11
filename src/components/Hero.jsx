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
      className="relative h-screen w-full overflow-hidden bg-void flex flex-col justify-between"
    >
      {/* Background Radial Glow Spotlight */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] pointer-events-none z-[6]"
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
              background: i % 2 === 0 ? 'rgba(0,240,255,0.7)' : 'rgba(255,255,255,0.3)',
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
        className="absolute top-24 md:top-28 left-6 md:left-14 lg:left-20 z-[40] flex flex-wrap items-center gap-3"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/40 bg-cyan/10 text-cyan text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.25)]">
          <span className="w-[7px] h-[7px] rounded-full bg-cyan animate-pulse shadow-[0_0_12px_#00f0ff]" />
          <span>SIH 2025 NATIONAL FINALIST</span>
        </div>
        <span className="text-[11px] text-ash tracking-[0.2em] uppercase font-medium font-display hidden sm:inline">
          · Shipping Ideas Into Reality.
        </span>
      </motion.div>

      {/* Giant Center Title & Subtext */}
      <div className="absolute top-[38%] sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15] pointer-events-none select-none w-full flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl xl:text-[11rem] tracking-tighter text-white uppercase text-center leading-none drop-shadow-[0_0_45px_rgba(0,240,255,0.35)]"
        >
          YASH KUMAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6 text-center"
        >
          <p className="text-[clamp(0.75rem,1.1vw,0.95rem)] font-extrabold tracking-[0.25em] uppercase text-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.7)] font-poppins">
            Crafting Interfaces That People Remember.
          </p>
        </motion.div>
      </div>

      {/* Bottom Left Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-[72%] sm:top-[74%] left-6 md:left-14 lg:left-20 z-[40] max-w-[380px] lg:max-w-[440px]"
      >
        <p className="text-[13px] md:text-[14px] text-silver leading-[1.8] font-normal tracking-wide font-poppins">
          Full-Stack Developer &amp; Applied AI Builder engineering fast, immersive, and motion-driven digital products.
        </p>
      </motion.div>

      {/* Bottom Right Floating CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-[10%] sm:bottom-[12%] right-6 md:right-14 lg:right-20 z-[40] flex flex-col items-end gap-3.5"
      >
        <button
          onClick={() => onNavigate('projects')}
          className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-[13px] tracking-wide bg-cyan text-black font-semibold hover:bg-cyan-glow transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)]"
        >
          <span className="w-7 h-7 rounded-full border border-black/30 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={13} />
          </span>
          <span>Explore Work →</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[12px] tracking-wide bg-transparent text-white border border-white/15 hover:border-ember/50 hover:text-ember transition-colors duration-300"
        >
          <span>Let's Talk →</span>
        </button>
      </motion.div>

      {/* Bottom Scroll Line Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[45] flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => onNavigate('philosophy')}
      >
        <span className="text-[9px] text-[#B5B5B5]/60 tracking-[0.35em] uppercase font-display">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <div className="absolute w-full h-3 bg-ember/80 animate-[reveal-up_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  )
}
