import {CarouselWrapper, CarouselContent, CarouselItem} from "./style";

import React, { ReactNode, useState } from 'react';
import { type } from "os";

type atributos = {
    items: Array<ReactNode>
}

export default function Carousel( {items}:atributos ){
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    };
  
    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setCurrentIndex(prevIndex);
    };
  
    return (
      <CarouselWrapper>
        <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </CarouselWrapper>
    );
  };
  