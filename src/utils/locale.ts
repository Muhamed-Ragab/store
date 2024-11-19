import { cookies } from 'next/headers';

type Locale = 'en' | 'ar';

const defaultLocale: Locale = 'en';

export const getLocale = async () =>
  ((await cookies()).get('NEXT_LOCALE')?.value || defaultLocale) as Locale;

export const setLocale = async (locale: Locale) =>
  (await cookies()).set({
    name: 'NEXT_LOCALE',
    value: locale,
    expires: new Date(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000), // 1 year
  });
