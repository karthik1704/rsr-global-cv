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
      <header className="h-[600px] w-full bg-cover bg-center bg-no-repeat relative">
        <Image src={img} alt="" className="w-full h-full object-cover" />

        <div className="absolute top-3/4 right-1/4 left-1/3 sm:left-1/4 sm:right-1/4 sm:top-auto sm:bottom-0 md:left-1/5 lg:left-1/3 hidden lg:block">
          <ImageCarousel images={images} interval={2000} />
        </div>

        <div className="absolute top-1/3 left-4 text-black w-full sm:w-4/5 md:w-3/5 lg:w-2/6 xl:w-3/5 flex flex-col gap-4 justify-start items-start px-4 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The CV that gets the job... Done
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            Perfect Your CV Effortlessly, Much More than a CV generator
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
      </header>
    </>
  );
};

export default Header;
