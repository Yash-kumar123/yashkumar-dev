import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'

export default function Footer() {
  const handleScrollTop = () => {
    scrollToTarget('#hero', 0)
  }

  return (
    <footer className="border-t border-white/[0.08] bg-void py-12 px-6 sm:px-10 lg:px-16 font-mono text-xs text-muted">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-8 h-8 rounded-lg bg-surface border border-white/[0.08] flex items-center justify-center font-display font-bold text-xs text-cyan">
            YK
          </div>
          <div>
            <div className="text-paper font-semibold tracking-wider">
              {profile.name.toUpperCase()}
            </div>
            <div className="text-[10px] text-muted">
              FULL STACK / APPLIED AI · © {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] text-paper">
          <span>SYSTEM ONLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
        </div>

        {/* Links & Back To Top */}
        <div className="flex items-center gap-6 text-[11px]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-paper transition-colors"
          >
            Email
          </a>

          <button
            onClick={handleScrollTop}
            className="p-2 rounded-full border border-white/[0.1] hover:border-cyan/50 hover:text-cyan transition-all"
            aria-label="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
