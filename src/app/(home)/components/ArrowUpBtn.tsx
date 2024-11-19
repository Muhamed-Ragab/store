'use client';

import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ArrowUpBtn() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isScrolled) {
    return null;
  }

  return (
    <motion.a
      className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-500 p-2 font-bold text-white hover:bg-blue-700 sm:p-3 md:bottom-8 md:right-8"
      href="#"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <ChevronUp />
    </motion.a>
  );
}
