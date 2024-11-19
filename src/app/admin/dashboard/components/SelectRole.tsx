'use client';

import { useToast } from '@/hooks/use-toast';
import { authClient } from '@/lib/auth.client';
import { User } from 'better-auth';
import { useRouter } from 'next/navigation';

type Props = {
  role?: string;
  users: User[];
};

export function SelectRole({ role = 'user', users }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const setRole = async (userId: string, role: string) => {
    const result = await authClient.admin.setRole({ userId, role });
    console.log(result);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: result.error.message,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get('userId') as string;
    const selectedRole = formData.get('role') as string;
    await setRole(userId, selectedRole);
    toast({ title: 'Role set successfully' });

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <select
          className="select select-bordered w-full max-w-xs"
          name="userId"
          required
        >
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          name="role"
          defaultValue={role}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Set Role
        </button>
      </div>
    </form>
  );
}
