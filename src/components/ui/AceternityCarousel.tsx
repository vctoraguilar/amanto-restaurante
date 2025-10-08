'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SlideData {
  title: string;
  description: string;
  image: string;
}

interface AceternityCarouselProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export function AceternityCarousel({
  slides,
  autoplay = true,
  autoplayDelay = 4000,
  className,
}: AceternityCarouselProps) {
  const [current, setCurrent] = useState(0);

  const handleSlideClick = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, handleNext]);

  return (
    <div className={cn('relative w-full', className)}>
      {/* Main Display */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {slides[current].title}
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {slides[current].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <CarouselControl
          type="previous"
          title="Anterior"
          handleClick={handlePrev}
        />
        <CarouselControl
          type="next"
          title="Siguiente"
          handleClick={handleNext}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={cn(
              'h-1 rounded-full transition-all duration-300',
              current === index
                ? 'w-8 bg-foreground/80'
                : 'w-1 bg-foreground/20 hover:bg-foreground/40'
            )}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

function Slide({ slide, index, current, handleSlideClick }: SlideProps) {
  const isActive = current === index;

  return (
    <motion.button
      onClick={() => handleSlideClick(index)}
      className={cn(
        'relative flex-shrink-0 w-48 h-32 md:w-56 md:h-36 rounded-xl overflow-hidden cursor-pointer transition-all duration-300',
        isActive ? 'opacity-100 scale-100' : 'opacity-50 hover:opacity-80'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300",
        isActive ? "from-black/60" : "from-black/80"
      )} />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h4 className={cn(
          "text-sm font-semibold text-white line-clamp-1 transition-all duration-300",
          isActive ? "text-white" : "text-white/80"
        )}>
          {slide.title}
        </h4>
      </div>
    </motion.button>
  );
}

interface CarouselControlProps {
  type: 'previous' | 'next';
  title: string;
  handleClick: () => void;
}

function CarouselControl({ type, title, handleClick }: CarouselControlProps) {
  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-20',
        'w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm',
        'flex items-center justify-center',
        'text-white hover:bg-black/70 transition-all duration-200',
        'border border-white/20',
        type === 'previous' ? 'left-4' : 'right-4'
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={title}
    >
      {type === 'previous' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      )}
    </motion.button>
  );
}
