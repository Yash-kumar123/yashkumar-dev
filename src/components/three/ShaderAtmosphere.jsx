import React, { useEffect, useRef } from 'react'

export default function ShaderAtmosphere() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = width * 0.7
    let mouseY = height * 0.3
    let targetX = mouseX
    let targetY = mouseY
    let scrollY = window.scrollY

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    let time = 0

    const render = () => {
      time += 0.005

      // Smooth lerp mouse coordinates
      mouseX += (targetX - mouseX) * 0.035
      mouseY += (targetY - mouseY) * 0.035

      ctx.clearRect(0, 0, width, height)

      // Calculate scroll progression for atmospheric color shifting
      const maxScroll = Math.max(document.body.scrollHeight - height, 1000)
      const scrollFactor = Math.min(1, Math.max(0, scrollY / maxScroll))

      // 1. Primary Cyan/Icy Atmospheric Field (reacts to cursor & time)
      const cyanX = mouseX + Math.sin(time * 0.8) * 50
      const cyanY = mouseY + Math.cos(time * 0.6) * 50
      const cyanRadius = Math.max(width * 0.5, 480)
      const gradCyan = ctx.createRadialGradient(cyanX, cyanY, 15, cyanX, cyanY, cyanRadius)
      
      const cyanAlpha = 0.045 + Math.sin(time) * 0.01
      gradCyan.addColorStop(0, `rgba(0, 240, 255, ${cyanAlpha})`)
      gradCyan.addColorStop(0.55, 'rgba(0, 240, 255, 0.012)')
      gradCyan.addColorStop(1, 'rgba(7, 7, 7, 0)')

      ctx.fillStyle = gradCyan
      ctx.fillRect(0, 0, width, height)

      // 2. Secondary Deep Ultraviolet / Indigo Atmosphere
      // Shifts position and intensity as user scrolls deeper into systems and projects
      const violetX = width * (0.2 + scrollFactor * 0.5) + Math.cos(time * 0.5) * 70
      const violetY = height * (0.6 - scrollFactor * 0.3) + Math.sin(time * 0.7) * 70
      const violetRadius = Math.max(width * 0.6, 520)
      const gradViolet = ctx.createRadialGradient(violetX, violetY, 0, violetX, violetY, violetRadius)
      
      const violetAlpha = 0.038 + scrollFactor * 0.025
      gradViolet.addColorStop(0, `rgba(112, 0, 255, ${violetAlpha})`)
      gradViolet.addColorStop(0.6, 'rgba(59, 130, 246, 0.01)')
      gradViolet.addColorStop(1, 'rgba(7, 7, 7, 0)')

      ctx.fillStyle = gradViolet
      ctx.fillRect(0, 0, width, height)

      // 3. Subtle Silver Architectural Horizon Light
      const horizonY = height * 0.95
      const gradHorizon = ctx.createLinearGradient(0, horizonY - 100, 0, horizonY + 100)
      gradHorizon.addColorStop(0, 'rgba(245, 243, 238, 0)')
      gradHorizon.addColorStop(0.5, 'rgba(245, 243, 238, 0.012)')
      gradHorizon.addColorStop(1, 'rgba(7, 7, 7, 0)')
      ctx.fillStyle = gradHorizon
      ctx.fillRect(0, horizonY - 100, width, 200)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  )
}
