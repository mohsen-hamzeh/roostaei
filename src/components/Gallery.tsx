import { lazy, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { gallery } from '../data/content'
import { SectionHead } from './Reveal'
import './Gallery.css'

const GalleryLightbox = lazy(() => import('./GalleryLightbox'))

export function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section id="gallery" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="گالری تصاویر"
          title={
            <>
              لحظه‌هایی از <em>مجتمع</em>
            </>
          }
        />

        <div className="gallery">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              className={`gallery__item gallery__item--${i + 1}`}
              onClick={() => setIndex(i)}
              aria-label={`نمایش تصویر: ${g.alt}`}
              initial={{ opacity: 0, scale: 0.92, clipPath: 'inset(12% 12% 12% 12% round 20px)' }}
              whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <span className="gallery__overlay">
                <Maximize2 size={22} />
                <span>{g.alt}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {index >= 0 && (
        <Suspense fallback={null}>
          <GalleryLightbox index={index} onClose={() => setIndex(-1)} />
        </Suspense>
      )}
    </section>
  )
}
