import { IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const locale = (await cookies()).get('NEXT_LOCALE')?.value || 'en';
  const messages = (await import(`@/assets/messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter(part => part != null).join('.');

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + ' is not yet translated';
      } else {
        return 'Dear developer, please fix this message: ' + path;
      }
    },
  };
});
