import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0) // 0: Color field -> 1: Yash Kumar -> 2: Reveal

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }

    // Fast, crisp 1-second total intro
    const t1 = setTimeout(() => setStage(1), 300)
    const t2 = setTimeout(() => {
      setStage(2)
      setTimeout(onComplete, 250)
    }, 850)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.01,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[120] bg-cream flex flex-col justify-between p-8 sm:p-14 select-none font-mono text-dark"
    >
      {/* Background Soft Luminous Field */}
      <div className="absolute inset-0 bg-gradient-to-tr from-aqua-light via-cream to-lavender-light opacity-80 pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-dark-muted tracking-widest border-b border-black/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-aqua animate-ping" />
          <span className="font-semibold text-dark">YK // CREATIVE SYSTEMS</span>
        </div>
        <div className="hidden sm:block text-dark-muted">
          INITIALIZING DIGITAL STUDIO · 2026
        </div>
      </div>

      {/* Center Reveal */}
      <div className="relative z-10 my-auto max-w-4xl space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-sky font-semibold tracking-[0.3em] uppercase"
        >
          {stage === 0 ? 'CALIBRATING LUMINOUS FIELD...' : 'DIGITAL CORE ENGAGED'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-dark leading-[0.92]"
        >
          YASH KUMAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 15 }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-dark-muted font-sans tracking-wide"
        >
          FULL STACK <span className="text-sky font-mono font-normal">/</span> APPLIED AI ENGINEER
        </motion.div>

        <div className="pt-6 max-w-xs">
          <div className="h-[2px] w-full bg-black/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-aqua to-sky"
              initial={{ width: '0%' }}
              animate={{ width: stage === 0 ? '40%' : '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-dark-muted tracking-wider border-t border-black/[0.06] pt-4">
        <span>SMART INDIA HACKATHON '25 FINALIST</span>
        <span className="text-dark font-medium">REVEALING EXPERIENCE</span>
      </div>
    </motion.div>
  )
}
