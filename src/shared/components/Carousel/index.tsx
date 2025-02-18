import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
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
}

export default function Carousel({
  slides,
  options,
  sectionClassName,
  viewPortClassName,
  containerClassName,
  itemClassName,
}: PropType) {
  const [emblaRef] = useEmblaCarousel(options);

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
