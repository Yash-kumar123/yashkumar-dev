import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { projects } from '../data/portfolioData'

const accentClasses = {
  amber: {
    text: 'text-amber',
    border: 'border-amber/30',
    bg: 'bg-amber/10',
    glow: 'hover:border-amber/60 hover:shadow-[0_10px_35px_-5px_rgba(245,165,36,0.18)]',
  },
  violet: {
    text: 'text-violet',
    border: 'border-violet/30',
    bg: 'bg-violet/10',
    glow: 'hover:border-violet/60 hover:shadow-[0_10px_35px_-5px_rgba(139,124,246,0.18)]',
  },
  teal: {
    text: 'text-teal',
    border: 'border-teal/30',
    bg: 'bg-teal/10',
    glow: 'hover:border-teal/60 hover:shadow-[0_10px_35px_-5px_rgba(45,212,191,0.18)]',
  },
  rose: {
    text: 'text-rose',
    border: 'border-rose/30',
    bg: 'bg-rose/10',
    glow: 'hover:border-rose/60 hover:shadow-[0_10px_35px_-5px_rgba(251,113,133,0.18)]',
  },
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const isOpen = pinned || hovered

  const c = accentClasses[project.accent]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
      className={`group relative rounded-2xl border ${c.border} bg-card overflow-hidden transition-all duration-300 ${c.glow}`}
    >
      {/* Subtle Accent Glow Overlay */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono ${c.text}`}>{project.date}</span>
            </div>
            <h3 className={`font-display font-bold text-xl text-text transition-colors duration-200 group-hover:${c.text}`}>
              {project.name}
            </h3>
            <p className="text-muted text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={() => setPinned((v) => !v)}
            className="shrink-0 text-muted hover:text-text transition-colors p-1"
            aria-label="Toggle details"
          >
            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <p className="text-text/90 text-sm leading-relaxed mt-4">{project.description}</p>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-2 overflow-hidden"
            >
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-text/80 leading-relaxed">
                  <span className={`${c.text} shrink-0 transition-transform group-hover:translate-x-0.5`}>▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border} transition-transform duration-200 hover:scale-105`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${c.text} hover:underline transition-transform hover:translate-x-0.5`}
            >
              Live demo <ExternalLink size={14} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text transition-transform hover:translate-x-0.5"
            >
              View code <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber font-mono text-xs tracking-widest uppercase">Projects</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">Things I've built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
