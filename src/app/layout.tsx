import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import MobileNavbar from '@/components/layout/Navbar/MobileNavbar';
import ScrollProgressLayout from '@/components/layout/ScrollProgress';
import { geistMono, geistSans } from '@/lib/fonts';
import Providers from '@/providers';
import { getLocale } from '@/utils/locale';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Store EG',
  description:
    'Your one-stop shop for all your gaming needs. Explore our vast collection of gaming accessories and peripherals.',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <header className="max-lg:hidden">
            <Navbar />
          </header>
          <header className="lg:hidden">
            <MobileNavbar />
          </header>
          <ScrollProgressLayout>{children}</ScrollProgressLayout>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
