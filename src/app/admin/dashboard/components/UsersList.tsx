import { User } from '@/lib/auth';

type Props = {
  users: User[];
};

export function UsersList({ users }: Props) {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map(({ id, name, role }) => (
          <li key={id}>
            {name} - {role}
          </li>
        ))}
      </ul>
    </>
  );
}
