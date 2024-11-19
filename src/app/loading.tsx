import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <LoaderCircle
        className="-ms-1 me-2 animate-spin"
        size={48}
        strokeWidth={2}
        aria-hidden="true"
      />
    </main>
  );
}
