import ChangeTheme from '@/components/ChangeTheme';
import { TextShimmer } from '@/components/motion/text-shimmer';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth.client';
import { getLocale, setLocale } from '@/utils/locale';
import { Earth } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { navigation } from './data';
import MobileNavbarMenu from './MobileNavbarMenu';
import UserMenu from './UserMenu';

export default async function MobileNavbar() {
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

      <MobileNavbarMenu>
        <div>
          {session ? (
            <UserMenu user={session.user} />
          ) : (
            <Button asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
          )}
        </div>

        <ul className="mt-4 space-y-2">
          {navigation.map(({ href, text }) => (
            <li key={href}>
              <Button asChild variant="link" className="p-0 text-foreground">
                <Link href={href}>{text}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="my-4 flex gap-2">
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
        </div>
      </MobileNavbarMenu>
    </nav>
  );
}
