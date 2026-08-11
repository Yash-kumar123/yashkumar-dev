import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'projects', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between font-poppins">
        {/* Brand Emblem Logo */}
        <button
          onClick={() => handleClick('hero')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <span className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center font-display font-bold text-xs text-cyan group-hover:border-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            YK
          </span>
          <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan transition-colors hidden sm:inline">
            Yash Kumar
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 shadow-2xl">
          {LINKS.map((l) => {
            const isActive = active === l.id
            return (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-cyan font-semibold' : 'text-ash hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-cyan/15 rounded-full border border-cyan/40 -z-10" />
                )}
                {l.label}
              </button>
            )
          })}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/50 bg-cyan/15 text-white text-xs font-mono tracking-wider hover:bg-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <Download size={13} />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-3 font-poppins">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-all ${
                active === l.id
                  ? 'text-ember bg-ember/10 border border-ember/30'
                  : 'text-[#B5B5B5] hover:text-white bg-white/5 border border-transparent'
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ember text-white font-mono font-semibold text-xs tracking-wider shadow-[0_0_20px_rgba(252,107,47,0.3)]"
          >
            <Download size={15} /> DOWNLOAD RESUME
          </a>
        </div>
      )}
    </header>
  )
}
