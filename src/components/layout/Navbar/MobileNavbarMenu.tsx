'use client';

import { Button } from '@/components/ui/button';
import { useClickAway } from 'ahooks';
import { X } from 'lucide-react';
import { PropsWithChildren, useRef, useState } from 'react';

export default function MobileNavbarMenu({ children }: PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(() => setOpen(false), ref);

  const toggleMenu = () => setOpen(prevState => !prevState);
  const closeMenu = () => setOpen(false);

  return (
    <div className="relative">
      <Button
        className="group"
        variant="outline"
        size="icon"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <svg
          className="pointer-events-none"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
          />
          <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
          />
          <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
          />
        </svg>
      </Button>
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />
          <div
            className="absolute end-0 top-full z-50 mt-2 rounded-md bg-secondary p-4 pt-8 shadow-md"
            ref={ref}
          >
            <Button
              className="absolute right-0 top-0"
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X />
            </Button>
            {children}
          </div>
        </>
      )}
    </div>
  );
}
