import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'

const infoItems = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: profile.location, href: null },
]

const socialItems = [
  { icon: Github, label: 'GitHub', href: `https://${profile.github}` },
  { icon: Linkedin, label: 'LinkedIn', href: `https://${profile.linkedin}` },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `From: ${form.name} (${form.email})%0D%0A%0D%0A${encodeURIComponent(form.message)}`
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-amber font-mono text-xs tracking-widest uppercase">Contact</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-2 mb-6">Let's connect</h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Open to Web/Backend Developer internships and full-time roles. Reach out directly or send a
            message and it'll open in your email client.
          </p>

          <div className="space-y-3">
            {infoItems.map((item) => {
              const content = (
                <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3">
                  <item.icon size={17} className="text-amber shrink-0" />
                  <span className="text-sm text-text/90">{item.label}</span>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          <div className="flex gap-3 mt-6">
            {socialItems.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-amber hover:border-amber/40 transition-colors"
                aria-label={s.label}
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-line bg-card p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted mb-1.5 block">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface border border-line px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-amber/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-surface border border-line px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-amber/50"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted mb-1.5 block">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg bg-surface border border-line px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-amber/50"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="text-xs text-muted mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-surface border border-line px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-amber/50 resize-none"
              placeholder="Tell me a bit about the opportunity or project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-bg font-semibold text-sm hover:bg-amber/90 transition-colors"
          >
            Send Message <Send size={15} />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
