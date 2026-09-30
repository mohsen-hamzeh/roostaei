import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { video } from '../data/content'
import { Reveal } from './Reveal'
import './VideoSection.css'

export function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section video" aria-labelledby="video-title">
      <div className="video__bg" aria-hidden="true">
        <img src={video.poster} alt="" loading="lazy" />
      </div>
      <div className="container video__grid">
        <Reveal className="video__text">
          <span className="eyebrow">چندرسانه‌ای</span>
          <h2 id="video-title" className="section-title">
            {video.title}
          </h2>
          <p>{video.text}</p>
          <a href={video.channel} target="_blank" rel="noopener" className="btn btn--ghost">
            کانال آپارات
          </a>
        </Reveal>

        <Reveal className="video__player" delay={0.15}>
          <AnimatePresence mode="wait">
            {playing ? (
              <motion.iframe
                key="frame"
                src={`${video.embed}&autoplay=true`}
                title={video.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            ) : (
              <motion.button
                key="poster"
                className="video__poster"
                onClick={() => setPlaying(true)}
                aria-label="پخش ویدیو"
                exit={{ opacity: 0 }}
              >
                <img src={video.poster} alt="" loading="lazy" />
                <span className="video__play">
                  <Play size={30} fill="currentColor" />
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
