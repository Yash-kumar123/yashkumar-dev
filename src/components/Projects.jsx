import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Activity, ChevronDown, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolioData'
import ArchitectureModal from './ArchitectureModal'
import {
  DevSyncVisual,
  PerformanceEvalVisual,
  DementiaDetectionVisual,
  RentVortexVisual,
  PokedexVisual,
} from './projects/ProjectVisualMockups'

const VISUAL_COMPONENTS = {
  'devsync-ai': DevSyncVisual,
  'performance-eval': PerformanceEvalVisual,
  'dementia-detection': DementiaDetectionVisual,
  'rent-vortex': RentVortexVisual,
  pokedex: PokedexVisual,
}

function ProjectEditorialCard({ project, index, onOpenArchitecture }) {
  const [expanded, setExpanded] = useState(false)
  const VisualComponent = VISUAL_COMPONENTS[project.id] || DevSyncVisual
  const isReversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 sm:p-12 lg:p-14 rounded-4xl glass-bright hover:shadow-soft-xl transition-all duration-500 relative group overflow-hidden"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10`}>
        {/* Visual Mockup Container (5 Columns) - Asymmetrically placed */}
        <div
          onClick={() => onOpenArchitecture(project)}
          className={`h-[300px] sm:h-[340px] rounded-3xl cursor-pointer hover:scale-[1.01] transition-transform duration-500 lg:col-span-5 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <VisualComponent />
        </div>

        {/* Narrative & Controls (7 Columns) */}
        <div className={`space-y-6 lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Top Identifier & Date */}
          <div className="flex items-center gap-3 font-mono text-xs text-dark-muted">
            <span className="text-sky font-bold tracking-widest text-sm">
              0{index + 1}
            </span>
            <span className="w-8 h-[1px] bg-black/[0.1]" />
            <span className="uppercase tracking-wider">{project.date}</span>
            <span className="text-black/15">•</span>
            <span className="text-dark font-semibold">{project.subtitle}</span>
          </div>

          {/* Project Title */}
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight">
              {project.name}
            </h3>
            <p className="mt-3 text-dark-muted text-sm sm:text-base font-sans leading-relaxed tracking-tight">
              {project.tagline || project.description}
            </p>
          </div>

          {/* Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full font-mono text-xs bg-white border border-black/[0.08] text-dark shadow-soft-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-semibold tracking-wider bg-dark text-white hover:bg-sky transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-medium text-dark bg-white border border-black/[0.1] hover:border-black/[0.25] transition-all shadow-soft-sm"
              >
                <Github size={13} />
                <span>CODE</span>
              </a>
            )}

            <button
              onClick={() => onOpenArchitecture(project)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-semibold text-sky bg-sky-light border border-sky/30 hover:bg-sky hover:text-white transition-all shadow-soft-sm"
            >
              <Activity size={13} />
              <span>SYSTEM ARCHITECTURE</span>
            </button>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-dark-muted hover:text-dark transition-colors py-2 px-2"
            >
              <span>{expanded ? 'LESS DETAILS' : 'ENGINEERING NOTES'}</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Expandable Engineering Highlights */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-black/[0.08] pt-5 mt-4 space-y-2.5 font-sans text-xs sm:text-sm text-dark-muted"
              >
                {project.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sky shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedArchProject, setSelectedArchProject] = useState(null)

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] bg-cream/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-sky tracking-[0.25em] uppercase mb-3">
              <span className="text-dark font-bold">04 / SELECTED WORK</span>
              <span className="w-8 h-[2px] bg-sky/60" />
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-dark uppercase">
              SELECTED<br />WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-muted max-w-md font-sans leading-relaxed">
            Five production systems engineered for real-time multiplayer collaboration, multi-tenant RBAC isolation, and acoustic intelligence.
          </p>
        </div>

        {/* Asymmetrical Project Showcase List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectEditorialCard
              key={project.id}
              project={project}
              index={index}
              onOpenArchitecture={(proj) => setSelectedArchProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Upgraded Case Study Architecture Modal */}
      {selectedArchProject && (
        <ArchitectureModal
          project={selectedArchProject}
          onClose={() => setSelectedArchProject(null)}
        />
      )}
    </section>
  )
}
