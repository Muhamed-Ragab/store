'use client';

import { ScrollProgress } from '@/components/motion/scroll-progress';
import { PropsWithChildren, useRef } from 'react';

export default function ScrollProgressLayout({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <ScrollProgress
        containerRef={containerRef.current as any}
        className="fixed top-0 z-50 bg-[#0090FF]"
      />
      {children}
    </div>
  );
}
