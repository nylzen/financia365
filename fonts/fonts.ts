import { Playfair_Display, Poppins } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
