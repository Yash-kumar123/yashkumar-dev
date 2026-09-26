import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [cursorState, setCursorState] = useState('default') // 'default' | 'link' | 'project' | 'cta' | 'drag' | '3d'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Disable on touch devices or coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      const target = e.target
      if (!target) return

      if (target.closest('[data-cursor="project"]')) {
        setCursorState('project')
      } else if (target.closest('[data-cursor="cta"]')) {
        setCursorState('cta')
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorState('drag')
      } else if (target.closest('canvas')) {
        setCursorState('3d')
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorState('link')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isMobile) return null

  const isProject = cursorState === 'project'
  const isCta = cursorState === 'cta'
  const isLink = cursorState === 'link'
  const is3D = cursorState === '3d'
  const isDrag = cursorState === 'drag'

  const hasLabel = isProject || isCta || is3D || isDrag
  const labelText = isProject ? 'OPEN' : isCta ? 'GO' : is3D ? 'ORBIT' : isDrag ? 'DRAG' : ''

  return (
    <>
      {/* Outer Technical Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center select-none"
        animate={{
          x: pos.x - (hasLabel ? 38 : isLink ? 22 : 14),
          y: pos.y - (hasLabel ? 38 : isLink ? 22 : 14),
          width: hasLabel ? 76 : isLink ? 44 : 28,
          height: hasLabel ? 76 : isLink ? 44 : 28,
          borderColor: isProject
            ? 'rgba(0, 240, 255, 0.85)'
            : isCta
            ? 'rgba(245, 243, 238, 0.85)'
            : is3D
            ? 'rgba(112, 0, 255, 0.7)'
            : isLink
            ? 'rgba(0, 240, 255, 0.5)'
            : 'rgba(255, 255, 255, 0.22)',
          backgroundColor: isProject
            ? 'rgba(0, 240, 255, 0.12)'
            : isCta
            ? 'rgba(245, 243, 238, 0.12)'
            : is3D
            ? 'rgba(112, 0, 255, 0.1)'
            : isLink
            ? 'rgba(255, 255, 255, 0.04)'
            : 'transparent',
          borderWidth: 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
      >
        {hasLabel && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-paper uppercase">
            {labelText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 rounded-full bg-paper select-none"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hasLabel ? 0 : isLink ? 1.6 : 1,
          backgroundColor: isLink ? '#00F0FF' : '#F5F3EE',
        }}
        transition={{ type: 'spring', damping: 45, stiffness: 650 }}
      />
    </>
  )
}
