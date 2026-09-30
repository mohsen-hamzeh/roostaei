import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { stats } from '../data/content'
import './Stats.css'

const fa = new Intl.NumberFormat('fa-IR')

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="stat__value">
      {fa.format(value)}
      {suffix && <sup>{suffix}</sup>}
    </span>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="آمار">
      <div className="stats__glow" aria-hidden="true" />
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <Counter to={s.value} suffix={s.suffix} />
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
