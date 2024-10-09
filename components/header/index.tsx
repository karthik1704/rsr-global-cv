"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/home-1.png";
import ImageCarousel from "@/components/resume/index";
import Link from "next/link";

const Header = ({ user }) => {
  const images = [
    "/resume/resume-1.jpg",
    "/resume/resume-2.jpg",
    "/resume/resume-3.jpg",
  ];


  return (
    <>
      {/* <header>
        <div
  className="h-96 w-full bg-cover bg-center bg-no-repeat relative lg:bg-cover md:bg-contain"
  style={{ backgroundImage: 'url(/home-1.png)' }}
>
        <div className="text-black w-full sm:w-4/5 md:w-3/5 lg:w-2/6 xl:w-3/5 flex flex-col gap-4 justify-start items-start content-end px-4 md:px-10">
        <div className="absolute bottom-0 left-2/4 z-10 right-32">
          <ImageCarousel images={images} interval={2000} />
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The CV that gets the job... Done
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Perfect Your CV Effortlessly, Much More than a CV generator
            Create your CV effortlessly in seconds
          </p>

          <div>
            <Link
              href={user ? "/resume" : "/login"}
              className="text-base sm:text-lg md:text-xl py-2 px-4 md:px-5 rounded-md outline outline-1 outline-offset-0 outline-white text-white bg-green-600 font-bold hover:bg-green-500 hover:text-slate-100 transition-colors ease-in-out"
            >
              Create your CV
            </Link>
          </div>
        </div>
        </div>
      </header> */}
     <header>
  <div
    className="h-96 w-full bg-cover bg-center bg-no-repeat relative lg:bg-cover md:bg-contain"
    style={{ backgroundImage: 'url(/home-1.png)' }}
  >
    <div className="flex justify-between items-center h-full w-full px-4 md:px-10">
      <div className="z-10 text-black w-full sm:w-3/5 md:w-2/5 lg:w-1/3 flex flex-col gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          The CV that gets the job... Done
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Perfect Your CV Effortlessly, Much More than a CV generator
          Create your CV effortlessly in seconds
        </p>
        <div>
          <Link
            href={user ? "/resume" : "/login"}
            className="text-base sm:text-lg md:text-xl py-2 px-4 md:px-5 rounded-md outline outline-1 outline-offset-0 outline-white text-white bg-green-600 font-bold hover:bg-green-500 hover:text-slate-100 transition-colors ease-in-out"
          >
            Create your CV
          </Link>
        </div>
      </div>
      <div className="hidden absolute top-full bottom-24 inset-y-auto right-28 md:block z-10 w-2/5 lg:w-1/3">
        <ImageCarousel images={images} interval={2000} />
      </div>
    </div>
  </div>
</header>

    </>
  );
};

export default Header;
