import { motion } from 'framer-motion'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { news } from '../data/content'
import { SectionHead } from './Reveal'
import './News.css'

export function News() {
  const [lead, ...rest] = news

  return (
    <section id="news" className="section">
      <div className="container">
        <SectionHead
          eyebrow="اخبار و مقالات"
          title={
            <>
              تازه‌ترین <em>رویدادها</em>
            </>
          }
        />

        <div className="news">
          <motion.a
            href={lead.href}
            target="_blank"
            rel="noopener"
            className="news__lead"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={lead.image} alt="" loading="lazy" />
            <div className="news__lead-body">
              <div className="news__meta">
                <span className="news__tag">{lead.tag}</span>
                <span className="news__date">
                  <CalendarDays size={15} /> {lead.date}
                </span>
              </div>
              <h3>{lead.title}</h3>
              <p>{lead.excerpt}</p>
              <span className="news__more">
                ادامه مطلب <ArrowLeft size={18} />
              </span>
            </div>
          </motion.a>

          <div className="news__list">
            {rest.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener"
                className="news__item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="news__thumb">
                  <img src={n.image} alt="" loading="lazy" />
                </div>
                <div className="news__item-body">
                  <div className="news__meta">
                    <span className="news__tag">{n.tag}</span>
                    <span className="news__date">
                      <CalendarDays size={14} /> {n.date}
                    </span>
                  </div>
                  <h3>{n.title}</h3>
                </div>
                <ArrowLeft className="news__arrow" size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
