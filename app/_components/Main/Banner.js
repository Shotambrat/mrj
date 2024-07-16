"use client"
import Image from 'next/image';
import banner from "@/public/images/main/banner.png"

const Banner = () => {

  return (
      <div className='w-full max-w-[1440px] px-2 mx-auto'>
        <Image 
        src={banner}
        width={1500}
        height={1500}
        alt='Banner Photo'
        />
      </div>
  );
};

export default Banner;