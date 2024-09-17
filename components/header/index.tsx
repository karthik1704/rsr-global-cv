"use client"
import React from 'react'
import Image from "next/image";
import img from '@/public/home-1.png'
import ImageCarousel from '@/components/resume/index'
import Link from 'next/link';

 const Header = ({user}) => {
    const images = [
        '/resume/resume-1.jpg',
        '/resume/resume-2.jpg',
        '/resume/resume-3.jpg'
      ];

  return<>
{/* <header className="h-[600px] w-full  bg-cover bg-center bg-no-repeat relative">
<Image src={img} alt="" />
<div className='absolute top-3/4 right-1/4 left-1/3'>
<ImageCarousel images={images} interval={2000} />
</div>
    <div className='absolute top-1/3 left-10 text-black w-3/5 flex flex-col gap-4 justify-start items-start'>
        <h2 className='text-4xl font-bold '>
            The CV that gets the job... Done
        </h2>
        <p className='text-lg'> Perfect Your CV Effortlessly, Much More than a CV generator</p>

        <div>
        <Link href={user? '/resume':'/login' } className='text-xl	py-2 px-5 rounded-md outline-1 outline outline-offset-0 outline-white text-white bg-green-600 text-md font-bold hover:bg-green-500 hover:text-slate-100 transition-colors hover:ease-in-out'>
            Create your CV
        </Link>
        </div>

    </div>
</header> */}
<header className="h-[600px] w-full bg-cover bg-center bg-no-repeat relative overflow-hidden md:h-[500px] sm:h-[400px] xs:h-[300px]">
            <Image src={img} alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
            
            <div className='absolute top-1/2 transform -translate-y-1/2 right-1/4 left-1/3 md:top-3/4 md:right-1/6 md:left-1/6 md:bottom-1/5 sm:left-2 sm:right-2 sm:top-1/2'>
                <ImageCarousel images={images} interval={2000} />
            </div>

            <div className='absolute top-1/3 left-10 text-black w-3/5 flex flex-col gap-4 justify-start items-start z-10 md:w-4/5 sm:w-full sm:left-5 sm:top-1/4'>
                <h2 className='text-4xl font-bold md:text-3xl sm:text-2xl'>
                    The CV that gets the job... Done
                </h2>
                <p className='text-lg md:text-base sm:text-sm'>
                    Perfect Your CV Effortlessly, Much More than a CV generator
                </p>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <Link 
                        href={user ? '/resume' : '/login'} 
                        className='text-xl py-2 px-5 rounded-md outline-1 outline outline-offset-0 outline-white text-white bg-green-600 text-md font-bold hover:bg-green-500 hover:text-slate-100 transition-colors hover:ease-in-out'>
                        Create your CV
                    </Link>
                    {/* <button className='text-xl py-2 px-5 rounded-md outline-1 outline outline-offset-0 outline-black text-black bg-white text-md font-bold hover:bg-green-600 hover:outline-none hover:text-slate-100 transition-colors hover:ease-in-out'>
                        Upgrade a CV
                    </button> */}
                </div>
            </div>
        </header>
  </>
}

export default Header;
