import { TextShimmer } from '@/components/motion/text-shimmer';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 p-6 text-white">
      <p className="text-sm">
        <Link href="/" className="text-cyan-400">
          Store EG
        </Link>{' '}
        2024, Developed By{' '}
        <TextShimmer as="span" duration={3}>
          Mohamed Ragab
        </TextShimmer>
      </p>
    </footer>
  );
}
