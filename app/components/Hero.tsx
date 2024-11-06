import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-10'>
      <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
        {/* Text Section with Fade-In Effect */}
        <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-36'>
          <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl '>
            Ejen Hartanah Tanah Merah, Kelantan
          </h1>
          <p className='max-w-md leading-relaxed text-gray-600 xl:text-lg  '>
            Kami menyediakan perkhidmatan jual beli hartanah di Tanah Merah,
            Kelantan dan negeri2 lain. Hubungi Kami.
          </p>
        </div>

        {/* Image Section with Scale and Fade Transitions */}
        <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
          <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 md:left-16 md:top-10 lg:ml-0'>
            <Image
              src='/images/hero_background.jpeg'
              alt='Great Photo'
              className='h-full w-full object-cover object-center'
              priority
              width={400}
              height={400}
            />
          </div>

          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'>
            <Image
              src='/images/openart_house.jpg'
              alt='Great Photo'
              className='h-full w-full object-cover object-center'
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      {/* Links Section with Hover Effects */}
      <div className='flex flex-col items-center justify-between gap-8'>
        <div className='flex h-12 w-auto overflow-hidden rounded-lg border-4'>
          <div className='flex'>
            <Link
              href='/Tanah'
              className='flex items-center justify-center px-4 text-gray-800 transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 w-full'
            >
              Senarai Tanah
            </Link>
          </div>
          <div className='flex border-l-4 border-gray-300'>
            <Link
              href='/Rumah'
              className='flex items-center justify-center px-4 text-gray-800 transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 w-full'
            >
              Senarai Rumah
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
