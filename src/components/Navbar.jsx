import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'

const NAV_ITEMS = [
  { id: 'work', label: 'WORK', target: '#projects' },
  { id: 'about', label: 'ABOUT', target: '#about' },
  { id: 'philosophy', label: 'HOW I THINK', target: '#philosophy' },
  { id: 'stack', label: 'STACK', target: '#stack' },
  { id: 'achievements', label: 'ACHIEVEMENTS', target: '#achievements' },
]

export default function Navbar({ activeSection = 'hero' }) {
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl border border-white/90 shadow-soft-md'
            : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-soft-sm'
        }`}
      >
        {/* Left: Brand Identity */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center font-display font-bold text-xs group-hover:scale-105 transition-transform duration-300 shadow-sm">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-dark group-hover:text-sky transition-colors">
              YASH.K
            </span>
            <span className="hidden xl:inline text-[9px] text-dark-muted font-mono tracking-widest uppercase">
              APPLIED AI · SYSTEMS
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-wider text-dark-muted">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-dark font-semibold bg-black/[0.05]'
                    : 'hover:text-dark hover:bg-black/[0.03]'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-aqua rounded-full shadow-[0_0_6px_#35D6D0]" />
                )}
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right: Tactile CONTACT button & Resume download */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium text-dark-muted hover:text-dark bg-black/[0.03] border border-black/[0.06] hover:border-black/[0.12] transition-all"
          >
            <span>RESUME</span>
            <Download size={12} />
          </a>

          <button
            onClick={() => handleNavClick('#contact')}
            className="group flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-dark text-white hover:bg-sky transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
          >
            <span>CONTACT</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full text-dark bg-black/[0.04] border border-black/[0.06]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Fullscreen Clean Light Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-12 lg:hidden font-mono"
          >
            {/* Top Bar inside modal */}
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center font-display font-bold text-xs">
                  YK
                </span>
                <span className="font-display font-bold text-base text-dark">YASH KUMAR</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-dark"
              >
                <X size={20} />
              </button>
            </div>

            {/* Middle: Editorial Oversized Links */}
            <div className="my-auto space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.target)}
                  className="w-full flex items-center justify-between text-left py-2 group border-b border-black/[0.04]"
                >
                  <span className="font-display text-3xl sm:text-5xl font-black tracking-tight text-dark-muted group-hover:text-dark transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-sky opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1} ↗
                  </span>
                </button>
              ))}

              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-between text-left py-2 group border-b border-black/[0.04]"
              >
                <span className="font-display text-3xl sm:text-5xl font-black tracking-tight text-sky">
                  CONTACT
                </span>
                <ArrowUpRight size={24} className="text-sky" />
              </button>
            </div>

            {/* Bottom: Status & Resume */}
            <div className="border-t border-black/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-dark font-medium">AVAILABLE FOR OPPORTUNITIES · 2026</span>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white font-semibold shadow-soft-sm"
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
