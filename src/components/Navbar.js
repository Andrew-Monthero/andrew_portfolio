'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('');
      } else {
        setColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=' fixed top-0 left-0 w-full z-10 ease-in duration-300 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-800'
    >
      <div className='mx-[1rem] py-[0.75rem] tablet:mx-auto tablet:max-w-screen-md  laptop:max-w-screen-xl desktop:max-w-screen-2xl flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='../../assets/Logo.svg'
            alt='Andrew-Logo'
            width={120}
            height={80}
            priority
          />
        </Link>
        <div className='flex gap-4'>
          <Link href='/' className='p-[0.75rem] font-medium'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
