'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LayoutTextFlipProps {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
}

export function LayoutTextFlip({
  text,
  words,
  duration = 3000,
  className,
}: LayoutTextFlipProps) {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2', className)}>
      <span className="text-foreground/80">{text}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ 
            opacity: 0,
            y: 20,
            rotateX: 90,
            filter: 'blur(4px)',
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
          }}
          exit={{ 
            opacity: 0,
            y: -20,
            rotateX: -90,
            filter: 'blur(4px)',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className="inline-block text-white font-bold gradient-text"
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
          }}
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
