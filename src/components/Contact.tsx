import { motion } from 'framer-motion'
import { Mail, MapPin, PlayCircle } from 'lucide-react'
import { Instagram } from './InstagramIcon'
import { contact } from '../data/content'
import { SectionHead } from './Reveal'
import './Contact.css'

type Card = { icon: React.ComponentType<{ size?: number }>; title: string; value: string; href: string; ltr?: boolean }

const cards: Card[] = [
  { icon: MapPin, title: 'آدرس', value: contact.address, href: contact.mapUrl },
  { icon: Mail, title: 'ایمیل', value: contact.email, href: `mailto:${contact.email}`, ltr: true },
  { icon: Instagram, title: 'اینستاگرام', value: contact.instagram, href: contact.instagramUrl, ltr: true },
  { icon: PlayCircle, title: 'آپارات', value: 'Koshtargahroostaiy', href: contact.aparatUrl, ltr: true },
]

export function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="container">
        <SectionHead
          eyebrow="تماس با ما"
          title={
            <>
              {contact.heading.replace('صدای گرم شما هستیم', '')}
              <em>صدای گرم شما</em> هستیم
            </>
          }
          sub={contact.sub}
        />

        <div className="contact__grid">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
              className={`contact__card ${i === 0 ? 'contact__card--wide' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="contact__icon">
                <c.icon size={24} />
              </span>
              <span className="contact__title">{c.title}</span>
              <span className="contact__value" dir={c.ltr ? 'ltr' : undefined}>
                {c.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
