import React from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={`relative flex flex-col min-h-screen bg-zinc-950 text-white overflow-hidden ${className}`}
        {...props}
      >
        <div className="absolute inset-0 w-full h-full bg-zinc-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <div
          className={`absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ${
            showRadialGradient ? "bg-[radial-gradient(ellipse_at_center,var(--yellow-500,transparent)_0%,transparent_70%)]" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-20 blur-3xl animate-gentle-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-3xl animate-gentle-glow [animation-delay:20s]" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 opacity-20 blur-3xl animate-gentle-glow [animation-delay:40s]" />
        </div>

        <div className="relative z-20 w-full">
          {children}
        </div>
      </div>
    </main>
  );
};

export const AuroraBackgroundCore = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={
        `absolute inset-0 h-full w-full overflow-hidden bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ${className}`
      }
      {...props}
    />
  );
};
