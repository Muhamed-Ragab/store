'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@/lib/auth';
import { authClient } from '@/lib/auth.client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function UserMenu({ user }: { user: User }) {
  const router = useRouter();

  const logout = async () => {
    const result = await authClient.signOut();
    if (result.error) {
      toast.error(result.error.message);
    } else {
      toast.success('Logged out successfully');
      router.refresh();
    }
  };

  return (
    <DropdownMenu modal={false} aria-label="User menu">
      <DropdownMenuTrigger asChild>
        <Button className="hover:bg-transparent" variant="ghost" size="icon">
          <Avatar
            className="cursor-pointer"
            aria-label={`View ${user.name || 'your'} profile`}
          >
            <AvatarImage
              src={user.image || 'https://github.com/shadcn.png'}
              width={64}
              height={64}
              alt={user.name || '@shadcn'}
              aria-hidden="true"
            />
            <AvatarFallback aria-hidden="true">CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" aria-labelledby="user-menu-label">
        <DropdownMenuLabel id="user-menu-label">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem aria-label="View profile">Profile</DropdownMenuItem>
          <DropdownMenuItem aria-label="Edit settings">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={logout}
          aria-label="Log out"
        >
          <span className="text-destructive">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
