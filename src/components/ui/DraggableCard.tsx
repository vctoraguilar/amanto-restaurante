import React, { useState } from "react";
import { motion } from "framer-motion";

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  drag?: boolean;
  dragConstraints?: any;
  dragElastic?: number;
  whileDrag?: any;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export const DraggableCard = ({
  children,
  className = "",
  drag = true,
  dragConstraints,
  dragElastic = 0.1,
  whileDrag = { scale: 1.05, rotate: 5 },
  onDragStart,
  onDragEnd,
}: DraggableCardProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      className={`cursor-grab active:cursor-grabbing ${className}`}
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      whileDrag={whileDrag}
      onDragStart={() => {
        setIsDragging(true);
        onDragStart?.();
      }}
      onDragEnd={() => {
        setIsDragging(false);
        onDragEnd?.();
      }}
      animate={{
        scale: isDragging ? 1.05 : 1,
        rotate: isDragging ? 5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

interface DragCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const DragCard = ({ children, className = "", title, description }: DragCardProps) => {
  return (
    <div className={`glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${className}`}>
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
