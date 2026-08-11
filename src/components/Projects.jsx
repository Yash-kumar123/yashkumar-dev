import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ChevronDown } from 'lucide-react'
import { projects } from '../data/portfolioData'

function ProjectRow({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const bullets = project.bullets || project.highlights || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-6 md:p-8 transition-all duration-500 hover:border-cyan/40 group relative overflow-hidden"
    >
      {/* Background Radial Hover Glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/15 transition-all duration-700" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        {/* Left Info & Stack */}
        <div className="flex items-start gap-4 md:gap-6 flex-1">
          <span className="font-mono text-xs text-cyan font-bold tracking-widest pt-1">
            0{index + 1}
          </span>
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight group-hover:text-cyan transition-colors">
              {project.name}
            </h3>
            <p className="text-ash text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-ash group-hover:border-cyan/30 group-hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions & Expand Toggle */}
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 shrink-0 lg:flex-col lg:items-end w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan text-black text-xs font-mono font-semibold tracking-wide hover:bg-cyan-bright transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-ash hover:text-white hover:border-white/30 text-xs font-mono transition-all duration-300"
              >
                <Github size={14} />
                <span>CODE</span>
              </a>
            )}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ash hover:text-cyan transition-colors py-1"
          >
            <span>{expanded ? 'HIDE HIGHLIGHTS' : 'VIEW HIGHLIGHTS'}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Expandable Bullet Points */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 mt-6 pt-6 relative z-10"
          >
            <ul className="space-y-2 text-xs md:text-sm text-silver font-poppins">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-48 bg-void border-t border-white/5 font-poppins">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-cyan inline-block rounded-full" />
            <span className="text-cyan text-xs font-bold tracking-[0.25em] uppercase">Featured Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Projects
          </h2>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
