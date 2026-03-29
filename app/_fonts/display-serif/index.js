import { Cormorant_Garamond } from 'next/font/google';

export const display_serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal'],
  variable: '--font-display-serif',
  display: 'swap',
});
