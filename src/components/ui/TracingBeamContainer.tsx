'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, MotionValue, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TracingBeamContainer = ({
  children,
  className,
  containerId,
}: {
  children: React.ReactNode;
  className?: string;
  containerId?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }

    // Find the scrollable container
    const container = containerId 
      ? document.querySelector(`.${containerId}`)
      : ref.current?.closest('.custom-scrollbar');

    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      scrollYProgress.set(progress);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerId, scrollYProgress]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn('relative w-full', className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3 z-50">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(244, 159, 19, 0.5) 0px 3px 8px',
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-amber-500/30 shadow-sm flex items-center justify-center bg-black/50"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? '#f59e0b' : '#fbbf24',
            }}
            className="h-2 w-2 rounded-full border border-amber-400 bg-amber-500"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.3"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#fbbf24" stopOpacity="0"></stop>
              <stop stopColor="#f59e0b"></stop>
              <stop offset="0.325" stopColor="#d97706"></stop>
              <stop offset="1" stopColor="#d97706" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

