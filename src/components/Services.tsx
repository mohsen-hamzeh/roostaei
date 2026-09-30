import { motion } from 'framer-motion'
import { ArrowUpLeft, Cog, Factory, Fence, Snowflake, Stethoscope, Warehouse, type LucideIcon } from 'lucide-react'
import { services, slides, type ServiceIcon } from '../data/content'
import { SectionHead } from './Reveal'
import './Services.css'

const icons: Record<ServiceIcon, LucideIcon> = {
  factory: Factory,
  warehouse: Warehouse,
  snowflake: Snowflake,
  cog: Cog,
  fence: Fence,
  stethoscope: Stethoscope,
}

const fa = (n: number) => new Intl.NumberFormat('fa-IR', { minimumIntegerDigits: 2 }).format(n)

export function Services() {
  const [feature, ...rest] = services
  const small = rest.slice(0, 4)
  const wide = rest[4]
  const FeatureIcon = icons[feature.icon]
  const WideIcon = icons[wide.icon]

  const cardAnim = (i: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="services" className="section section--alt services">
      <div className="container">
        <SectionHead
          eyebrow="خدمات ما"
          title={
            <>
              زیرساختی <em>صنعتی و مدرن</em>
            </>
          }
          sub="بهترین مواد اولیه و دام ایرانی مرغوب، برای بالاترین کیفیت خدمات."
        />

        <div className="bento">
          <motion.article className="bento__feature" {...cardAnim(0)}>
            <img src={slides[0].image} alt="" loading="lazy" />
            <div className="bento__feature-body">
              <span className="svc__icon svc__icon--light">
                <FeatureIcon size={26} />
              </span>
              <div className="bento__big">
                <b>{new Intl.NumberFormat('fa-IR').format(1200)}+</b>
                <span>کشتار در روز</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </motion.article>

          {small.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <motion.article key={s.title} className="svc" {...cardAnim(i + 1)}>
                <span className="svc__num">{fa(i + 2)}</span>
                <span className="svc__icon">
                  <Icon size={24} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.article>
            )
          })}

          <motion.article className="svc svc--wide" {...cardAnim(5)}>
            <span className="svc__num">{fa(6)}</span>
            <span className="svc__icon">
              <WideIcon size={24} />
            </span>
            <div>
              <h3>{wide.title}</h3>
              <p>{wide.text}</p>
            </div>
          </motion.article>

          <motion.a href="#contact" className="bento__cta" {...cardAnim(6)}>
            <div>
              <h3>همکاری با ما</h3>
              <p>برای کشتار دام و تأمین گوشت با ما در ارتباط باشید.</p>
            </div>
            <span className="bento__cta-arrow">
              <ArrowUpLeft size={24} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
