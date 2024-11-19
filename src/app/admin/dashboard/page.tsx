import { authClient } from '@/lib/auth.client';
import { headers } from 'next/headers';
import { Logout } from './components/Logout';
import { SelectRole } from './components/SelectRole';
import { UsersList } from './components/UsersList';

export default async function Dashboard() {
  const headersMeta = await headers();
  const { data, error } = await authClient.admin.listUsers({
    query: { limit: 10 },
    fetchOptions: {
      headers: headersMeta,
      cache: 'force-cache',
      next: {
        revalidate: 60,
      },
    },
  });

  if (error) {
    return (
      <h1 className="text-shadow prose bg-base-100 dark:bg-base-200 dark:text-base-100 mx-auto mt-16 max-w-xs gap-8 rounded p-4 text-red-600 shadow-accent">
        {error.message}
      </h1>
    );
  }

  return (
    <main className="container mt-32">
      <div className="space-y-4">
        <SelectRole users={data.users} />
        <Logout id={headersMeta.get('X-Session') ?? ''} />
        <UsersList users={data.users} />
      </div>
    </main>
  );
}
