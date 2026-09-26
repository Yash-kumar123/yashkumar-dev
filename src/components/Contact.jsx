import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check, Mail, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react'
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
    <section id="contact" className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 border-t border-white/[0.07] bg-surface arch-grid overflow-hidden">
      {/* Deep Atmospheric Backdrop Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan/15 via-violet/10 to-transparent rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-cyan tracking-[0.25em] uppercase mb-14">
          <span className="text-paper font-bold">04</span>
          <span className="w-8 h-[1px] bg-cyan/50" />
          <span>FINAL SCENE // GET IN TOUCH</span>
        </div>

        {/* Massive Editorial Headline & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Final Scene Typography & Fast Links (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-paper uppercase leading-[0.92]">
                LET'S<br />
                BUILD<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper via-white to-cyan">
                  SOMETHING.
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-muted max-w-lg font-sans leading-relaxed">
                Currently open for full-time software engineering roles, high-impact internships, and selective contract opportunities.
              </p>
            </div>

            {/* Direct One-Click Copy & Quick Actions */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="cta"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-mono text-xs font-semibold tracking-wider bg-paper text-void hover:bg-cyan transition-all duration-300 shadow-[0_0_30px_rgba(245,243,238,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)]"
                >
                  <Mail size={14} />
                  <span>{profile.email}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full font-mono text-xs text-muted bg-white/[0.04] border border-white/[0.1] hover:text-paper hover:border-cyan/40 transition-all"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={14} className="text-cyan" /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-6 pt-3 font-mono text-xs text-muted">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub ↗</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn ↗</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-1.5 hover:text-cyan transition-colors"
                >
                  <Phone size={14} />
                  <span>{profile.phone}</span>
                </a>
              </div>
            </div>

            {/* Live Availability Status Badge */}
            <div className="p-4 rounded-2xl liquid-glass border-white/[0.08] flex items-center gap-3.5 max-w-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan" />
              </span>
              <div className="font-mono text-xs">
                <span className="text-paper font-semibold block">SYSTEM STATUS: AVAILABLE</span>
                <span className="text-muted text-[11px]">Ready to deploy production systems immediately.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mail Composer (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl border-white/[0.08]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 font-mono text-xs">
                <span className="text-paper font-semibold flex items-center gap-2">
                  <Send size={13} className="text-cyan" />
                  <span>DIRECT DISPATCH</span>
                </span>
                <span className="text-muted text-[10px]">CLIENT-SIDE MAILTO</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/[0.08] text-paper focus:outline-none focus:border-cyan/50 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/[0.08] text-paper focus:outline-none focus:border-cyan/50 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-1.5">
                    PROJECT SCOPE OR INQUIRY
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="We have an engineering opportunity or project we'd like you to architect..."
                    className="w-full px-4 py-3 rounded-xl bg-void/80 border border-white/[0.08] text-paper focus:outline-none focus:border-cyan/50 transition-colors font-sans resize-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="cta"
                  className="w-full py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.12] hover:border-cyan/50 hover:bg-cyan hover:text-void font-mono font-semibold text-xs text-paper transition-all duration-300 flex items-center justify-center gap-2"
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
