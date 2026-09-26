import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'
import { useTheme } from '../context/ThemeContext'
import LiquidLogo from './LiquidLogo'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { id: 'work', label: 'WORK', target: '#projects' },
  { id: 'about', label: 'ABOUT', target: '#about' },
  { id: 'stack', label: 'STACK', target: '#stack' },
  { id: 'achievements', label: 'ACHIEVEMENTS', target: '#achievements' },
  { id: 'contact', label: 'CONTACT', target: '#contact' },
]

export default function Navbar({ activeSection = 'hero' }) {
  const { isDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (target) => {
    scrollToTarget(target, -60)
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 safe-top transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full pointer-events-auto transition-all duration-700 ${
          isDark
            ? scrolled
              ? 'bg-[#151B21]/80 backdrop-blur-2xl border border-white/10 shadow-dark-card'
              : 'bg-[#151B21]/50 backdrop-blur-md border border-white/5'
            : scrolled
              ? 'bg-white/85 backdrop-blur-2xl border border-white/90 shadow-soft-md'
              : 'bg-white/55 backdrop-blur-md border border-white/60 shadow-soft-sm'
        }`}
      >
        {/* Left: Brand Identity with Liquid Logo */}
        <div onClick={() => handleNavClick('#hero')}>
          <LiquidLogo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 font-mono text-[11px] tracking-wider transition-colors duration-700 ${
            isDark ? 'text-darktheme-muted' : 'text-light-muted'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? isDark
                      ? 'text-darktheme-text font-semibold bg-white/10'
                      : 'text-light-text font-semibold bg-black/[0.05]'
                    : isDark
                      ? 'hover:text-darktheme-text hover:bg-white/5'
                      : 'hover:text-light-text hover:bg-black/[0.03]'
                }`}
              >
                {isActive && (
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full ${
                      isDark ? 'bg-darktheme-aqua shadow-[0_0_8px_#4DE1D3]' : 'bg-light-aqua shadow-[0_0_8px_#22C7C2]'
                    }`}
                  />
                )}
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right: Theme Toggle & Tactile Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Day / Night Theme Toggle */}
          <ThemeToggle />

          {/* Resume Download */}
          <a
            href={profile.resumeUrl}
            download
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium transition-all duration-500 ${
              isDark
                ? 'text-darktheme-subtext hover:text-darktheme-text bg-white/5 border border-white/10 hover:border-white/20'
                : 'text-light-subtext hover:text-light-text bg-black/[0.03] border border-black/[0.06] hover:border-black/[0.12]'
            }`}
          >
            <span>RESUME</span>
            <Download size={12} />
          </a>

          {/* Contact Direct CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className={`hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider transition-all duration-300 shadow-soft-sm ${
              isDark
                ? 'bg-darktheme-aqua text-black hover:bg-darktheme-sky'
                : 'bg-dark text-white hover:bg-light-sky'
            }`}
          >
            <span>CONNECT</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isDark
                ? 'text-darktheme-text bg-white/5 border border-white/10'
                : 'text-light-text bg-black/[0.04] border border-black/[0.06]'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer with Theme Awareness */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-40 flex flex-col justify-between safe-drawer overflow-y-auto md:hidden font-mono pointer-events-auto transition-colors duration-700 ${
              isDark ? 'bg-darktheme-bg/98 text-darktheme-text backdrop-blur-3xl' : 'bg-light-bg/98 text-light-text backdrop-blur-3xl'
            }`}
          >
            {/* Top drawer bar */}
            <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/10 pb-6">
              <LiquidLogo />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setMobileOpen(false)}
                  className={`p-2.5 rounded-full ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-dark'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-5 py-8">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.target)}
                  className="text-left text-2xl sm:text-3xl font-display font-bold tracking-tight hover:text-aqua transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono opacity-40">0{index + 1}</span>
                </button>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-black/[0.08] dark:border-white/10 flex flex-col gap-3 text-xs">
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 py-3.5 rounded-full border border-black/10 dark:border-white/15 font-semibold"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className={`py-3.5 rounded-full font-semibold ${
                  isDark ? 'bg-darktheme-aqua text-black' : 'bg-dark text-white'
                }`}
              >
                LET'S TALK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
