import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `From: ${form.name} (${form.email})%0D%0A%0D%0A${encodeURIComponent(form.message)}`
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-void border-t border-white/5 font-poppins">
      {/* Bottom Subtle Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(252,107,47,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-ember text-xs font-semibold tracking-[0.25em] uppercase block mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            Let's Create Something Extraordinary
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-ash max-w-xl mx-auto leading-relaxed font-normal">
            Have a project or opportunity in mind? I'd love to hear about it. Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Contact Details Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center text-ember mt-0.5 shrink-0">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-ash uppercase tracking-wider mb-1 font-semibold">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-white hover:text-ember transition-colors font-medium"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center text-ember mt-0.5 shrink-0">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-ash uppercase tracking-wider mb-1 font-semibold">Location</p>
                    <p className="text-sm text-white font-medium">{profile.location}</p>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="absolute inset-1 rounded-full border border-emerald-400/50 animate-ping" />
                  </span>
                  <div>
                    <p className="text-xs text-ash uppercase tracking-wider mb-1 font-semibold">Availability</p>
                    <p className="text-sm text-green-400 font-medium">Open for roles &amp; internships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 pt-6 border-t border-white/5">
              <p className="text-xs text-ash uppercase tracking-wider mb-4 font-semibold">Socials</p>
              <div className="flex gap-3">
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-ember/40 hover:bg-white/10 transition-all group text-ash hover:text-white"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-ember/40 hover:bg-white/10 transition-all group text-ash hover:text-white"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form Glass Card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <div>
              <label htmlFor="contact-name" className="text-xs text-ash uppercase tracking-wider block mb-2 font-semibold">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-ember/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-xs text-ash uppercase tracking-wider block mb-2 font-semibold">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-ember/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs text-ash uppercase tracking-wider block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-ember/50 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide bg-ember text-white hover:bg-ember-bright shadow-[0_0_25px_rgba(252,107,47,0.4)] transition-all duration-300 group"
            >
              <span>Send Message</span>
              <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>

        {/* Footer line */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-ash font-poppins gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. Crafted with passion &amp; engineering precision.</p>
          <p className="font-mono text-ember text-[11px]">{profile.badge}</p>
        </div>
      </div>
    </section>
  )
}
