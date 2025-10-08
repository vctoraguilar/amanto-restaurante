import React from "react";
import { cn } from "../../lib/utils";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = false,
}: BackgroundGradientProps) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f59e0b,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d97706,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#b45309,transparent),radial-gradient(circle_farthest-side_at_0_0,#92400e,#141316)]"
        )}
      />
      <div
        className={cn(
          "relative z-10 flex min-h-[200px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black px-3 py-4 text-white",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
