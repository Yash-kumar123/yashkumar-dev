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

    let mouseX = width * 0.5
    let mouseY = height * 0.4
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

    // Palette states defined by RGB tuples
    // State 1 (Hero): Cyan, Sky, Mint, Lavender
    const S1 = {
      blob1: [53, 214, 208],   // Aqua/Cyan
      blob2: [91, 168, 255],   // Sky
      blob3: [120, 229, 177],  // Mint
      blob4: [169, 148, 255],  // Lavender
    }

    // State 2 (About): Peach, Coral, Cream, Lavender
    const S2 = {
      blob1: [255, 182, 138],  // Peach
      blob2: [255, 127, 112],  // Coral
      blob3: [244, 230, 200],  // Cream
      blob4: [169, 148, 255],  // Lavender
    }

    // State 3 (Projects): Cyan, Electric Blue, Mint
    const S3 = {
      blob1: [53, 214, 208],   // Cyan
      blob2: [70, 140, 255],   // Blue
      blob3: [120, 229, 177],  // Mint
      blob4: [140, 180, 255],  // Ice Sky
    }

    // State 4 (Contact): Peach, Coral, Pink, Lavender
    const S4 = {
      blob1: [255, 182, 138],  // Peach
      blob2: [255, 127, 112],  // Coral
      blob3: [255, 150, 200],  // Pink
      blob4: [169, 148, 255],  // Lavender
    }

    const lerpColor = (c1, c2, factor) => {
      return [
        Math.round(c1[0] + (c2[0] - c1[0]) * factor),
        Math.round(c1[1] + (c2[1] - c1[1]) * factor),
        Math.round(c1[2] + (c2[2] - c1[2]) * factor),
      ]
    }

    const render = () => {
      time += 0.007

      // Smooth lerp mouse coordinates
      mouseX += (targetX - mouseX) * 0.03
      mouseY += (targetY - mouseY) * 0.03

      ctx.clearRect(0, 0, width, height)

      // Calculate progress between the 4 sections
      const totalDocHeight = Math.max(document.body.scrollHeight - height, 1000)
      const scrollRatio = Math.min(1, Math.max(0, scrollY / totalDocHeight))

      // Section segments: 0 -> 0.33 (Hero -> About), 0.33 -> 0.66 (About -> Projects), 0.66 -> 1.0 (Projects -> Contact)
      let activeColors = { ...S1 }

      if (scrollRatio < 0.33) {
        const factor = scrollRatio / 0.33
        activeColors.blob1 = lerpColor(S1.blob1, S2.blob1, factor)
        activeColors.blob2 = lerpColor(S1.blob2, S2.blob2, factor)
        activeColors.blob3 = lerpColor(S1.blob3, S2.blob3, factor)
        activeColors.blob4 = lerpColor(S1.blob4, S2.blob4, factor)
      } else if (scrollRatio < 0.66) {
        const factor = (scrollRatio - 0.33) / 0.33
        activeColors.blob1 = lerpColor(S2.blob1, S3.blob1, factor)
        activeColors.blob2 = lerpColor(S2.blob2, S3.blob2, factor)
        activeColors.blob3 = lerpColor(S2.blob3, S3.blob3, factor)
        activeColors.blob4 = lerpColor(S2.blob4, S3.blob4, factor)
      } else {
        const factor = (scrollRatio - 0.66) / 0.34
        activeColors.blob1 = lerpColor(S3.blob1, S4.blob1, factor)
        activeColors.blob2 = lerpColor(S3.blob2, S4.blob2, factor)
        activeColors.blob3 = lerpColor(S3.blob3, S4.blob3, factor)
        activeColors.blob4 = lerpColor(S3.blob4, S4.blob4, factor)
      }

      // Draw 4 soft luminous fluid blobs that gracefully morph and overlap
      const drawBlob = (color, cx, cy, radius, opacity) => {
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`)
        gradient.addColorStop(0.55, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Blob 1: Upper Right / Interactive with Mouse
      const b1X = width * 0.75 + Math.sin(time) * 120 + (mouseX - width / 2) * 0.08
      const b1Y = height * 0.25 + Math.cos(time * 0.8) * 90 + (mouseY - height / 2) * 0.08
      drawBlob(activeColors.blob1, b1X, b1Y, Math.max(width * 0.45, 450), 0.28)

      // Blob 2: Upper Left / Sky
      const b2X = width * 0.2 + Math.cos(time * 0.9) * 110
      const b2Y = height * 0.35 + Math.sin(time * 0.7) * 80
      drawBlob(activeColors.blob2, b2X, b2Y, Math.max(width * 0.5, 500), 0.24)

      // Blob 3: Center-Bottom / Mint or Cream
      const b3X = width * 0.5 + Math.sin(time * 0.6) * 130
      const b3Y = height * 0.7 + Math.cos(time * 0.75) * 100
      drawBlob(activeColors.blob3, b3X, b3Y, Math.max(width * 0.55, 520), 0.22)

      // Blob 4: Bottom Right / Lavender
      const b4X = width * 0.85 + Math.cos(time * 0.5) * 90
      const b4Y = height * 0.8 + Math.sin(time * 0.65) * 90
      drawBlob(activeColors.blob4, b4X, b4Y, Math.max(width * 0.45, 440), 0.2)

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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.92 }}
      aria-hidden="true"
    />
  )
}
