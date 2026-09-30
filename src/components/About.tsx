import { CheckCircle2 } from 'lucide-react'
import { about, brand } from '../data/content'
import { Reveal } from './Reveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media" y={50}>
          <div className="about__frame">
            <img src={about.image} alt="مجتمع کشتارگاهی صنعتی دام روستائی" loading="lazy" />
          </div>
          <div className="about__badge">
            <img src={brand.logo} alt="" width={70} height={58} />
            <span>
              <b>داودآباد اراک</b>
              استان مرکزی
            </span>
          </div>
        </Reveal>

        <Reveal className="about__body" delay={0.15}>
          <span className="eyebrow">{about.title}</span>
          <h2 className="section-title">{about.heading}</h2>
          <p className="about__text">{about.text}</p>
          <ul className="about__points">
            {about.points.map((p) => (
              <li key={p}>
                <CheckCircle2 size={20} />
                {p}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary">
            تماس با ما
          </a>
        </Reveal>
      </div>
    </section>
  )
}
