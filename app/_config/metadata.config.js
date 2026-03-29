/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://gokulrs-portfolio.vercel.app/'),
  title: {
    template: '%s | Gokul RS',
    default: 'Gokul RS • Creative Developer',
  },
  description:
    'Creative Developer focused on AI, cybersecurity, and real-world systems. Building practical products that are intelligent, fast, and impactful.',
  generator: 'Gokul RS',
  applicationName: 'Gokul RS Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['AI', 'Cybersecurity', 'Web Development', 'Product Development'],
  authors: [
    { name: 'Gokul RS', url: 'https://www.linkedin.com/in/gokulrsdev' },
  ],
  creator: 'Gokul RS',
  publisher: 'Gokul RS',
  twitter: {
    card: 'summary_large_image',
    title: 'Gokul RS',
    description:
      'Creative Developer | AI + Cybersecurity Explorer | Building real-world tech.',
    creator: '@gokulrsdev',
    images: {
      url: 'https://gokulrs-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
