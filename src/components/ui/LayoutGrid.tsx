import React, { useState } from "react";
import { motion } from "framer-motion";

interface LayoutGridProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutGrid = ({ children, className = "" }: LayoutGridProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className={`grid grid-cols-1 gap-4 max-w-2xl mx-auto ${className}`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-2xl"
          layoutId={`grid-item-${index}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const GridItem = ({ children, className = "", title, description }: GridItemProps) => {
  return (
    <div className={`glass p-6 hover:shadow-xl transition-all duration-300 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
      )}
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};
