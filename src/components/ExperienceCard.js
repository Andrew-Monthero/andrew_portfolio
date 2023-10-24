import Image from 'next/image';
import React from 'react';

export default function ExperienceCard({ companyName, duration, role, img }) {
  return (
    <div>
      <div className='rounded-[32px] bg-gradient-to-br from-[#b2d6ff] to-[rgb(178,214,255,0.2)] p-[2px] '>
        <div className='rounded-[32px] p-[2rem] flex flex-col gap-[1rem] bg-gradient-to-l to-[#3d124d] from-[#16061a]'>
          <div>
            <div className='rounded-[12px] w-[80px] h-[80px] bg-gradient-to-br from-[#b2d6ff] to-[rgb(178,214,255,0.2)]'>
              <Image
                src={img}
                alt='andrew_image'
                className='  p-[2px] w-[80px] h-[80px] rounded-[12px]'
              />
            </div>
          </div>
          <div className='flex flex-col gap-[1rem]'>
            <h3>{companyName}</h3>
            <p className='text-[#b3b3b3]'>{duration}</p>
            <div className='px-[1rem] py-[6px] bg-[#164b4b] rounded-full '>
              <p className='text-[0.875rem] text-center'>{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
