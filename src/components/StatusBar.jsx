import { useEffect, useState } from 'react'
import { Clock, MapPin, Cpu } from 'lucide-react'

export default function StatusBar() {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setTimeStr(formatted)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-white/70 dark:bg-darktheme-surface/70 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] py-2 px-6 sm:px-10 lg:px-16 font-mono text-[11px] text-light-muted dark:text-darktheme-muted flex flex-wrap items-center justify-between gap-4 select-none z-30 relative transition-colors duration-700">
      {/* Left: Location & Live Clock */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-light-text dark:text-darktheme-text font-medium">
          <MapPin size={12} className="text-light-sky dark:text-darktheme-sky" />
          <span>Ghaziabad, IN (28.6692° N, 77.4538° E)</span>
        </div>

        <span className="text-black/15 dark:text-white/15 hidden sm:inline">•</span>

        <div className="flex items-center gap-1.5 text-light-sky dark:text-darktheme-sky font-semibold">
          <Clock size={12} />
          <span className="tabular-nums">{timeStr || '06:00:00 PM'} IST</span>
          <span className="text-[10px] text-light-muted dark:text-darktheme-muted font-normal">(UTC+5:30)</span>
        </div>
      </div>

      {/* Center: Live Status Indicator */}
      <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-light-mint/20 dark:bg-darktheme-mint/15 border border-light-mint/40 dark:border-darktheme-mint/30 text-light-text dark:text-darktheme-text">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-mint dark:bg-darktheme-mint opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-light-mint dark:bg-darktheme-mint" />
        </span>
        <span className="font-semibold tracking-wide uppercase text-[10px]">
          OPEN FOR OPPORTUNITIES
        </span>
      </div>

      {/* Right: Active Engineering Architecture */}
      <div className="hidden xl:flex items-center gap-2 text-light-muted dark:text-darktheme-muted">
        <Cpu size={12} className="text-light-sky dark:text-darktheme-sky" />
        <span>Focus: <strong className="text-light-text dark:text-darktheme-text font-semibold">CRDT Multiplayer · Multi-Agent RAG · FastAPI</strong></span>
      </div>
    </div>
  )
}
