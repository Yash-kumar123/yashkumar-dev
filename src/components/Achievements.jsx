import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, ExternalLink, X } from 'lucide-react'
import { achievements, certificates } from '../data/portfolioData'

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="achievements" className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-700">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-light-sky dark:text-darktheme-sky tracking-[0.25em] uppercase mb-3 transition-colors duration-700">
              <span className="text-light-text dark:text-darktheme-text font-bold">05 / TIMELINE</span>
              <span className="w-8 h-[2px] bg-light-sky/60 dark:bg-darktheme-sky/60" />
              <span>RECOGNITION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-light-text dark:text-darktheme-text uppercase transition-colors duration-700">
              ACHIEVEMENTS<br />&amp; HONORS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-light-muted dark:text-darktheme-muted max-w-sm font-sans leading-relaxed transition-colors duration-700">
            National hackathon milestones, verified credentials, and competitive engineering benchmarks.
          </p>
        </div>

        {/* Featured Certificate Card Spotlight */}
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="mb-14 p-8 sm:p-10 rounded-4xl glass-panel-interactive card-revolve card-float relative overflow-hidden shadow-soft-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-light-sky dark:text-darktheme-sky font-mono text-xs tracking-wider font-semibold">
                  <ShieldCheck size={16} />
                  <span>VERIFIED NATIONAL CREDENTIAL · {cert.date}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-light-text dark:text-darktheme-text">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-light-muted dark:text-darktheme-muted">
                  Organizer: <span className="text-light-text dark:text-darktheme-text font-semibold">{cert.issuer}</span>
                </p>
                <p className="text-sm text-light-muted dark:text-darktheme-muted leading-relaxed pt-1 max-w-2xl font-sans">
                  {cert.description}
                </p>
                <div className="text-xs font-mono text-light-sky dark:text-darktheme-sky font-semibold pt-1">
                  {cert.stats}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-semibold tracking-wider bg-dark text-white hover:bg-light-sky dark:bg-darktheme-aqua dark:text-black dark:hover:bg-darktheme-sky transition-all shadow-soft-sm hover:shadow-soft-md"
              >
                <ExternalLink size={13} />
                <span>VIEW CERTIFICATE</span>
              </button>
            </div>
          </div>
        ))}

        {/* Vertical Engineering Timeline */}
        <div className="relative border-l border-black/[0.1] dark:border-white/10 pl-6 sm:pl-10 space-y-12 my-8 font-mono">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-darktheme-bg border-2 border-light-sky dark:border-darktheme-sky group-hover:scale-125 transition-transform shadow-sm" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-mono text-lg font-bold text-light-sky dark:text-darktheme-sky tracking-widest">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full font-mono text-[10px] bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-muted dark:text-darktheme-muted font-bold">
                    {item.badge}
                  </span>
                  <span className="text-light-muted dark:text-darktheme-muted">
                    {item.org}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-light-text dark:text-darktheme-text group-hover:text-light-sky dark:group-hover:text-darktheme-sky transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-light-muted dark:text-darktheme-muted font-sans leading-relaxed max-w-3xl">
                  {item.detail}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full font-mono text-[11px] bg-white/90 dark:bg-white/5 border border-black/[0.06] dark:border-white/10 text-light-muted dark:text-darktheme-muted shadow-soft-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <AnimatePresence>
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl">
            <div
              className="fixed inset-0"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative z-10 w-full max-w-3xl bg-white dark:bg-darktheme-surface border border-black/[0.08] dark:border-white/15 rounded-4xl p-6 sm:p-8 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/10 pb-4 mb-6">
                <div>
                  <h4 className="font-display font-bold text-xl text-light-text dark:text-darktheme-text">{selectedCert.title}</h4>
                  <span className="font-mono text-xs text-light-sky dark:text-darktheme-sky font-semibold">{selectedCert.issuer}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-muted dark:text-darktheme-muted hover:text-light-text dark:hover:text-darktheme-text"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black/[0.02] dark:bg-black/20 border border-black/[0.06] dark:border-white/10 mb-4 aspect-[4/3] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              <div className="text-center font-mono text-xs text-light-muted dark:text-darktheme-muted">
                {selectedCert.stats}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </section>
  )
}
