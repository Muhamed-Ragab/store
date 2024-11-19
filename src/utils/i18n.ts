import en from '@/assets/messages/en.json' with { type: 'json' };
import { useTranslations } from 'next-intl';

export const useTranslation = (key: keyof typeof en) =>
  useTranslations<keyof typeof en>(key);
