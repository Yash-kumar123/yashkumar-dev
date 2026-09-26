import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center w-14 h-8 p-1 rounded-full cursor-pointer select-none transition-all duration-700 ${
        isDark
          ? 'bg-darktheme-surface border border-white/10 shadow-soft-sm'
          : 'bg-white/80 border border-black/10 shadow-soft-sm'
      }`}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none">
        <Sun
          size={12}
          className={`transition-all duration-500 ${
            isDark ? 'text-darktheme-muted opacity-40' : 'text-amber-500 opacity-100'
          }`}
        />
        <Moon
          size={12}
          className={`transition-all duration-500 ${
            isDark ? 'text-darktheme-sky opacity-100' : 'text-light-muted opacity-40'
          }`}
        />
      </div>

      {/* Animated Sliding Thumb */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
          isDark
            ? 'ml-auto bg-darktheme-elevated text-darktheme-sky border border-white/15'
            : 'mr-auto bg-white text-amber-500 border border-black/5'
        }`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
        </motion.div>
      </motion.div>
    </button>
  )
}
