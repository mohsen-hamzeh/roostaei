import { motion } from 'framer-motion'
import { meats } from '../data/content'
import { SectionHead } from './Reveal'
import './MeatTypes.css'

export function MeatTypes() {
  return (
    <section id="meats" className="section meats">
      <div className="container">
        <SectionHead
          eyebrow="محصولات ما"
          title={
            <>
              انواع <em>گوشت تازه</em>
            </>
          }
          sub="از بهترین نژادهای دام ایرانی، با کنترل کامل بهداشتی."
        />

        <div className="meats__grid">
          {meats.map((m, i) => (
            <motion.article
              key={m.name}
              className="meat"
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="meat__img">
                <img src={m.image} alt={m.name} loading="lazy" width={330} height={330} />
              </div>
              <div className="meat__body">
                <span className="meat__en">{m.en}</span>
                <h3>{m.name}</h3>
              </div>
              <span className="meat__num">{String(i + 1).padStart(2, '0')}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
