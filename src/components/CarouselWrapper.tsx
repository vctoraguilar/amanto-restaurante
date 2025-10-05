import React from "react";
import { Carousel } from "./ui/Carousel";

interface CarouselWrapperProps {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export const CarouselWrapper = ({ 
  children, 
  autoplay = true, 
  autoplayDelay = 4000,
  className = ""
}: CarouselWrapperProps) => {
  // Convertir children a array usando React.Children
  const childrenArray = React.Children.toArray(children);

  return (
    <Carousel 
      autoplay={autoplay} 
      autoplayDelay={autoplayDelay}
      className={className}
    >
      {childrenArray}
    </Carousel>
  );
};
