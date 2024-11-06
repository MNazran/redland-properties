'use client';

import { useState } from 'react';
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

interface CarouselProps {
  images: any;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className='overflow-hidden relative'>
      {/* Slide Container */}
      <div
        className='flex transition-transform ease-out duration-500'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image: any, idx: number) => (
          <div className='min-w-full' key={idx}>
            <Image
              src={urlFor(image).url()}
              width={500}
              height={500}
              alt={`Slide ${idx}`}
              className='object-contain w-full h-full'
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='absolute top-0 left-0 h-full w-full flex justify-between items-center px-4 text-white text-3xl'>
        <button onClick={previousSlide} aria-label='Previous slide'>
          <CircleChevronLeft />
        </button>
        <button onClick={nextSlide} aria-label='Next slide'>
          <CircleChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className='absolute bottom-8 w-full flex justify-center gap-3'>
        {images.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
