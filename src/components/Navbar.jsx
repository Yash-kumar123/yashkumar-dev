import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, ArrowUpRight, Radio, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'

const NAV_ITEMS = [
  { id: 'work', label: 'WORK', target: '#projects' },
  { id: 'systems', label: 'SYSTEMS', target: '#systems' },
  { id: 'about', label: 'ABOUT', target: '#about' },
  { id: 'stack', label: 'STACK', target: '#stack' },
  { id: 'achievements', label: 'ACHIEVEMENTS', target: '#achievements' },
]

export default function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (target) => {
    scrollToTarget(target, -60)
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'liquid-glass bg-[#0D0E12]/80 border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Left: Brand Identity with Liquid Hover Distortion */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-white/[0.1] flex items-center justify-center font-display font-bold text-xs text-cyan group-hover:border-cyan/60 group-hover:scale-105 transition-all duration-300">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-paper group-hover:text-cyan transition-colors">
              YASH KUMAR
            </span>
            <span className="hidden xl:inline text-[9px] text-muted font-mono tracking-widest uppercase">
              APPLIED AI · SYSTEMS
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-wider text-muted">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 relative ${
                  isActive
                    ? 'text-paper font-semibold bg-white/[0.08]'
                    : 'hover:text-paper hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan rounded-full shadow-[0_0_8px_#00F0FF]" />
                )}
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right: CONTACT CTA Button & Resume Download */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium text-muted hover:text-paper bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] transition-all"
          >
            <span>RESUME</span>
            <Download size={12} />
          </a>

          <button
            onClick={() => handleNavClick('#contact')}
            data-cursor="cta"
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-paper text-void hover:bg-cyan transition-all duration-300 shadow-[0_0_20px_rgba(245,243,238,0.12)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <span>CONTACT</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full text-muted hover:text-paper bg-white/[0.04] border border-white/[0.08]"
          aria-label="Toggle Fullscreen Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Fullscreen Cinematic Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-12 lg:hidden font-mono"
          >
            {/* Top Bar inside modal */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-surface border border-white/[0.1] flex items-center justify-center font-display font-bold text-xs text-cyan">
                  YK
                </span>
                <span className="font-display font-bold text-base text-paper">YASH KUMAR</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted hover:text-paper"
              >
                <X size={20} />
              </button>
            </div>

            {/* Middle: Oversized Editorial Links */}
            <div className="my-auto space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.target)}
                  className="w-full flex items-center justify-between text-left py-2 group border-b border-white/[0.04]"
                >
                  <span className="font-display text-3xl sm:text-5xl font-black tracking-tight text-muted group-hover:text-paper transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1} ↗
                  </span>
                </button>
              ))}

              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-between text-left py-2 group border-b border-white/[0.04]"
              >
                <span className="font-display text-3xl sm:text-5xl font-black tracking-tight text-cyan">
                  CONTACT
                </span>
                <ArrowUpRight size={24} className="text-cyan" />
              </button>
            </div>

            {/* Bottom: Status & Resume */}
            <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES · 2026</span>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-paper font-semibold"
              >
                <Download size={13} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
