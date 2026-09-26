import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Layers, Server, Cpu, Database, Cloud, Radio, ChevronRight, Network, Sparkles } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const DOMAIN_ICONS = {
  languages: Terminal,
  frontend: Layers,
  backend: Server,
  'ai-ml': Cpu,
  databases: Database,
  devops: Cloud,
  realtime: Radio,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]?.id || 'languages')

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0]
  const CurrentIcon = DOMAIN_ICONS[currentCategory.id] || Terminal

  return (
    <section id="stack" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-void">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-3">
              <Network size={14} />
              <span>TECHNICAL ECOSYSTEM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-paper uppercase">
              ENGINEERING<br />STACK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted max-w-md font-sans leading-relaxed">
            Battle-tested technologies and protocols organized as an interconnected software engineering network.
          </p>
        </div>

        {/* Technical Ecosystem Interactive Canvas / Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Architectural Domain Nodes (5 Columns) */}
          <div className="lg:col-span-5 space-y-2.5">
            {skillCategories.map((cat, idx) => {
              const isSelected = cat.id === activeCategory
              const CatIcon = DOMAIN_ICONS[cat.id] || Terminal
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
                    isSelected
                      ? 'liquid-glass bg-[#14151A]/90 border-cyan/40 text-paper shadow-[0_0_25px_rgba(0,240,255,0.08)]'
                      : 'bg-transparent border-white/[0.04] text-muted hover:bg-white/[0.02] hover:border-white/[0.08] hover:text-paper'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs transition-colors ${
                        isSelected
                          ? 'bg-cyan/15 text-cyan border border-cyan/30'
                          : 'bg-white/[0.03] text-muted border border-white/[0.06]'
                      }`}
                    >
                      <CatIcon size={16} />
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold uppercase tracking-wider">
                        {cat.name}
                      </div>
                      <div className="text-[10px] text-muted font-mono mt-0.5">
                        {cat.skills.length} PRODUCTION MODULES
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      isSelected ? 'text-cyan translate-x-1' : 'text-muted/60'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Layer Inspector & Active Technologies (7 Columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="liquid-glass p-8 sm:p-10 rounded-3xl border-white/[0.08] relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute -right-20 -top-20 w-72 h-72 bg-cyan/10 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Header Information */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-6">
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                      <CurrentIcon size={22} />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] text-cyan uppercase tracking-widest block">
                        SUBSYSTEM // 0{skillCategories.findIndex((c) => c.id === currentCategory.id) + 1}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-paper">
                        {currentCategory.name}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {currentCategory.skills.length} Modules
                  </span>
                </div>

                {/* Subsystem Purpose */}
                <p className="text-muted text-sm sm:text-base font-sans leading-relaxed mb-8">
                  {currentCategory.description}
                </p>

                {/* Technology Chips Matrix */}
                <div>
                  <span className="font-mono text-[11px] text-muted tracking-widest uppercase block mb-3">
                    Active Production Ecosystem
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {currentCategory.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl font-mono text-xs font-medium bg-white/[0.03] border border-white/[0.08] text-paper hover:border-cyan/40 hover:bg-cyan/[0.05] hover:text-cyan transition-all duration-200 select-none shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>PRODUCTION BENCHMARK</span>
                  <span className="text-cyan font-semibold">VERIFIED PERFORMANCE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
