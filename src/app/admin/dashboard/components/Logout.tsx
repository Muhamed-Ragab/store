'use client';

import { authClient } from '@/lib/auth.client';
import { User } from 'better-auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Props = {
  id: User['id'];
};

export function Logout({ id }: Props) {
  const router = useRouter();

  const revokeSession = async () => {
    if (!id) {
      toast.error('User not found');
      return;
    }

    const result = await authClient.revokeSession({
      id,
    });
    console.log(result);
    if (result.error) {
      toast.error(result.error.message);
      return;
    }

    toast.success('Logged out successfully');
    router.refresh();
  };

  return (
    <button className="btn btn-outline btn-secondary" onClick={revokeSession}>
      Logout
    </button>
  );
}
