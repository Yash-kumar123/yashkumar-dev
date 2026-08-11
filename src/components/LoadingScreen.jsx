import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1800 // 1.8 seconds loading experience
    const intervalTime = 20
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-between py-16 px-8 select-none font-poppins"
    >
      {/* Top Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs sm:text-sm text-ash font-display tracking-[0.35em] uppercase font-semibold text-center"
      >
        YASH KUMAR
      </motion.div>

      {/* Center 0-100 Count Up Display */}
      <div className="flex flex-col items-center my-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display font-black text-7xl sm:text-9xl text-white tracking-tighter tabular-nums drop-shadow-[0_0_35px_rgba(0,240,255,0.5)]"
        >
          {Math.floor(count)}
          <span className="text-cyan text-4xl sm:text-6xl font-light ml-1">%</span>
        </motion.span>
        <span className="text-[11px] font-mono text-cyan uppercase tracking-[0.3em] mt-3">
          INITIALIZING DIGITAL EXPERIENCE
        </span>
      </div>

      {/* Bottom Loading Progress Bar Track & Fill */}
      <div className="w-full max-w-md space-y-2">
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-cyan shadow-[0_0_15px_#00f0ff]"
            style={{ width: `${count}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-ash tracking-wider">
          <span>PORTFOLIO</span>
          <span>SHIPPING PRODUCTS</span>
        </div>
      </div>
    </motion.div>
  )
}
