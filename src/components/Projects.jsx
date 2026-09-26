import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Activity, ChevronDown, Layers } from 'lucide-react'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 sm:p-10 lg:p-12 rounded-3xl liquid-glass border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 relative group overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[130px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
        style={{ backgroundColor: project.accent || '#00F0FF' }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Editorial Information & Actions (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Identifier & Date */}
          <div className="flex items-center gap-3 font-mono text-xs text-muted">
            <span className="text-cyan font-bold tracking-widest text-sm">
              0{index + 1}
            </span>
            <span className="w-6 h-[1px] bg-white/[0.15]" />
            <span className="uppercase tracking-wider">{project.date}</span>
            <span className="text-white/20">•</span>
            <span className="text-cyan font-semibold">{project.subtitle}</span>
          </div>

          {/* Project Title */}
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-paper tracking-tight group-hover:text-white transition-colors">
              {project.name}
            </h3>
            <p className="mt-3 text-muted text-sm sm:text-base font-sans leading-relaxed tracking-tight">
              {project.tagline || project.description}
            </p>
          </div>

          {/* Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg font-mono text-xs bg-white/[0.03] border border-white/[0.08] text-muted group-hover:border-white/[0.14] group-hover:text-paper transition-colors"
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
                data-cursor="project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider bg-paper text-void hover:bg-cyan transition-all duration-300 shadow-[0_0_20px_rgba(245,243,238,0.1)]"
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-medium text-paper bg-white/[0.04] border border-white/[0.1] hover:border-cyan/40 hover:text-cyan transition-all"
              >
                <Github size={13} />
                <span>CODE</span>
              </a>
            )}

            <button
              onClick={() => onOpenArchitecture(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-medium text-cyan bg-cyan/10 border border-cyan/30 hover:bg-cyan hover:text-void transition-all"
            >
              <Activity size={13} />
              <span>SYSTEM ARCHITECTURE</span>
            </button>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-paper transition-colors py-2 px-2"
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
                className="overflow-hidden border-t border-white/[0.08] pt-5 mt-4 space-y-2.5 font-sans text-xs sm:text-sm text-muted"
              >
                {project.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: High-Fidelity Bespoke Architecture Visual (5 Columns) */}
        <div
          data-cursor="project"
          onClick={() => onOpenArchitecture(project)}
          className="lg:col-span-5 h-[280px] sm:h-[320px] rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform duration-500"
        >
          <VisualComponent />
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedArchProject, setSelectedArchProject] = useState(null)

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-void">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-3">
              <span className="text-paper font-bold">02</span>
              <span className="w-8 h-[1px] bg-cyan/50" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-paper uppercase">
              PRODUCTION<br />SYSTEMS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-md font-sans leading-relaxed">
            Featured applications engineered for high reliability, real-time collaboration, and applied intelligence.
          </p>
        </div>

        {/* Editorial Project Panels List */}
        <div className="space-y-10">
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
