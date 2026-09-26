import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Layers, Server, Cpu, Database, Cloud, Radio, ChevronRight } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const CATEGORY_META = {
  languages: { icon: Terminal, dot: 'bg-light-aqua dark:bg-darktheme-aqua' },
  frontend: { icon: Layers, dot: 'bg-light-sky dark:bg-darktheme-sky' },
  backend: { icon: Server, dot: 'bg-light-aqua dark:bg-darktheme-aqua' },
  'ai-ml': { icon: Cpu, dot: 'bg-light-lavender dark:bg-darktheme-lavender' },
  databases: { icon: Database, dot: 'bg-light-mint dark:bg-darktheme-mint' },
  devops: { icon: Cloud, dot: 'bg-light-peach dark:bg-darktheme-peach' },
  realtime: { icon: Radio, dot: 'bg-light-sky dark:bg-darktheme-sky' },
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]?.id || 'languages')

  const activeCategory = skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0]
  const meta = CATEGORY_META[activeCategory.id] || CATEGORY_META.languages
  const IconComp = meta.icon

  return (
    <section id="stack" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-light-sky dark:text-darktheme-sky tracking-[0.25em] uppercase mb-3 transition-colors duration-700">
              <span className="text-light-text dark:text-darktheme-text font-bold">03 / TOOLBOX</span>
              <span className="w-8 h-[2px] bg-light-sky/60 dark:bg-darktheme-sky/60" />
              <span>DIGITAL TOOLBOX</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-light-text dark:text-darktheme-text uppercase transition-colors duration-700">
              ENGINEERING<br />ECOSYSTEM
            </h2>
          </div>
          <p className="text-sm sm:text-base text-light-muted dark:text-darktheme-muted max-w-md font-sans leading-relaxed transition-colors duration-700">
            Curated tools, protocols, and runtimes leveraged across production full-stack systems, real-time sync, and applied machine learning.
          </p>
        </div>

        {/* Digital Toolbox Interactive System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Domain Selectors */}
          <div className="lg:col-span-5 space-y-2.5">
            {skillCategories.map((cat) => {
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
                      ? 'bg-white dark:bg-darktheme-surface border-black/[0.1] dark:border-white/15 shadow-soft-md scale-[1.01] text-light-text dark:text-darktheme-text'
                      : 'bg-transparent border-transparent text-light-muted dark:text-darktheme-muted hover:bg-white/60 dark:hover:bg-white/5 hover:text-light-text dark:hover:text-darktheme-text'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-2xl flex items-center justify-center bg-black/[0.04] dark:bg-white/5">
                      <ItemIcon size={14} className={itemMeta.dot.replace('bg-', 'text-')} />
                    </div>
                    <span className="font-display font-bold text-sm tracking-tight uppercase">
                      {cat.title}
                    </span>
                  </div>
                  <ChevronRight size={14} className={`transition-transform ${isSelected ? 'translate-x-1 opacity-100' : 'opacity-30'}`} />
                </button>
              )
            })}
          </div>

          {/* Right Column: Dynamic Tech Pills */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-10 rounded-4xl glass-panel space-y-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/[0.04] dark:bg-white/5">
                    <IconComp size={18} className="text-light-aqua dark:text-darktheme-aqua" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-light-text dark:text-darktheme-text">
                      {activeCategory.title}
                    </h3>
                    <p className="font-mono text-xs text-light-muted dark:text-darktheme-muted">
                      {activeCategory.skills.length} core production competencies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeCategory.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-2xl bg-white/90 dark:bg-white/5 border border-black/[0.06] dark:border-white/10 font-mono text-xs font-semibold text-light-text dark:text-darktheme-text shadow-soft-sm hover:border-light-aqua dark:hover:border-darktheme-aqua transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
