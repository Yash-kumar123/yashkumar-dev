import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Layers, Server, Cpu, Database, Cloud, Radio, ChevronRight, Sparkles } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const CATEGORY_META = {
  languages: { icon: Terminal, color: 'text-dark bg-soft border-black/[0.08]', dot: 'bg-dark' },
  frontend: { icon: Layers, color: 'text-sky bg-sky-light border-sky/30', dot: 'bg-sky' },
  backend: { icon: Server, color: 'text-aqua bg-aqua-light border-aqua/30', dot: 'bg-aqua' },
  'ai-ml': { icon: Cpu, color: 'text-lavender bg-lavender-light border-lavender/30', dot: 'bg-lavender' },
  databases: { icon: Database, color: 'text-mint bg-mint-light border-mint/30', dot: 'bg-mint' },
  devops: { icon: Cloud, color: 'text-coral bg-coral-light border-coral/30', dot: 'bg-coral' },
  realtime: { icon: Radio, color: 'text-peach bg-peach-light border-peach/30', dot: 'bg-peach' },
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]?.id || 'languages')

  const activeCategory = skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0]
  const meta = CATEGORY_META[activeCategory.id] || CATEGORY_META.languages
  const IconComp = meta.icon

  return (
    <section id="stack" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] bg-cream/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-sky tracking-[0.25em] uppercase mb-3">
              <span className="text-dark font-bold">03 / TOOLBOX</span>
              <span className="w-8 h-[2px] bg-sky/60" />
              <span>DIGITAL TOOLBOX</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-dark uppercase">
              ENGINEERING<br />ECOSYSTEM
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-muted max-w-md font-sans leading-relaxed">
            Curated tools, protocols, and runtimes leveraged across production full-stack systems, real-time sync, and applied machine learning.
          </p>
        </div>

        {/* Digital Toolbox Interactive System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Domain Selectors (5 Columns) */}
          <div className="lg:col-span-5 space-y-2.5">
            {skillCategories.map((cat, idx) => {
              const isSelected = cat.id === selectedCategory
              const itemMeta = CATEGORY_META[cat.id] || CATEGORY_META.languages
              const ItemIcon = itemMeta.icon

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  onMouseEnter={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left p-4 rounded-3xl flex items-center justify-between transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-black/[0.1] shadow-soft-md scale-[1.01]'
                      : 'bg-transparent border-transparent text-dark-muted hover:bg-white/60 hover:text-dark'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono text-xs transition-colors border ${
                        isSelected ? itemMeta.color : 'bg-black/[0.03] text-dark-muted border-black/[0.04]'
                      }`}
                    >
                      <ItemIcon size={18} />
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold text-dark uppercase tracking-tight">
                        {cat.name}
                      </div>
                      <div className="text-[10px] text-dark-muted font-mono mt-0.5">
                        {cat.skills.length} VERIFIED MODULES
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      isSelected ? 'text-sky translate-x-1' : 'text-dark-muted/40'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Dynamic Constellation & Technology Badges (7 Columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 sm:p-10 rounded-4xl glass-bright relative overflow-hidden"
              >
                {/* Header Information */}
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-6 mb-6">
                  <div className="flex items-center gap-3.5">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-soft-sm ${meta.color}`}>
                      <IconComp size={24} />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] text-sky uppercase tracking-widest block font-bold">
                        SUBSYSTEM 0{skillCategories.findIndex((c) => c.id === activeCategory.id) + 1}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-dark">
                        {activeCategory.name}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-dark-muted">
                    {activeCategory.skills.length} Modules
                  </span>
                </div>

                {/* Subsystem Purpose Narrative */}
                <p className="text-dark-muted text-sm sm:text-base font-sans leading-relaxed mb-8">
                  {activeCategory.description}
                </p>

                {/* Floating Constellation of Technologies */}
                <div>
                  <span className="font-mono text-[11px] text-dark-muted tracking-widest uppercase block mb-3 font-semibold">
                    Active Production Ecosystem
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {activeCategory.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2.5 rounded-2xl font-mono text-xs font-semibold bg-white border border-black/[0.08] text-dark hover:border-sky hover:text-sky hover:shadow-soft-sm transition-all duration-200 select-none cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-dark-muted">
                  <span>PRODUCTION BENCHMARK</span>
                  <span className="text-dark font-semibold">ZERO-DOWNTIME OBSERVED</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
