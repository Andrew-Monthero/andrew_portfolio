import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Andrew-Portfolio',
  description: 'Product design portfolio of Andrew',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={pjs.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
