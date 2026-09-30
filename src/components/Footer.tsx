import { ArrowUp, Mail, PlayCircle } from 'lucide-react'
import { Instagram } from './InstagramIcon'
import { brand, contact, links, nav } from '../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={brand.logo} alt={brand.name} width={96} height={79} loading="lazy" />
          <p>
            {brand.name}؛ {brand.tagline}.
          </p>
          <div className="footer__social">
            <a href={contact.instagramUrl} target="_blank" rel="noopener" aria-label="اینستاگرام">
              <Instagram size={18} />
            </a>
            <a href={contact.aparatUrl} target="_blank" rel="noopener" aria-label="آپارات">
              <PlayCircle size={18} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="ایمیل">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="دسترسی سریع">
          <h4>دسترسی سریع</h4>
          <ul>
            {nav.slice(1).map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="لینک‌های مفید">
          <h4>لینک‌های مفید</h4>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© کلیه حقوق برای {brand.name} محفوظ است.</span>
          <a className="footer__credit" href="https://jiyar24.com" target="_blank" rel="noopener" dir="ltr">
            Powered by <b>Jiyar</b>
          </a>
          <a href="#home" className="footer__top" aria-label="بازگشت به بالا">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
