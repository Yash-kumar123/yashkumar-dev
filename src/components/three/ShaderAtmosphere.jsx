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

    // VIBRANT SECTION-SPECIFIC LIGHT PALETTES
    const LightStates = [
      // 0: HERO (Luminous Mint, Aqua, Sky, Lavender)
      {
        b1: [113, 215, 164], // Mint
        b2: [79, 156, 255],  // Sky
        b3: [34, 199, 194],  // Aqua
        b4: [197, 183, 255], // Lavender
      },
      // 1: ABOUT (Sunset Peach, Amber, Warm Lavender, Golden Sunlight)
      {
        b1: [255, 170, 131], // Peach
        b2: [255, 208, 184], // Warm Amber
        b3: [197, 183, 255], // Soft Lavender
        b4: [255, 228, 160], // Sunlight
      },
      // 2: PHILOSOPHY (Fresh Spring Mint, Electric Aqua, Sky, Lime)
      {
        b1: [107, 232, 174], // Spring Mint
        b2: [40, 222, 214],  // Electric Aqua
        b3: [79, 168, 255],  // Sky
        b4: [198, 243, 107], // Lime
      },
      // 3: PROJECTS (Electric Cobalt Sky, High-Contrast Aqua, Emerald, Radiant Violet)
      {
        b1: [59, 130, 246],  // Cobalt Sky
        b2: [6, 182, 212],   // High-Contrast Aqua
        b3: [16, 185, 129],  // Emerald Mint
        b4: [139, 92, 246],  // Radiant Violet
      },
      // 4: ACHIEVEMENTS (Royal Lavender, Electric Sky, Cyan, Soft Pink)
      {
        b1: [139, 92, 246],  // Royal Lavender
        b2: [56, 189, 248],  // Electric Sky
        b3: [52, 211, 153],  // Cyan Mint
        b4: [244, 114, 182], // Soft Pink
      },
      // 5: CONTACT (Sunset Peach Flame, Coral, Warm Lavender, Golden Glow)
      {
        b1: [251, 146, 60],  // Flame Peach
        b2: [248, 113, 113], // Coral
        b3: [167, 139, 250], // Lavender
        b4: [251, 191, 36],  // Golden Glow
      },
    ]

    // VIBRANT SECTION-SPECIFIC DARK PALETTES (Deep, Cinematic, Natural-Tech)
    const DarkStates = [
      // 0: HERO (Deep Emerald Teal, Cyber Blue, Cosmic Purple, Horizon Ember)
      {
        b1: [18, 75, 82],   // Deep Emerald Teal
        b2: [30, 59, 104],  // Cyber Blue
        b3: [62, 50, 100],  // Cosmic Purple
        b4: [122, 75, 58],  // Horizon Ember
      },
      // 1: ABOUT (Velvet Plum, Warm Mocha, Deep Indigo, Twilight Cyan)
      {
        b1: [77, 43, 68],   // Velvet Plum
        b2: [90, 54, 40],   // Warm Mocha
        b3: [38, 47, 74],   // Deep Indigo
        b4: [27, 60, 66],   // Twilight Cyan
      },
      // 2: PHILOSOPHY (Deep Matrix Mint, Dark Teal, Sapphire, Cyber Cyan)
      {
        b1: [20, 77, 63],   // Matrix Mint
        b2: [18, 63, 74],   // Dark Teal
        b3: [26, 50, 88],   // Sapphire
        b4: [27, 84, 80],   // Cyber Cyan
      },
      // 3: PROJECTS (Technical Deep Blue, Deep Electric Teal, Dark Indigo, Deep Cyan)
      {
        b1: [16, 42, 84],   // Technical Deep Blue
        b2: [12, 74, 72],   // Deep Electric Teal
        b3: [45, 35, 94],   // Dark Indigo
        b4: [20, 56, 66],   // Deep Cyan
      },
      // 4: ACHIEVEMENTS (Deep Cosmic Violet, Deep Sky Night, Deep Rose, Deep Mint)
      {
        b1: [59, 31, 92],   // Cosmic Violet
        b2: [24, 52, 92],   // Deep Sky Night
        b3: [77, 32, 52],   // Deep Rose
        b4: [18, 67, 57],   // Deep Mint
      },
      // 5: CONTACT (Deep Sunset Ember, Deep Crimson Plum, Twilight Purple, Deep Amber)
      {
        b1: [99, 45, 28],   // Sunset Ember
        b2: [82, 30, 54],   // Crimson Plum
        b3: [53, 32, 82],   // Twilight Purple
        b4: [77, 51, 25],   // Deep Amber
      },
    ]

    const lerpColor = (c1, c2, factor) => [
      Math.round(c1[0] + (c2[0] - c1[0]) * factor),
      Math.round(c1[1] + (c2[1] - c1[1]) * factor),
      Math.round(c1[2] + (c2[2] - c1[2]) * factor),
    ]

    const getSectionColors = (paletteList, ratio) => {
      const numSegments = paletteList.length - 1
      const scaled = ratio * numSegments
      const index = Math.min(Math.floor(scaled), numSegments - 1)
      const factor = scaled - index

      const fromState = paletteList[index]
      const toState = paletteList[index + 1]

      return {
        b1: lerpColor(fromState.b1, toState.b1, factor),
        b2: lerpColor(fromState.b2, toState.b2, factor),
        b3: lerpColor(fromState.b3, toState.b3, factor),
        b4: lerpColor(fromState.b4, toState.b4, factor),
      }
    }

    const render = () => {
      time += 0.007

      // Smooth theme transition over ~750ms
      const targetDark = isDarkRef.current ? 1 : 0
      darkTransitionProgress += (targetDark - darkTransitionProgress) * 0.05

      // Smooth pointer lerp
      mouseX += (targetX - mouseX) * 0.035
      mouseY += (targetY - mouseY) * 0.035

      ctx.clearRect(0, 0, width, height)

      // Calculate progress down page
      const totalDocHeight = Math.max(document.body.scrollHeight - height, 1000)
      const scrollRatio = Math.min(1, Math.max(0, scrollY / totalDocHeight))

      const lightColors = getSectionColors(LightStates, scrollRatio)
      const darkColors = getSectionColors(DarkStates, scrollRatio)

      // Blend light and dark active palettes
      const activeColors = {
        b1: lerpColor(lightColors.b1, darkColors.b1, darkTransitionProgress),
        b2: lerpColor(lightColors.b2, darkColors.b2, darkTransitionProgress),
        b3: lerpColor(lightColors.b3, darkColors.b3, darkTransitionProgress),
        b4: lerpColor(lightColors.b4, darkColors.b4, darkTransitionProgress),
      }

      // Noticeably richer opacity for vibrant visual impact
      const baseOpacity = 0.38 + darkTransitionProgress * 0.16

      // Fluid radial gradient blob drawing
      const drawBlob = (color, cx, cy, radius, opacity) => {
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity * 0.45})`)
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Blob 1: Top Right / Interactive with Cursor
      const b1X = width * 0.72 + Math.sin(time * 0.9) * 130 + (mouseX - width / 2) * 0.09
      const b1Y = height * 0.22 + Math.cos(time * 0.75) * 100 + (mouseY - height / 2) * 0.09
      drawBlob(activeColors.b1, b1X, b1Y, Math.max(width * 0.5, 520), baseOpacity * 1.1)

      // Blob 2: Upper Left / Atmosphere Sky
      const b2X = width * 0.22 + Math.cos(time * 0.8) * 120
      const b2Y = height * 0.32 + Math.sin(time * 0.6) * 90
      drawBlob(activeColors.b2, b2X, b2Y, Math.max(width * 0.52, 540), baseOpacity * 0.95)

      // Blob 3: Center-Mid / Section Color Heart
      const b3X = width * 0.5 + Math.sin(time * 0.5) * 140
      const b3Y = height * 0.65 + Math.cos(time * 0.65) * 110
      drawBlob(activeColors.b3, b3X, b3Y, Math.max(width * 0.58, 560), baseOpacity * 0.9)

      // Blob 4: Bottom Right / Warmth & Depth Accent
      const b4X = width * 0.82 + Math.cos(time * 0.4) * 95
      const b4Y = height * 0.75 + Math.sin(time * 0.55) * 95
      drawBlob(activeColors.b4, b4X, b4Y, Math.max(width * 0.48, 480), baseOpacity * 0.85)

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
