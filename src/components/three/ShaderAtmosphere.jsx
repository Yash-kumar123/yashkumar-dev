import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function ShaderAtmosphere() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()
  const isDarkRef = useRef(isDark)

  useEffect(() => {
    isDarkRef.current = isDark
  }, [isDark])

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
    let darkTransitionProgress = isDarkRef.current ? 1 : 0

    // LIGHT PALETTES (Refined Light Mode Tokens)
    const LightStates = {
      hero: {
        b1: [185, 244, 234], // #B9F4EA Aqua
        b2: [142, 197, 255], // #8EC5FF Sky
        b3: [197, 183, 255], // #C5B7FF Lavender
        b4: [255, 208, 184], // #FFD0B8 Sunlight Warmth
      },
      about: {
        b1: [255, 208, 184], // Warm Peach
        b2: [255, 234, 217], // Cream
        b3: [216, 206, 255], // Soft Lavender
        b4: [255, 249, 245], // Warm White
      },
      projects: {
        b1: [113, 215, 164], // #71D7A4 Mint
        b2: [79, 156, 255],  // #4F9CFF Sky
        b3: [34, 199, 194],  // #22C7C2 Aqua
        b4: [185, 244, 234], // Light Aqua
      },
      contact: {
        b1: [255, 170, 131], // #FFAA83 Peach
        b2: [197, 183, 255], // #C5B7FF Lavender
        b3: [255, 245, 239], // Warm White
        b4: [255, 179, 198], // Soft Pink
      },
    }

    // DARK PALETTES (Sophisticated Deep Natural-Tech Tokens)
    const DarkStates = {
      hero: {
        b1: [18, 61, 61],   // #123D3D Deep Teal
        b2: [25, 59, 104],  // #193B68 Deep Sky
        b3: [58, 49, 95],   // #3A315F Deep Lavender
        b4: [106, 69, 56],  // #6A4538 Deep Horizon Warmth
      },
      about: {
        b1: [44, 31, 61],   // Deep Plum
        b2: [74, 46, 53],   // Deep Rose
        b3: [30, 40, 56],   // Night Slate
        b4: [20, 40, 43],   // Deep Aqua Charcoal
      },
      projects: {
        b1: [15, 61, 57],   // Deep Cyan
        b2: [20, 53, 90],   // Technical Navy
        b3: [38, 35, 77],   // Technical Indigo
        b4: [16, 43, 51],   // Deep Mint Night
      },
      contact: {
        b1: [61, 38, 51],   // Deep Warm Plum
        b2: [45, 33, 71],   // Deep Lavender
        b3: [77, 44, 36],   // Deep Horizon Peach
        b4: [27, 43, 56],   // Night Cyan
      },
    }

    const lerpColor = (c1, c2, factor) => [
      Math.round(c1[0] + (c2[0] - c1[0]) * factor),
      Math.round(c1[1] + (c2[1] - c1[1]) * factor),
      Math.round(c1[2] + (c2[2] - c1[2]) * factor),
    ]

    const getInterpolatedSectionColors = (palette, ratio) => {
      if (ratio < 0.33) {
        const factor = ratio / 0.33
        return {
          b1: lerpColor(palette.hero.b1, palette.about.b1, factor),
          b2: lerpColor(palette.hero.b2, palette.about.b2, factor),
          b3: lerpColor(palette.hero.b3, palette.about.b3, factor),
          b4: lerpColor(palette.hero.b4, palette.about.b4, factor),
        }
      } else if (ratio < 0.66) {
        const factor = (ratio - 0.33) / 0.33
        return {
          b1: lerpColor(palette.about.b1, palette.projects.b1, factor),
          b2: lerpColor(palette.about.b2, palette.projects.b2, factor),
          b3: lerpColor(palette.about.b3, palette.projects.b3, factor),
          b4: lerpColor(palette.about.b4, palette.projects.b4, factor),
        }
      } else {
        const factor = (ratio - 0.66) / 0.34
        return {
          b1: lerpColor(palette.projects.b1, palette.contact.b1, factor),
          b2: lerpColor(palette.projects.b2, palette.contact.b2, factor),
          b3: lerpColor(palette.projects.b3, palette.contact.b3, factor),
          b4: lerpColor(palette.projects.b4, palette.contact.b4, factor),
        }
      }
    }

    const render = () => {
      time += 0.006

      // Lerp dark transition progress smoothly over ~750ms
      const targetDark = isDarkRef.current ? 1 : 0
      darkTransitionProgress += (targetDark - darkTransitionProgress) * 0.05

      // Smooth pointer lerp
      mouseX += (targetX - mouseX) * 0.03
      mouseY += (targetY - mouseY) * 0.03

      ctx.clearRect(0, 0, width, height)

      // Calculate scroll progress across document
      const totalDocHeight = Math.max(document.body.scrollHeight - height, 1000)
      const scrollRatio = Math.min(1, Math.max(0, scrollY / totalDocHeight))

      const lightColors = getInterpolatedSectionColors(LightStates, scrollRatio)
      const darkColors = getInterpolatedSectionColors(DarkStates, scrollRatio)

      // Blend light and dark palettes according to darkTransitionProgress
      const activeColors = {
        b1: lerpColor(lightColors.b1, darkColors.b1, darkTransitionProgress),
        b2: lerpColor(lightColors.b2, darkColors.b2, darkTransitionProgress),
        b3: lerpColor(lightColors.b3, darkColors.b3, darkTransitionProgress),
        b4: lerpColor(lightColors.b4, darkColors.b4, darkTransitionProgress),
      }

      // Dynamic opacity tuned for daylight vs moonlight
      const baseOpacity = 0.28 + darkTransitionProgress * 0.14

      // Draw soft luminous atmospheric diffusion blobs
      const drawBlob = (color, cx, cy, radius, opacity) => {
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity * 0.45})`)
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Blob 1: Upper Right / Interactive with Mouse
      const b1X = width * 0.72 + Math.sin(time) * 110 + (mouseX - width / 2) * 0.07
      const b1Y = height * 0.22 + Math.cos(time * 0.8) * 85 + (mouseY - height / 2) * 0.07
      drawBlob(activeColors.b1, b1X, b1Y, Math.max(width * 0.45, 450), baseOpacity)

      // Blob 2: Upper Left / Sky
      const b2X = width * 0.22 + Math.cos(time * 0.85) * 100
      const b2Y = height * 0.32 + Math.sin(time * 0.65) * 80
      drawBlob(activeColors.b2, b2X, b2Y, Math.max(width * 0.5, 480), baseOpacity * 0.9)

      // Blob 3: Center-Bottom / Mountain Mist
      const b3X = width * 0.5 + Math.sin(time * 0.55) * 120
      const b3Y = height * 0.68 + Math.cos(time * 0.7) * 90
      drawBlob(activeColors.b3, b3X, b3Y, Math.max(width * 0.55, 500), baseOpacity * 0.85)

      // Blob 4: Bottom Right / Sunset-Sunrise Warmth
      const b4X = width * 0.82 + Math.cos(time * 0.45) * 85
      const b4Y = height * 0.78 + Math.sin(time * 0.6) * 85
      drawBlob(activeColors.b4, b4X, b4Y, Math.max(width * 0.45, 440), baseOpacity * 0.75)

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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
