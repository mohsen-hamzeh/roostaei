import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import { gallery } from '../data/content'

export default function GalleryLightbox({ index, onClose }: { index: number; onClose: () => void }) {
  return (
    <Lightbox
      open={index >= 0}
      index={index}
      close={onClose}
      slides={gallery.map((g) => ({ src: g.src, alt: g.alt, description: g.alt }))}
      plugins={[Zoom, Counter, Captions]}
      styles={{ container: { backgroundColor: 'rgba(14, 4, 9, 0.94)' } }}
      animation={{ swipe: 400 }}
    />
  )
}
