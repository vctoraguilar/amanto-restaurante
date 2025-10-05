import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextHoverEffectContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("group", className)}
      initial="initial"
      whileHover="animate"
    >
      {children}
    </motion.div>
  );
};

// Este componente anima cada palabra individualmente
export const WordPullUp = ({
  children,
  variants = {
    initial: { y: 0 },
    animate: { y: -20 }, // Cuánto sube la palabra
  },
  transition = {
    duration: 0.5,
    ease: [0.6, 0.01, -0.05, 0.95],
  },
}: {
  children: React.ReactNode;
  variants?: any;
  transition?: any;
}) => {
  // Aplicamos la animación a cada letra para un efecto más fluido
  const letters = String(children).split("");

  return (
    <motion.div
      variants={variants}
      transition={transition}
      className="inline-block"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: 0 },
            animate: { y: -20, transition: { delay: i * 0.02 } }, // Retraso escalonado por letra
          }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};