'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Tanah', href: '/Tanah' },
  { name: 'Rumah', href: '/Rumah' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <header className='mb-8 border-b z-50 relative'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/' onClick={() => setToggle(false)}>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Redland<span className='text-primary'>Properties</span>
          </h1>
        </Link>
        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className='text-lg font-semibold text-primary'
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className='flex divide-x border-r sm:border-l sm:invisible md:invisible md:h-24 lg:invisible'>
          <Button
            variant={'outline'}
            className='flex flex-col gap-y-1.5 h-12 w-12 rounded-none'
            onClick={() => setToggle(true)}
          >
            <AlignJustify />
            {/* <span className='text-xs font-semibold text-gray-500'>Menu</span> */}
          </Button>
        </div>

        {toggle && (
          <div
            className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-5 transition-transform duration-300 ease-out ${
              toggle ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <X
              onClick={() => setToggle(false)}
              className='cursor-pointer mb-4'
            />{' '}
            {/* Close icon */}
            <ul className='mt-5'>
              {links.map((link) => (
                <li key={link.name} className='mb-4'>
                  <Link
                    href={link.href}
                    onClick={() => setToggle(false)}
                    className='text-gray-800'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* This is the original code */}

        {/* <div className='flex divide-x border-r sm:border-l'>
          <Button
            variant={'outline'}
            className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'
          >
            <AlignJustify />
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              Menu
            </span>
          </Button>
        </div> */}
      </div>
    </header>
  );
}
