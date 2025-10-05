import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  [key: string]: any;
}

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...otherProps
}: HoverBorderGradientProps) => {
  return (
    <Tag
      className={cn(
        "relative flex rounded-full border border-slate-800 content-center bg-black hover:bg-black/10 text-white transition-all duration-300 ease-in-out",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full p-[1px]",
          "bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,.3)_50%,transparent_75%,transparent_100%)]",
          "bg-[length:250%_250%,100%_100%]",
          "bg-[position:-100%_0,0_0]",
          "bg-no-repeat",
          "transition-[background-position_0s_ease]",
          "hover:bg-[position:200%_0,0_0]",
          "hover:duration-[1500ms]",
          "ease-linear",
          className
        )}
        style={{
          transitionDuration: `${duration}s`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium backdrop-blur-sm text-white">
        {children}
      </div>
    </Tag>
  );
};
