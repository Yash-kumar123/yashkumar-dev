import { useEffect, useState } from 'react'
import { Clock, MapPin, Radio, Terminal, Cpu } from 'lucide-react'

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
    <div className="w-full bg-void/90 backdrop-blur-md border-b border-white/[0.06] py-2 px-6 sm:px-10 lg:px-16 font-mono text-[11px] text-muted flex flex-wrap items-center justify-between gap-4 select-none z-30 relative">
      {/* Left: Location & Live Clock */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-primary font-medium">
          <MapPin size={12} className="text-cyan" />
          <span>Ghaziabad, IN (28.6692° N, 77.4538° E)</span>
        </div>

        <span className="text-white/20 hidden sm:inline">•</span>

        <div className="flex items-center gap-1.5 text-cyan">
          <Clock size={12} />
          <span className="tabular-nums font-semibold">{timeStr || '05:45:00 PM'} IST</span>
          <span className="text-[10px] text-muted">(UTC+5:30)</span>
        </div>
      </div>

      {/* Center: Live Status Indicator */}
      <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan/[0.08] border border-cyan/30 text-cyan">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
        </span>
        <span className="font-semibold tracking-wide uppercase text-[10px]">
          OPEN FOR OPPORTUNITIES
        </span>
      </div>

      {/* Right: Active Engineering Architecture */}
      <div className="hidden xl:flex items-center gap-2 text-secondary">
        <Cpu size={12} className="text-cyan" />
        <span>Focus: <strong className="text-primary font-normal">CRDT Multiplayer · Multi-Agent RAG · FastAPI</strong></span>
      </div>
    </div>
  )
}
