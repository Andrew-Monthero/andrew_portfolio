import Image from 'next/image';
import Profile from '../../public/assets/Andrew.jpeg';
import Circular from '../../public/assets/CircularBackground.svg';

export default function About() {
  return (
    <div className='flex flex-col gap-[48px] items-center mx-[1rem] my-[5rem]  tablet:mx-auto tablet:max-w-screen-md tablet:my-[7.5rem] laptop:max-w-screen-xl desktop:max-w-screen-2xl'>
      <h2 className='bg-gradient-to-b from-[#f5f5f5] to-[#616161] bg-clip-text text-transparent drop-shadow font-semibold'>
        About me
      </h2>

      <div className='grid grid-cols-1 laptop:grid-cols-12  items-center gap-[20px] relative'>
        <div className='absolute z-0 tablet:top-1/2 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 '>
          <Image src={Circular} alt='background' />
        </div>
        <div className='tablet:col-start-2 tablet:col-span-5 tablet:order-1 order-2 z-20'>
          <h2 className='font-normal'>
            I am Andrew Monthero, a passionate UI/UX designer based in Mumbai.
          </h2>
          <p className='mt-[1.5rem]'>
            I believe in creating delightful user experiences that not only look
            amazing but also function flawlessly. Design is my playground, and
            code is my secret sauce to bring those designs to life! I&apos;m
            always hungry to learn and explore new horizons. The possibilities
            in this space are mind-boggling, and I can&apos;t help but dive in
            headfirst to discover innovative ways to blend technology and user
            experiences seamlessly. When I&apos;m not diving into design or
            coding adventures, you&apos;ll likely find me lost in the world of
            music. Whether it&apos;s grooving to the beat or getting lost in
            melodies, music fuels my creative soul and helps me find inspiration
            in unexpected places.
          </p>
        </div>
        <div className='rounded-[48px] tablet:col-start-8 tablet:col-span-4 tablet:order-2 order-1 z-20 bg-gradient-to-br from-[#b2d6ff] to-[rgb(178,214,255,0.2)]'>
          <Image
            src={Profile}
            alt='andrew_image'
            className=' grayscale p-[2px] rounded-[48px]'
          />
        </div>
      </div>
    </div>
  );
}
