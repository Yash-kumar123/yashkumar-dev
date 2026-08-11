import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      const target = e.target
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Outer Cyan Aura Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-cyan/40 bg-cyan/5 mix-blend-screen"
        animate={{
          x: pos.x - (isPointer ? 24 : 16),
          y: pos.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          boxShadow: isPointer
            ? '0 0 25px rgba(0, 240, 255, 0.6)'
            : '0 0 15px rgba(0, 240, 255, 0.25)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.3 }}
      />

      {/* Core Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00f0ff]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600 }}
      />
    </>
  )
}
