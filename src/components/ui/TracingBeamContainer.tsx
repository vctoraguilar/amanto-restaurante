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
      const updateHeight = () => {
        if (contentRef.current) {
          setSvgHeight(contentRef.current.offsetHeight);
        }
      };

      // Initial height calculation
      updateHeight();

      // Use ResizeObserver to update height when content changes
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });

      resizeObserver.observe(contentRef.current);

      // Find the scrollable container - multiple strategies
      let container: Element | null = null;
      
      if (containerId) {
        // Remove leading dot if present and add it back for consistency
        const cleanId = containerId.startsWith('.') ? containerId : `.${containerId}`;
        container = document.querySelector(cleanId);
      } else {
        // Try different methods to find the scrollable container
        container = ref.current?.closest('.custom-scrollbar') || 
                    ref.current?.closest('[style*="overflow-y"]') ||
                    document.querySelector('.custom-scrollbar');
      }

      if (!container) {
        console.warn('TracingBeamContainer: No scroll container found');
        return () => resizeObserver.disconnect();
      }

      const handleScroll = () => {
        const scrollTop = (container as Element).scrollTop;
        const scrollHeight = (container as Element).scrollHeight - (container as Element).clientHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        scrollYProgress.set(progress);
      };

      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call

      return () => {
        container?.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
      };
    }
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
      <div className="absolute -left-16 md:-left-16 top-0 z-50 pointer-events-none" style={{ width: '20px' }}>
        <svg
          viewBox={`0 0 20 ${Math.max(svgHeight, 100)}`}
          width="20"
          height={Math.max(svgHeight, 100)}
          className="block"
          style={{ minHeight: '100vh' }}
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
      <div ref={contentRef} className="pl-0 md:pl-0">{children}</div>
    </motion.div>
  );
};

