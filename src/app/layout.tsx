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
          <header className="fixed left-0 top-0 z-40 w-full backdrop-blur-md">
            <div className="max-lg:hidden">
              <Navbar />
            </div>
            <div className="lg:hidden">
              <MobileNavbar />
            </div>
          </header>
          <ScrollProgressLayout>
            <div className="relative min-h-screen py-[68px]">
              {children}
              <div className="absolute bottom-0 left-0 w-full">
                <Footer />
              </div>
            </div>
          </ScrollProgressLayout>
        </Providers>
      </body>
    </html>
  );
}
