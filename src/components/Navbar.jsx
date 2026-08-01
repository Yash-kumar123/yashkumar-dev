import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick('home')}
          className="font-display font-bold text-lg text-text flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-amber/15 border border-amber/30 flex items-center justify-center text-amber text-sm">
            YK
          </span>
          <span className="hidden sm:inline">Yash Kumar</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                active === l.id ? 'text-amber bg-amber/10' : 'text-muted hover:text-text'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber text-bg text-sm font-semibold hover:bg-amber/90 transition-colors"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        <button className="md:hidden text-text" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-b border-line px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`text-left px-3 py-2.5 rounded-lg text-sm ${
                active === l.id ? 'text-amber bg-amber/10' : 'text-muted'
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-amber text-bg text-sm font-semibold"
          >
            <Download size={15} /> Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
