import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectCreative, Keyboard, A11y } from 'swiper/modules'
import { ChevronLeft, ChevronRight, ChevronsDown } from 'lucide-react'
import { slides } from '../data/content'
import 'swiper/css'
import 'swiper/css/effect-creative'
import './Hero.css'

const DELAY = 6500
const pad = (n: number) => String(n).padStart(2, '0')

const textVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}
const line = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const slide = slides[index]

  return (
    <section id="home" className="hero" aria-roledescription="carousel" aria-label="اسلایدشو">
      <Swiper
        className="hero__swiper"
        modules={[Autoplay, EffectCreative, Keyboard, A11y]}
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: ['-25%', 0, -1], scale: 1.05 },
          next: { translate: ['100%', 0, 0] },
        }}
        speed={1300}
        loop
        grabCursor
        keyboard={{ enabled: true }}
        autoplay={{ delay: DELAY, disableOnInteraction: false, pauseOnMouseEnter: false }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setIndex(s.realIndex)}
        onAutoplayTimeLeft={(_, __, p) => setProgress(1 - p)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.title}>
            <div className="hero__media">
              <img src={s.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__shape" aria-hidden="true" />

      <div className="container hero__content">
        <AnimatePresence mode="wait">
          <motion.div key={index} variants={textVariants} initial="hidden" animate="show" exit="exit">
            <motion.span variants={line} className="hero__kicker">
              {slide.kicker}
            </motion.span>
            <motion.h1 variants={line} className="hero__title">
              {slide.title}
            </motion.h1>
            <motion.p variants={line} className="hero__text">
              {slide.text}
            </motion.p>
            <motion.div variants={line} className="hero__cta">
              <a href="#meats" className="btn btn--primary">
                انواع گوشت
              </a>
              <a href="#contact" className="btn btn--ghost">
                تماس با ما
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container hero__bar">
        <div className="hero__tabs" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.title}
              role="tab"
              aria-selected={i === index}
              className={`hero__tab ${i === index ? 'is-active' : ''}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
            >
              <span className="hero__tab-num">{pad(i + 1)}</span>
              <span className="hero__tab-label">{s.kicker}</span>
              <span className="hero__tab-track">
                <span
                  className="hero__tab-fill"
                  style={{ transform: `scaleX(${i === index ? progress : i < index ? 1 : 0})` }}
                />
              </span>
            </button>
          ))}
        </div>

        <div className="hero__nav">
          <span className="hero__count">
            <b>{pad(index + 1)}</b> / {pad(slides.length)}
          </span>
          <button className="hero__arrow" onClick={() => swiperRef.current?.slidePrev()} aria-label="اسلاید قبلی">
            <ChevronRight size={22} />
          </button>
          <button className="hero__arrow" onClick={() => swiperRef.current?.slideNext()} aria-label="اسلاید بعدی">
            <ChevronLeft size={22} />
          </button>
        </div>
      </div>

      <a href="#meats" className="hero__scroll" aria-label="ادامه">
        <ChevronsDown size={20} />
      </a>
    </section>
  )
}
