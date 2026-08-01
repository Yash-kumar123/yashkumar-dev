import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { profile, stats } from '../data/portfolioData'

function RoleRotator() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = profile.roles[index]
    const speed = deleting ? 35 : 65
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % profile.roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, index])

  return (
    <span className="gradient-text">
      {display}
      <span className="inline-block w-[2px] h-[0.9em] bg-amber ml-1 align-middle animate-pulse" />
    </span>
  )
}

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-medium mb-6">
            {profile.badge}
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-text">
            Yash Kumar,
            <br />
            <RoleRotator />
          </h1>
          <p className="mt-6 text-muted text-base md:text-lg leading-relaxed max-w-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-bg font-semibold text-sm hover:bg-amber/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-text font-semibold text-sm hover:border-amber hover:text-amber transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-amber transition-colors">
              <Github size={20} />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-amber transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-amber transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <div className="font-display font-bold text-xl md:text-2xl text-text">{s.value}</div>
                <div className="text-muted text-xs mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glow-ring">
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-line rounded-2xl px-4 py-3 shadow-xl">
            <div className="text-amber font-display font-bold text-sm">SIH 2025</div>
            <div className="text-muted text-xs">National Finalist</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
