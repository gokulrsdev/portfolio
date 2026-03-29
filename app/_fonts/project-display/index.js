import { Playfair_Display } from 'next/font/google';

export const project_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-project-display',
  display: 'swap',
});
