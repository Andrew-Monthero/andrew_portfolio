import Image from 'next/image';
import React from 'react';
import Circular from '../../public/assets/CircularBackground.svg';

export default function HeroSection() {
  return (
    <div className='mx-[1rem] my-[5rem] h-screen tablet:mx-auto tablet:max-w-screen-md tablet:my-[7.5rem] laptop:max-w-screen-xl desktop:max-w-screen-2xl flex justify-center items-center relative'>
      <div className='absolute z-0 overflow-x-hidden bg-[#3e164b] blur-[200px] tablet:blur-[200px] h-[80%] rotate-90 w-[120%] tablet:h-[90%] tablet:w-full rounded-full' />

      <div className='absolute z-10 tablet:top-1/2 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 '>
        <Image src={Circular} alt='background' />
      </div>

      <div className='z-20 max-w-[738px] flex flex-col gap-[40px]'>
        <h1 className=' text-center bg-gradient-to-b from-[#f5f5f5] to-[#616161] bg-clip-text text-transparent drop-shadow'>
          Transforming ideas into impactful experiences through thoughtful
          design solutions
        </h1>
        <div className='flex justify-center gap-[16px]'>
          <div className='rounded-full bg-gradient-to-br from-[#b2d6ff] to-[rgb(178,214,255,0.2)] p-[2px]'>
            <button className='rounded-full py-[1rem] px-[2.50rem] bg-gradient-to-l to-[#3d124d] from-[#16061a]'>
              {' '}
              Explore
            </button>
          </div>
          <button className='rounded-full py-[1rem] px-[2.50rem] bg-[#72228f]'>
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}
