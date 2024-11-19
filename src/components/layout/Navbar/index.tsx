import ChangeTheme from '@/components/ChangeTheme';
import { TextShimmer } from '@/components/motion/text-shimmer';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth.client';
import { getLocale, setLocale } from '@/utils/locale';
import { Earth } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { navigation } from './data';
import UserMenu from './UserMenu';

export default async function Navbar() {
  const locale = await getLocale();
  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  const toggleLocale = async () => {
    'use server';
    await setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="container my-4 flex items-center justify-between">
      <TextShimmer
        duration={3}
        className="select-none text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
      >
        Store EG
      </TextShimmer>

      <ul className="flex items-center gap-4">
        {navigation.map(({ href, text }) => (
          <li key={href} className="flex items-center gap-2">
            <Button asChild variant="link" className="text-foreground">
              <Link href={href}>{text}</Link>
            </Button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Button onClick={toggleLocale} variant="outline">
          <Earth
            size={16}
            strokeWidth={2}
            className="text-muted-foreground"
            aria-hidden="true"
            aria-label={locale === 'en' ? 'English' : 'Arabic'}
            aria-pressed={locale === 'en'}
            role="button"
            tabIndex={0}
          />
          {locale}
        </Button>
        <ChangeTheme />
        <div className="ms-8">
          {session ? (
            <UserMenu user={session.user} />
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
