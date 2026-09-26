import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0) // 0: init coordinates -> 1: Yash Kumar -> 2: Full Stack/AI -> 3: Reveal

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }

    // Sequence stages (total ~1.3 seconds)
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 700)
    const t3 = setTimeout(() => {
      setPhase(3)
      setTimeout(onComplete, 300)
    }, 1150)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        filter: 'blur(10px)',
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[120] bg-void flex flex-col justify-between p-8 sm:p-14 select-none font-mono text-paper"
    >
      {/* Top Coordinate HUD */}
      <div className="flex items-center justify-between text-[11px] text-muted tracking-widest border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="text-secondary font-medium">SYS_INIT // 28.6692° N, 77.4538° E</span>
        </div>
        <div className="hidden sm:block text-muted">
          INITIALIZING DIGITAL CORE · 2026
        </div>
      </div>

      {/* Center Cinematic Stage Reveal */}
      <div className="my-auto max-w-4xl space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-cyan tracking-[0.35em] uppercase font-semibold"
        >
          {phase === 0 ? 'INITIALIZING EXPERIENCE...' : 'DIGITAL CORE ONLINE'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-paper leading-[0.9]"
        >
          YASH KUMAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-muted font-sans tracking-wide"
        >
          FULL STACK <span className="text-cyan font-mono font-normal">/</span> APPLIED AI ENGINEER
        </motion.div>

        {/* Minimal Progress Indicator */}
        <div className="pt-6 max-w-xs">
          <div className="h-[1.5px] w-full bg-white/[0.08] overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-cyan"
              initial={{ width: '0%' }}
              animate={{ width: phase === 0 ? '25%' : phase === 1 ? '60%' : '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry */}
      <div className="flex items-center justify-between text-[11px] text-muted tracking-wider border-t border-white/[0.06] pt-4">
        <span>SMART INDIA HACKATHON '25 FINALIST</span>
        <span className="text-cyan font-semibold">STANDBY FOR ENVIRONMENT REVEAL</span>
      </div>
    </motion.div>
  )
}
