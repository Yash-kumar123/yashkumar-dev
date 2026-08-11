import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, GraduationCap, Trophy, Sparkles, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react'
import { achievements, certificates, education } from '../data/portfolioData'

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="journey" className="relative py-32 md:py-48 bg-void border-t border-white/5 font-poppins">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none blur-[150px]"
        style={{ backgroundColor: 'rgba(252,107,47,0.12)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">Experience &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Where I've Been
          </h2>
          <p className="mt-4 text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal">
            My journey through engineering education, hackathons, and certified achievements.
          </p>
        </div>

        {/* Featured Certificate Spotlight Badge */}
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 p-6 sm:p-8 rounded-3xl border border-cyan/40 bg-cyan/5 relative overflow-hidden group shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-cyan shrink-0" />
                  <span className="text-xs font-mono font-bold text-cyan uppercase tracking-widest">
                    VERIFIED CERTIFICATE · {cert.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-ash">
                  Organized by <span className="text-white font-semibold">{cert.issuer}</span>
                </p>

                <p className="text-sm text-silver leading-relaxed pt-1">
                  {cert.description}
                </p>

                <div className="text-xs font-mono text-cyan pt-1">
                  {cert.stats}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan text-black font-mono text-xs font-semibold tracking-wider hover:bg-cyan-bright transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <ExternalLink size={14} />
                <span>VIEW CERTIFICATE</span>
              </button>
            </div>
          </motion.div>
        ))}

        {/* Experience & Achievements List */}
        <div className="space-y-12">
          {/* Education Milestone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-colors duration-300"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <span className="text-xs font-mono font-medium text-ash tracking-wider block mb-1">
                {education.years}
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember">
                EDUCATION
              </span>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-cloud transition-colors">
                {education.school}
              </h3>
              <p className="text-sm font-mono text-ash mb-4">{education.degree}</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">Core coursework in Data Structures, Machine Learning, DBMS, and Web Architecture</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">Built real-world applications in React, Node.js, FastAPI, and Applied AI</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SIH 2025 National Finalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-colors duration-300"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <span className="text-xs font-mono font-medium text-ash tracking-wider block mb-1">2025</span>
              <span className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember">
                NATIONAL FINALIST
              </span>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-cloud transition-colors">
                {achievements[0].title}
              </h3>
              <p className="text-sm font-mono text-ash mb-4">Smart India Hackathon 2025</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">{achievements[0].detail}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">Engineered scalable software solutions under intense hackathon timelines and live evaluation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Hacknovate 7.0 & Hacknoccino 4.0 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-colors duration-300"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <span className="text-xs font-mono font-medium text-ash tracking-wider block mb-1">2024 – 2025</span>
              <span className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember">
                HACKATHONS
              </span>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-cloud transition-colors">
                Hacknovate 7.0 &amp; Hacknoccino 4.0
              </h3>
              <p className="text-sm font-mono text-ash mb-4">Competitive Prototyping</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">{achievements[1].detail}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-silver font-normal">
                  <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                  <span className="leading-relaxed">{achievements[2].detail}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian border border-cyan/30 p-6 sm:p-8 rounded-3xl max-w-2xl w-full text-left space-y-6 relative shadow-[0_0_50px_rgba(0,240,255,0.3)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-ash hover:text-white hover:border-cyan/40 transition-all z-10"
              >
                <X size={18} />
              </button>

              <div className="space-y-2 pr-8">
                <span className="text-xs font-mono text-cyan uppercase tracking-widest block font-bold">
                  OFFICIAL CERTIFICATE OF PARTICIPATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-ash">
                  Date: {selectedCert.date} · Issued by {selectedCert.issuer}
                </p>
              </div>

              <div className="space-y-4">
                {selectedCert.image && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain max-h-[420px]"
                    />
                  </div>
                )}

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-poppins text-sm text-silver">
                  <p>
                    This certificate is proudly presented to <strong className="text-white">Yash Kumar</strong> in recognition of being among the select students who competed in <strong className="text-cyan">QuizOff 2026: India's Biggest AI Quiz</strong>, organized by <strong className="text-white">CampusCrew</strong> and hosted on <strong className="text-white">Unstop</strong>.
                  </p>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap justify-between text-xs font-mono text-ash gap-2">
                    <span>Participants: {selectedCert.stats}</span>
                    <span>Founder: {selectedCert.founder}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-full bg-cyan text-black font-mono text-xs font-semibold hover:bg-cyan-bright transition-all"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
