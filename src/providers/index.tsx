import { Toaster } from '@/components/ui/sonner';
import { getLocale } from '@/utils/locale';
import { PropsWithChildren } from 'react';
import NextIntlProvider from './NextIntlProvider';
import { ThemeProvider } from './theme-provider';

export default async function Providers({ children }: PropsWithChildren) {
  const locale = await getLocale();
  return (
    <NextIntlProvider>
      <Toaster closeButton richColors dir={locale === 'ar' ? 'rtl' : 'ltr'} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlProvider>
  );
}
