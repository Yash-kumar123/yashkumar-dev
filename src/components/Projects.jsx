import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolioData'

function ProjectRow({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative glass-card p-8 md:p-10 transition-all duration-500 hover:border-ember/40 hover:shadow-[0_0_40px_rgba(252,107,47,0.15)]"
    >
      {/* Subtle Ember Radial Glow on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(252,107,47,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Info: Number & Title & Description */}
        <div className="flex items-start gap-6 max-w-3xl">
          <span className="font-mono text-2xl text-ember font-bold shrink-0 mt-1">
            {formattedIndex}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white group-hover:text-ember transition-colors duration-300 tracking-tight">
                {project.name}
              </h3>
              <span className="text-xs font-mono text-[#B5B5B5] px-3 py-1 rounded-full border border-white/10 bg-white/5">
                {project.date}
              </span>
            </div>

            <p className="text-xs font-mono text-ember/90 mb-3 uppercase tracking-wider">{project.subtitle}</p>

            <p className="text-[#B5B5B5] text-sm sm:text-base leading-relaxed font-poppins max-w-2xl font-normal">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#B5B5B5] group-hover:border-ember/30 group-hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions & Expand Toggle */}
        <div className="flex flex-wrap items-center gap-4 shrink-0 lg:flex-col lg:items-end">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember text-white text-xs font-mono font-medium tracking-wide hover:bg-ember-bright transition-all duration-300 shadow-[0_0_20px_rgba(252,107,47,0.35)]"
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-[#B5B5B5] hover:text-white hover:border-white/30 text-xs font-mono transition-all duration-300"
              >
                <Github size={14} />
                <span>CODE</span>
              </a>
            )}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B5B5B5] hover:text-ember transition-colors py-1"
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
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:pl-12 relative z-10"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 space-y-3">
              <span className="font-mono text-xs text-ember tracking-widest uppercase block mb-1">KEY TECHNICAL HIGHLIGHTS</span>
              {project.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#B5B5B5] leading-relaxed font-poppins">
                  <span className="text-ember font-mono text-xs mt-0.5">▸</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
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
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">Featured Software</span>
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
