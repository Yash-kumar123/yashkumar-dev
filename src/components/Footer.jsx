import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { scrollToTarget } from '../utils/smoothScroll'

export default function Footer() {
  const handleScrollTop = () => {
    scrollToTarget('#hero', 0)
  }

  return (
    <footer className="border-t border-black/[0.06] bg-cream py-14 px-6 sm:px-10 lg:px-16 font-mono text-xs text-dark-muted">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center font-display font-bold text-xs">
            YK
          </div>
          <div>
            <div className="text-dark font-bold tracking-wider">
              {profile.name.toUpperCase()}
            </div>
            <div className="text-[10px] text-dark-muted">
              FULL STACK / APPLIED AI ENGINEER · © {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[10px] text-dark font-semibold shadow-soft-sm">
          <span>SYSTEM ONLINE</span>
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
        </div>

        {/* Links & Back To Top */}
        <div className="flex items-center gap-6 text-[11px]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-dark transition-colors font-medium"
          >
            Email
          </a>

          <button
            onClick={handleScrollTop}
            className="p-2 rounded-full border border-black/[0.1] hover:border-dark hover:text-dark bg-white transition-all shadow-soft-sm"
            aria-label="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
