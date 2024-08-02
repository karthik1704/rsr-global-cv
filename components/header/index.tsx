"use client"
import React from 'react'
import Image from "next/image";
import img from '@/public/home-1.png'
import ImageCarousel from '@/components/resume/index'

 const Header = () => {
    const images = [
        '/resume/resume-1.jpg',
        '/resume/resume-2.jpg',
        '/resume/resume-3.jpg'
      ];

  return<>
<header className="h-[600px] w-full  bg-cover bg-center bg-no-repeat relative">
<Image src={img} alt="" />

<ImageCarousel images={images} interval={2000} />
    <div className='absolute top-1/3 left-10 text-black w-3/5 flex flex-col gap-4 justify-start items-start'>
        <h2 className='text-4xl font-bold '>
            The CV that gets the job... Done
        </h2>
        <p className='text-lg'> Perfect Your CV Effortlessly, Much More than a CV generator</p>

        <div>
        <button className='text-2xl	py-2 px-5 rounded-3xl outline-1 outline outline-offset-0 outline-white text-white bg-green-600 text-md font-bold hover:bg-green-500 hover:text-slate-100 transition-colors hover:ease-in-out'>
            Create your CV
        </button>
        <button className=' text-2xl mx-5 py-2 px-5 rounded-3xl outline-1 outline outline-offset-0 outline-black text-black bg-white text-md font-bold hover:bg-green-600 hover:text-slate-100 transition-colors hover:ease-in-out'>
           Upgrade a CV
        </button>
        </div>

    </div>
</header>
  </>
}

export default Header;
