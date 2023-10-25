import ExperienceCard from '@/components/ExperienceCard';
import React from 'react';

const data = [
  {
    companyName: 'Thinkarz Technologies Pvt. Ltd.',
    duration: 'November 2021 - May 2022',
    role: 'UI/UX Designer(Internship)',
    photoName: 'Thinkarz.png',
  },
  {
    companyName: 'Terado Engineering Pvt. Ltd.',
    duration: 'August 2022 - Present',
    role: 'UI/UX Designer(Full-time)',
    photoName: 'Terado.png',
  },
];

export default function Experience() {
  return (
    <div className='flex flex-col gap-[48px] mx-[1rem] my-[5rem]  tablet:mx-auto tablet:max-w-screen-md tablet:my-[7.5rem] laptop:max-w-screen-xl desktop:max-w-screen-2xl items-center'>
      <h2 className='bg-gradient-to-b from-[#f5f5f5] to-[#616161] bg-clip-text text-transparent drop-shadow font-semibold'>
        Experience
      </h2>

      <div className='flex flex-col gap-[32px]'>
        <div className='flex gap-[20px] flex-col tablet:flex-row'>
          {data.map(exp => (
            <ExperienceCard key={exp.name} dataObj={exp} />
          ))}
        </div>

        <div className='flex justify-center'>
          <div className='rounded-full bg-gradient-to-br from-[#b2d6ff] to-[rgb(178,214,255,0.2)] p-[2px] '>
            <button className='rounded-full py-[1rem] px-[2.50rem] bg-gradient-to-l to-[#3d124d] from-[#16061a]'>
              {' '}
              Download resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
