import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords = ({ words, duration = 2000, className = "" }: FlipWordsProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

interface FlipWordsContainerProps {
  words: string[];
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const FlipWordsContainer = ({ 
  words, 
  duration = 2000, 
  className = "",
  prefix = "",
  suffix = ""
}: FlipWordsContainerProps) => {
  return (
    <div className={`text-center ${className}`}>
      {prefix && <span>{prefix}</span>}
      <FlipWords words={words} duration={duration} className="gradient-text font-bold" />
      {suffix && <span>{suffix}</span>}
    </div>
  );
};
