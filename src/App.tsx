import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MeatTypes } from './components/MeatTypes'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { News } from './components/News'
import { VideoSection } from './components/VideoSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <MeatTypes />
        <Stats />
        <Services />
        <About />
        <Gallery />
        <News />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
