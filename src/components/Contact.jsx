import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check, Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Engineering Inquiry from ${form.name || 'Collaborator'}`)
    const body = encodeURIComponent(
      `Hi Yash,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 border-t border-black/[0.06] dark:border-white/[0.08] theme-grid overflow-hidden transition-colors duration-700">
      {/* Background Luminous Gradient Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-light-peach/25 dark:from-darktheme-peach/15 via-light-lavender/15 dark:via-darktheme-lavender/10 to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-light-sky dark:text-darktheme-sky tracking-[0.25em] uppercase mb-14 transition-colors duration-700">
          <span className="text-light-text dark:text-darktheme-text font-bold">06 / GET IN TOUCH</span>
          <span className="w-8 h-[2px] bg-light-sky/60 dark:bg-darktheme-sky/60" />
          <span>START A PROJECT</span>
        </div>

        {/* Editorial Headline & Dispatch Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Editorial Typography & Direct Action */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tightest text-light-text dark:text-darktheme-text uppercase leading-[0.92] transition-colors duration-700">
                LET'S<br />
                BUILD<br />
                <span className="text-gradient-warm">
                  SOMETHING.
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-light-muted dark:text-darktheme-muted max-w-lg font-sans leading-relaxed transition-colors duration-700">
                Currently open for full-time software engineering roles, high-impact internships, and selective contract opportunities.
              </p>
            </div>

            {/* Direct One-Click Copy & Quick Actions */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider bg-dark text-white hover:bg-light-sky dark:bg-darktheme-aqua dark:text-black dark:hover:bg-darktheme-sky transition-all duration-300 shadow-soft-md hover:shadow-soft-lg"
                >
                  <Mail size={14} />
                  <span>{profile.email}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-mono text-xs text-light-text dark:text-darktheme-text bg-white/90 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 hover:border-black/[0.2] dark:hover:border-white/30 transition-all shadow-soft-sm"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={14} className="text-light-mint dark:text-darktheme-mint" /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-6 pt-3 font-mono text-xs text-light-muted dark:text-darktheme-muted">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
                >
                  <Github size={14} />
                  <span>GitHub ↗</span>
                </a>
                <span className="text-black/15 dark:text-white/15">•</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn ↗</span>
                </a>
                <span className="text-black/15 dark:text-white/15">•</span>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-1.5 hover:text-light-text dark:hover:text-darktheme-text transition-colors font-medium"
                >
                  <Phone size={14} />
                  <span>{profile.phone}</span>
                </a>
              </div>
            </div>

            {/* Live Availability Status Badge */}
            <div className="p-5 rounded-3xl glass-panel flex items-center gap-4 max-w-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-mint dark:bg-darktheme-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-light-mint dark:bg-darktheme-mint" />
              </span>
              <div className="font-mono text-xs">
                <span className="text-light-text dark:text-darktheme-text font-bold block">STATUS: AVAILABLE FOR 2026</span>
                <span className="text-light-muted dark:text-darktheme-muted text-[11px]">Ready to engineer production systems immediately.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-4xl glass-panel shadow-soft-lg">
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/10 pb-4 mb-6 font-mono text-xs">
                <span className="text-light-text dark:text-darktheme-text font-bold flex items-center gap-2">
                  <Send size={14} className="text-light-sky dark:text-darktheme-sky" />
                  <span>DIRECT DISPATCH</span>
                </span>
                <span className="text-light-muted dark:text-darktheme-muted text-[10px]">CLIENT-SIDE MAILTO</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-mono text-[10px] text-light-muted dark:text-darktheme-muted uppercase tracking-wider mb-2 font-bold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-text dark:text-darktheme-text placeholder:text-light-muted/50 dark:placeholder:text-darktheme-muted/50 focus:outline-none focus:border-light-sky dark:focus:border-darktheme-sky transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-light-muted dark:text-darktheme-muted uppercase tracking-wider mb-2 font-bold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-text dark:text-darktheme-text placeholder:text-light-muted/50 dark:placeholder:text-darktheme-muted/50 focus:outline-none focus:border-light-sky dark:focus:border-darktheme-sky transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-light-muted dark:text-darktheme-muted uppercase tracking-wider mb-2 font-bold">
                    PROJECT SCOPE OR INQUIRY
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="We have an engineering opportunity or project we'd like you to architect..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-light-text dark:text-darktheme-text placeholder:text-light-muted/50 dark:placeholder:text-darktheme-muted/50 focus:outline-none focus:border-light-sky dark:focus:border-darktheme-sky transition-colors font-sans resize-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-dark text-white hover:bg-light-sky dark:bg-darktheme-aqua dark:text-black dark:hover:bg-darktheme-sky font-mono font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-soft-sm hover:shadow-soft-md"
                >
                  <Send size={13} />
                  <span>TRANSMIT MESSAGE →</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
