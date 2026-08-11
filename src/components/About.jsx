import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { profile, skillCategories } from '../data/portfolioData'

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Jishnu Mondal scroll expand transforms
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1.2])

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative min-h-screen flex flex-col justify-center py-28 px-6 md:px-12 bg-void overflow-hidden border-t border-white/5"
    >
      {/* Scroll-Driven Dark Atmospheric Background Glow */}
      <motion.div
        style={{
          scale: glowScale,
          background: 'radial-gradient(ellipse, rgba(0,240,255,0.14) 0%, transparent 70%)',
          filter: 'blur(110px)',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <motion.div style={{ scale, opacity }} className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header Tag */}
        <div className="text-center mb-10">
          <span className="text-cyan text-xs font-semibold tracking-[0.35em] uppercase font-josefin">
            The Philosophy
          </span>
        </div>

        {/* Large Centered Josefin Sans Quote Statement & Portrait Card */}
        <div className="grid md:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Formal Portrait Photo Frame */}
          <div className="md:col-span-4 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative group w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden bg-[#0d0d0d] border border-cyan/40 p-2.5 shadow-[0_0_35px_rgba(0,240,255,0.25)] transition-all duration-500 hover:border-cyan hover:shadow-[0_0_50px_rgba(0,240,255,0.45)]"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#111111]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">YASH KUMAR</span>
                  <span className="text-[10px] font-mono text-cyan block">{profile.badge}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statement text */}
          <div className="md:col-span-8 space-y-6 text-left">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-[1.45] tracking-tight font-josefin">
              I believe great software is born at the intersection of engineering precision and design intuition. Every pixel, every API endpoint, every line of code is an opportunity to create something that actually ships and moves people.
            </p>

            <p className="text-[#B5B5B5] text-sm md:text-base leading-relaxed font-poppins">
              Final-year CS student engineering production-ready applications — from real-time collaborative AI code editors to speech feature extraction backends flagging early dementia.
            </p>
          </div>
        </div>

        {/* Sleek Glass Card Tech Stack Matrix */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase font-poppins flex items-center gap-2">
              <Terminal size={14} />
              Core Tech Stack &amp; Ecosystem
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 transition-all duration-300 hover:border-ember/40 group"
              >
                <div className="font-display font-bold text-sm tracking-wider text-white uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember group-hover:scale-125 transition-transform" />
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#B5B5B5] group-hover:text-white group-hover:border-ember/30 transition-all duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
