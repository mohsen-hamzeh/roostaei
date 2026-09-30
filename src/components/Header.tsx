import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { brand, nav } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'
import './Header.css'

const ids = nav.map((n) => n.id)

export function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const themeLabel = theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__brand" aria-label={brand.name}>
          <img src={brand.logo} alt="" width={52} height={43} />
          <span>
            <strong>{brand.name}</strong>
            <small>{brand.nameEn}</small>
          </span>
        </a>

        <nav className="header__nav" aria-label="منوی اصلی">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''}>
              {n.label}
              {active === n.id && <motion.i layoutId="nav-dot" className="header__dot" />}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href="#contact" className="btn btn--primary header__cta">
            تماس با ما
          </a>
          <button className="icon-btn header__burger" onClick={() => setOpen(true)} aria-label="باز کردن منو">
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-backdrop"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="منو"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            >
              <div className="drawer__top">
                <img src={brand.logo} alt={brand.name} width={64} height={53} />
                <button className="icon-btn" onClick={() => setOpen(false)} aria-label="بستن منو">
                  <X size={22} />
                </button>
              </div>
              <nav>
                {nav.map((n, i) => (
                  <motion.a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={active === n.id ? 'is-active' : ''}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    {n.label}
                  </motion.a>
                ))}
              </nav>
              <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
                تماس با ما
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
