'use client';

import { useToast } from '@/hooks/use-toast';
import { authClient } from '@/lib/auth.client';
import { User } from 'better-auth';
import { useRouter } from 'next/navigation';

type Props = {
  id: User['id'];
};

export function Logout({ id }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const revokeSession = async () => {
    if (!id) {
      toast({
        variant: 'destructive',
        title: 'User not found',
      });
      return;
    }

    const result = await authClient.revokeSession({
      id,
    });
    console.log(result);
    if (result.error) {
      toast({
        variant: 'destructive',
        title: result.error.message,
      });
      return;
    }

    toast({ title: 'Logged out successfully' });
    router.refresh();
  };

  return (
    <button className="btn btn-outline btn-secondary" onClick={revokeSession}>
      Logout
    </button>
  );
}
