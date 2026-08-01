import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolioData'

const colorClasses = {
  amber: 'border-amber/30 bg-amber/10 text-amber',
  violet: 'border-violet/30 bg-violet/10 text-violet',
  teal: 'border-teal/30 bg-teal/10 text-teal',
  rose: 'border-rose/30 bg-rose/10 text-rose',
}

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const categoryNames = ['All', ...skillCategories.map((c) => c.name)]

  const visible = useMemo(
    () => (filter === 'All' ? skillCategories : skillCategories.filter((c) => c.name === filter)),
    [filter]
  )

  return (
    <section id="skills" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber font-mono text-xs tracking-widest uppercase">Skills</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2">What I work with</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === name
                  ? 'bg-amber text-bg border-amber font-semibold'
                  : 'border-line text-muted hover:text-text'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: ci * 0.05 }}
              className="rounded-2xl border border-line bg-card p-5"
            >
              <div className="text-sm font-semibold text-text mb-3">{cat.name}</div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={`text-xs px-2.5 py-1 rounded-full border ${colorClasses[cat.color]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
