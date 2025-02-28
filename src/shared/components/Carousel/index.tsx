import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
interface Slide {
  children?: React.ReactNode;
}

interface PropType {
  slides: Slide[];
  options?: EmblaOptionsType;
  sectionClassName: string;
  viewPortClassName: string;
  containerClassName: string;
  itemClassName: string;
  emblaRef: any;
}

export default function Carousel({
  slides,
  sectionClassName,
  viewPortClassName,
  containerClassName,
  itemClassName,
  emblaRef,
}: PropType) {
  return (
    <section className={sectionClassName}>
      <div className={viewPortClassName} ref={emblaRef}>
        <div className={containerClassName}>
          {slides.map((item, index) => (
            <div className={itemClassName} key={index}>
              {item.children}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
