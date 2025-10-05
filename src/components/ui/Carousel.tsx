import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export const Carousel = ({ 
  children, 
  className = "", 
  autoplay = true, 
  autoplayDelay = 4000 
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplay ? [Autoplay({ delay: autoplayDelay })] : []
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Convertir children a array si no lo es
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {childrenArray.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors disabled:opacity-50"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors disabled:opacity-50"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};
