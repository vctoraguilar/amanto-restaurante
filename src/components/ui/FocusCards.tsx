import React, { useState } from "react";
import { motion } from "framer-motion";

interface FocusCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const FocusCard = ({ 
  children, 
  className = "", 
  title, 
  description, 
  icon 
}: FocusCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl glass p-8 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-4xl">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
        )}
        
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        
        {children}
      </div>
    </motion.div>
  );
};

interface FocusCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const FocusCardContainer = ({ children, className = "" }: FocusCardContainerProps) => {
  return (
    <div className={`grid grid-cols-1 gap-6 max-w-2xl mx-auto ${className}`}>
      {children}
    </div>
  );
};
