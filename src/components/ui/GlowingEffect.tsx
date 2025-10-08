'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: 'default' | 'white';
  glow?: boolean;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export function GlowingEffect({
  children,
  className,
  blur = 15,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 30,
  variant = 'default',
  glow = false,
  disabled = false,
  movementDuration = 2,
  borderWidth = 2,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || disabled) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      if ((isHovering || glow) && dimensions.width > 0 && dimensions.height > 0) {
        const { x, y } = mousePosition.current;

        // Función para crear gradiente en un punto específico
        const createGradient = (centerX: number, centerY: number, intensity: number = 1) => {
          const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            150 * spread / 30
          );

          if (variant === 'default') {
            gradient.addColorStop(0, `rgba(255, 200, 0, ${0.6 * intensity})`);
            gradient.addColorStop(0.3, `rgba(255, 100, 200, ${0.4 * intensity})`);
            gradient.addColorStop(0.6, `rgba(100, 200, 255, ${0.2 * intensity})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          } else {
            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.6 * intensity})`);
            gradient.addColorStop(0.4, `rgba(200, 200, 200, ${0.3 * intensity})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          }

          return gradient;
        };

        // Configurar contexto para dibujar solo en el borde
        ctx.save();

        // Aplicar blur
        ctx.filter = `blur(${blur}px)`;

        // Calcular la posición más cercana al borde desde el mouse
        const distToLeft = x;
        const distToRight = dimensions.width - x;
        const distToTop = y;
        const distToBottom = dimensions.height - y;

        const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

        // Solo dibujar el efecto si está cerca del borde
        const edgeThreshold = 100;
        
        if (minDist === distToTop && distToTop < edgeThreshold) {
          // Borde superior
          const gradient = createGradient(x, 0, 1 - distToTop / edgeThreshold);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = borderWidth * 3;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, x - 150), 0);
          ctx.lineTo(Math.min(dimensions.width, x + 150), 0);
          ctx.stroke();
        }

        if (minDist === distToBottom && distToBottom < edgeThreshold) {
          // Borde inferior
          const gradient = createGradient(x, dimensions.height, 1 - distToBottom / edgeThreshold);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = borderWidth * 3;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, x - 150), dimensions.height);
          ctx.lineTo(Math.min(dimensions.width, x + 150), dimensions.height);
          ctx.stroke();
        }

        if (minDist === distToLeft && distToLeft < edgeThreshold) {
          // Borde izquierdo
          const gradient = createGradient(0, y, 1 - distToLeft / edgeThreshold);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = borderWidth * 3;
          ctx.beginPath();
          ctx.moveTo(0, Math.max(0, y - 150));
          ctx.lineTo(0, Math.min(dimensions.height, y + 150));
          ctx.stroke();
        }

        if (minDist === distToRight && distToRight < edgeThreshold) {
          // Borde derecho
          const gradient = createGradient(dimensions.width, y, 1 - distToRight / edgeThreshold);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = borderWidth * 3;
          ctx.beginPath();
          ctx.moveTo(dimensions.width, Math.max(0, y - 150));
          ctx.lineTo(dimensions.width, Math.min(dimensions.height, y + 150));
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, isHovering, glow, disabled, blur, borderWidth, variant, spread]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if mouse is in inactive zone (center)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distanceFromCenter = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    const maxDistance = Math.min(rect.width, rect.height) / 2;

    if (distanceFromCenter < maxDistance * inactiveZone) {
      mousePosition.current = { x: centerX, y: centerY };
    } else {
      mousePosition.current = { x, y };
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden rounded-lg', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          mixBlendMode: 'screen',
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}
