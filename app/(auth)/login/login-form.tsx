"use client";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import Link from "next/link";
import { signinJwt } from "./actions";
import { useFormState } from "react-dom";
import img from '@/public/images/rsr_logo-1.png'

const initalState = {
  message: null,
  fieldErrors: {
    username: null,
    password: null,
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const LoginForm = () => {
  const [state, action] = useFormState(signinJwt, initalState);
  return (
    // <html className={`${poppins.variable}`}>
    <div className= " min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className=" w-full flex justify-center">
      
      <div className="bg-[url('/sign-bg-1.jpg')] bg-cover bg-center w-4/12 p-8 bg-white shadow-lg text-justify">
      <h1 className="text-4xl text-gray-100 font-bold mb-4 text-center ">
        Sign In
      </h1>
        <form action={action}>
          <div className="mb-4 mx-12">
            <label className="block text-gray-100 font-bold">
              Enter your e-mail address
            </label>
            <input
              type="text"
              name="username"
              className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-100 font-bold">
              Enter your password
            </label>
            <input
              type="password"
              name="password"
              className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="flex justify-center">
          {/* <Link
            href="/signup"
            className="text-green-600 hover:text-green-500 underline text-sm mx-12 mb-6 font-bold"
          >
            Create an account
          </Link> */}
          <button
            type="submit"
           className="flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
          </div>

        <div className="flex ml-64">
          {/* <label>
        <input
          type="checkbox"
        />
        Remember Me
      </label> */}
            <h1>forgot Password?</h1>
          </div>
        </form>
</div>

<div className=" w-4/12 bg-slate-200">

<div className="flex flex-col justify-center items-center mt-10">
<Image src={img} alt="logo"></Image>
  <h1 className="text-black text-4xl font-bold my-2">Welcome to Login</h1>
  <p className="text-black my-2">Don't have an account?</p>
  <Link href="/signup" className="flex w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</Link>
</div>
</div>

</div>

      <p className="text-left m-6">
        Easy, fast and secure: download the{" "}
        <span className="font-bold">RSR Login app</span>
      </p>

      <ul className="flex">
        <li className="mx-2">
          <a href="#">
            <Image src='/images/google-play-img-1.png' height={150} width={100} alt="" />
          </a>
        </li>
        <li className="mx-2 rounded-md">
          <a href="#">
            <Image src='/images/app-store-img-1.png' height={150} width={100} alt="" />
          </a>
        </li>
      </ul>
    </div>
      // </html> 
  );
};

export default LoginForm;
