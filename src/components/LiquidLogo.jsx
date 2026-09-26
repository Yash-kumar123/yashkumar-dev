import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function LiquidLogo() {
  const { isDark, theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isMorphing, setIsMorphing] = useState(false)

  // Trigger liquid morph on theme toggle
  useEffect(() => {
    setIsMorphing(true)
    const timer = setTimeout(() => setIsMorphing(false), 800)
    return () => clearTimeout(timer)
  }, [theme])

  return (
    <div
      className="group relative flex items-center gap-3 cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Liquid Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="liquid-brand-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isHovered || isMorphing ? '0.04 0.08' : '0.01 0.01'}
              numOctaves="2"
              result="warp"
            >
              <animate
                attributeName="baseFrequency"
                dur="1.2s"
                values="0.02 0.04; 0.06 0.09; 0.02 0.04"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale={isHovered ? '7' : isMorphing ? '12' : '0'}
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>

      {/* Tactile Liquid Monogram Pill */}
      <motion.div
        className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-soft-sm"
        style={{
          filter: isHovered || isMorphing ? 'url(#liquid-brand-filter)' : 'none',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Liquid background fill */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isDark
              ? 'bg-gradient-to-br from-darktheme-surface to-darktheme-elevated border border-white/10'
              : 'bg-gradient-to-br from-white to-light-secondary border border-black/10'
          }`}
        />

        {/* Dynamic accent liquid droplet dot */}
        <motion.span
          className={`absolute w-3 h-3 rounded-full blur-[2px] transition-colors duration-700 ${
            isDark ? 'bg-darktheme-aqua' : 'bg-light-aqua'
          }`}
          animate={{
            x: isHovered ? [0, 4, -4, 0] : 0,
            y: isHovered ? [0, -3, 3, 0] : 0,
            scale: isHovered ? [1, 1.4, 0.8, 1] : 1,
          }}
          transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
          style={{ top: '6px', right: '6px' }}
        />

        {/* Brand Monogram */}
        <span
          className={`relative font-display text-sm font-bold tracking-tight transition-colors duration-700 ${
            isDark ? 'text-darktheme-text' : 'text-light-text'
          }`}
        >
          YK
        </span>
      </motion.div>

      {/* Brand Title */}
      <div className="flex flex-col">
        <span
          className={`font-display text-sm font-bold tracking-tight transition-colors duration-700 ${
            isDark ? 'text-darktheme-text' : 'text-light-text'
          }`}
        >
          YASH KUMAR
        </span>
        <span
          className={`font-mono text-[9px] tracking-widest uppercase transition-colors duration-700 ${
            isDark ? 'text-darktheme-muted' : 'text-light-muted'
          }`}
        >
          APPLIED AI · SYSTEMS
        </span>
      </div>
    </div>
  )
}
