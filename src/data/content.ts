// All site copy and media paths live here, so content can be edited without touching components.

const img = (p: string) => `${import.meta.env.BASE_URL}images/${p}`

export const brand = {
  name: 'کشتارگاه صنعتی دام روستائی',
  nameEn: 'Rostaei Industrial Slaughterhouse',
  tagline: 'منبع گوشت تازه و سالم',
  logo: img('brand/logo.webp'),
}

export const nav = [
  { id: 'home', label: 'خانه' },
  { id: 'meats', label: 'انواع گوشت' },
  { id: 'services', label: 'خدمات ما' },
  { id: 'about', label: 'درباره ما' },
  { id: 'gallery', label: 'گالری' },
  { id: 'news', label: 'اخبار' },
  { id: 'contact', label: 'تماس با ما' },
]

export const slides = [
  {
    image: img('hero/slide-complex.jpg'),
    kicker: 'مجتمع کشتارگاهی داودآباد اراک',
    title: 'کشتارگاه صنعتی دام روستائی',
    text: 'کشتار دام سبک و سنگین، شتر و شترمرغ با بالاترین استانداردهای بهداشتی.',
  },
  {
    image: img('hero/slide-meat.webp'),
    kicker: 'حس خوب طراوت',
    title: 'منبع گوشت تازه و سالم',
    text: 'از بهترین نژادهای دام ایرانی، زیر نظر دامپزشکان متخصص.',
  },
  {
    image: img('hero/slide-shop.webp'),
    kicker: 'حس خوب همدلی',
    title: 'عرضه انواع گوشت تازه',
    text: 'بیش از ۱۲۰۰ کشتار روزانه؛ بزرگ‌ترین واحد تولید گوشت منطقه.',
  },
]

export const meats = [
  { name: 'گوشت گوسفندی', en: 'Mutton', image: img('meat/lamb.webp') },
  { name: 'گوشت گوساله', en: 'Veal', image: img('meat/veal.webp') },
  { name: 'گوشت شتر', en: 'Camel', image: img('meat/camel.webp') },
  { name: 'گوشت شترمرغ', en: 'Ostrich', image: img('meat/ostrich.webp') },
  { name: 'مرغ', en: 'Chicken', image: img('meat/chicken.webp') },
  { name: 'گوشت بلدرچین', en: 'Quail', image: img('meat/quail.webp') },
]

export const stats = [
  { value: 1000, suffix: '+', label: 'کشتار روزانه دام سبک' },
  { value: 100, suffix: '+', label: 'کشتار روزانه دام سنگین' },
  { value: 200, suffix: '+', label: 'نیروی انسانی' },
  { value: 15, suffix: '', label: 'نمایندگان فروش' },
]

export type ServiceIcon =
  | 'snowflake'
  | 'cog'
  | 'warehouse'
  | 'factory'
  | 'fence'
  | 'stethoscope'

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: 'factory',
    title: 'بزرگ‌ترین واحد تولید گوشت منطقه',
    text: 'بیش از ۱۲۰۰ کشتار در روز.',
  },
  {
    icon: 'warehouse',
    title: 'سالن‌های مجزای کشتار',
    text: 'ظرفیت روزانه ۱۰۰ گوساله و ۱۰۰۰ گوسفند در سالن‌های جداگانه.',
  },
  {
    icon: 'snowflake',
    title: 'سردخانه و پیش‌سردکن مجزا',
    text: 'زنجیره سرد جداگانه برای دام سبک و سنگین.',
  },
  {
    icon: 'cog',
    title: 'کشتار تمام‌مکانیزه',
    text: 'ماشین‌آلات پیشرفته و به‌روز در تمام مراحل کشتار.',
  },
  {
    icon: 'fence',
    title: 'میدان دام مجزا',
    text: 'کاهش استرس دام پس از حمل و پایش سلامت پیش از کشتار.',
  },
  {
    icon: 'stethoscope',
    title: 'دامپزشکان متخصص',
    text: 'نظارت مداوم از بدو ورود تا خروج دام.',
  },
]

export const about = {
  title: 'درباره ما',
  heading: 'سال‌ها تجربه در صنعت کشتار دام',
  text: 'کشتارگاه صنعتی دام روستائی، مجموعه‌ای پیشرو در کشتار دام سبک و سنگین، شتر و شترمرغ است. تمام مراحل با رعایت اصول بهداشتی و استانداردهای صنعتی، تحت نظارت کامل و با تجهیزات پیشرفته انجام می‌شود؛ و در کنار کیفیت گوشت، به اخلاق و احترام به حیوانات نیز پایبندیم.',
  points: [
    'بهداشت و نظارت مستمر دامپزشکی',
    'بهترین نژادهای دام ایرانی',
    'عرضه سریع محصولات تازه',
    'کشتار تمام‌مکانیزه',
  ],
  image: img('brand/pr-banner.webp'),
}

export const gallery = [
  { src: img('gallery/g1.webp'), alt: 'بازدید مسئولین از مجتمع' },
  { src: img('gallery/g2.webp'), alt: 'بازدید از روند پیشرفت پروژه' },
  { src: img('gallery/g3.webp'), alt: 'سالن‌های در حال ساخت' },
  { src: img('gallery/g4.webp'), alt: 'بازدید هیئت همراه' },
  { src: img('gallery/g5.png'), alt: 'بازدید مدیران استانی' },
  { src: img('gallery/g6.webp'), alt: 'بازدید از محوطه مجتمع' },
  { src: img('gallery/g7.webp'), alt: 'حمل تجهیزات به مجتمع' },
  { src: img('gallery/g8.webp'), alt: 'بازدید از سازه‌ها' },
]

const site = 'https://koshtargahroostaiy.ir'

export const news = [
  {
    tag: 'مقالات',
    date: '۲۵ خرداد ۱۴۰۵',
    title: 'امضای تفاهم‌نامه با محیط زیست استان مرکزی در حمایت از درنای خاکستری تالاب میقان',
    excerpt: 'در هفته محیط زیست و با حضور استاندار و فرماندار اراک.',
    image: img('gallery/g6.webp'),
    href: `${site}/%d8%a7%d9%85%d8%b6%d8%a7%db%8c-%d8%b3%d9%86%d8%af-%d8%aa%d9%81%d8%a7%d9%87%d9%85-%d9%86%d8%a7%d9%85%d9%87-%d9%81%db%8c%d9%85%d8%a7%d8%a8%db%8c%d9%86-%d8%b3%d8%a7%d8%b2%d9%85%d8%a7%d9%86-%d9%85%d8%ad/`,
  },
  {
    tag: 'مقالات',
    date: '۲۵ آبان ۱۴۰۴',
    title: 'بازدید مدیرعامل بانک کشاورزی و استاندار مرکزی از روند پیشرفت مجتمع',
    excerpt: 'همراه با نمایندگان اراک، کمیجان و خنداب و مسئولین استانی.',
    image: img('gallery/g2.webp'),
    href: `${site}/%d8%a8%d8%a7%d8%b2%d8%af%db%8c%d8%af-%d8%ac%d9%86%d8%a7%d8%a8-%d8%a7%d9%82%d8%a7%db%8c-%d8%af%da%a9%d8%aa%d8%b1-%d9%85%d8%aa%d9%82%db%8c-%d9%86%db%8c%d8%a7-%d9%85%d8%af%db%8c%d8%b1-%d8%b9%d8%a7%d9%85/`,
  },
  {
    tag: 'مقالات',
    date: '۲۱ مهر ۱۴۰۴',
    title: 'بازدید از مجتمع کشتارگاهی داودآباد',
    excerpt: 'بازدید مسئول حوزه نمایندگی ولی فقیه و هیئت همراه.',
    image: img('gallery/g1.webp'),
    href: `${site}/elementor-945/`,
  },
  {
    tag: 'اخبار',
    date: '۱۸ شهریور ۱۴۰۴',
    title: 'بازدید معاون استاندار و مدیرکل دامپزشکی استان',
    excerpt: 'بازدید دکتر میرزایی و دکتر فتاحی به همراه مدیران استانی.',
    image: img('gallery/g4.webp'),
    href: `${site}/%d8%a8%d8%a7%d8%b2%d8%af%db%8c%d8%af-%d9%85%d8%b9%d8%a7%d9%88%d9%86-%d9%85%d8%ad%d8%aa%d8%b1%d9%85-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86%d8%af%d8%a7%d8%b1-%d8%af%da%a9%d8%aa%d8%b1-%d8%b9%d9%84%db%8c-%d9%85/`,
  },
]

export const video = {
  title: 'نگاهی به مجتمع',
  text: 'مجتمع کشتارگاهی صنعتی دام داودآباد اراک، در یک نگاه.',
  embed: 'https://www.aparat.com/video/video/embed/videohash/erml9k0/vt/frame?titleShow=true&recom=self',
  poster: img('hero/slide-complex.jpg'),
  channel: 'https://www.aparat.com/Koshtargahroostaiy',
}

export const contact = {
  heading: 'منتظر شنیدن صدای گرم شما هستیم',
  sub: '۲۴ ساعت شبانه‌روز، ۷ روز هفته',
  address: 'اراک، داودآباد، کیلومتر ۳ جاده دهنمک، مجتمع کشتارگاهی صنعتی دام روستائی',
  email: 'info@koshtargahroostaiy.ir',
  instagram: 'koshtargah.roostaiy',
  instagramUrl: 'https://www.instagram.com/koshtargah.roostaiy',
  aparatUrl: 'https://www.aparat.com/Koshtargahroostaiy',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=%DA%A9%D8%B4%D8%AA%D8%A7%D8%B1%DA%AF%D8%A7%D9%87+%D8%B5%D9%86%D8%B9%D8%AA%DB%8C+%D8%AF%D8%A7%D9%85+%D8%AF%D8%A7%D9%88%D8%AF%D8%A2%D8%A8%D8%A7%D8%AF+%D8%A7%D8%B1%D8%A7%DA%A9',
}

export const links = [
  { label: 'استانداری مرکزی', href: 'https://ostan-mr.ir/ostandari' },
  { label: 'جهاد کشاورزی اراک', href: 'https://jkmserv.ir/' },
  { label: 'علوم پزشکی اراک', href: 'https://www.arakmu.ac.ir/fa' },
  { label: 'بانک کشاورزی', href: 'https://www.bki.ir/' },
  { label: 'شهرداری داودآباد', href: 'https://davodabad.ir/' },
]
