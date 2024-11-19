import { getLocale, setLocale } from '@/utils/locale';

export async function configMiddleware() {
  const locale = await getLocale();

  if (!locale) {
    await setLocale('en');
  }
}
