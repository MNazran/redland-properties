'use client';

import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { useState } from 'react';

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  // Initialize bigImage state only if images array has at least one item
  const [bigImage, setBigImage] = useState(
    images && images.length > 0 ? images[0] : null
  );

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  if (!images || images.length === 0) {
    // Optionally, render a placeholder or return null if images array is empty
    return <div>No images available</div>;
  }

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {images.map((image: any, idx: any) => (
          <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt='photo'
              className='h-full w-full object-cover object-center cursor-pointer'
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      {bigImage && (
        <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 w-full h-64 sm:h-80 lg:h-[500px] flex items-center justify-center'>
          <Image
            src={urlFor(bigImage).url()}
            width={800}
            height={800}
            alt='photo'
            className='object-contain max-w-full max-h-full'
          />

          <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
            Sale
          </span>
        </div>
      )}
    </div>
  );
}
