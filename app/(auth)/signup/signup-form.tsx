"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createUser } from "./actions";
import Image from "next/image";
import logo from "@/public/images/rsr_logo.webp";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { useEffect } from "react";
import { toast } from "sonner";
import SubmitButton from "@/components/submit-button/submit-button";

const initalState = {
  message: null,
  fieldErrors:{
    first_name: null,
    password: null,
    last_name: null,
    email: null,
    password2: null,
  }
}

const SignUp = () => {
  const [state, formAction] = useFormState(createUser, initalState);

  useEffect(() => {
    if (state?.message)
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });
  }, [state?.message, state]);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePaswword = () =>{
    setShowPassword(!showPassword);
  }

  const confirmTogglePassword = () =>{
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <>
      <div className="flex justify-between items-center pt-3 px-10 bg-green-100">
        <Image src={logo} alt="logo" />
        <div>

        </div>
      </div>
      <div className=" min-h-screen flex flex-col md:flex-row p-5 md:p-0 justify-center items-center bg-green-100">

        <div className="md:h-3/4 bg-cover md:pr-10 lg:content-center basis-2/5 ">
          <div className="grid grid-rows-1 p-5 md:p-0 gap-5 lg:gap-16 text-black">
            <h1 className="w-full lg:w-4/5 text-xl sm:text-2xl lg:text-3xl font-bold md:mb-6 text-center md:text-left">
              Create a standout resume effortlessly with our intuitive CV
              builder.
            </h1>
            <ul className="list-disc text-justify text-md sm:text-lg md:text-md lg:text-lg font-light list-inside mb-6 space-y-6">
              <li>
                Build a professional CV in minutes with our easy-to-use tool.
              </li>
              <li>Access customizable templates tailored to your industry.</li>
              <li>Save and edit your CV anytime, from anywhere.</li>
              <li>Get tips and guidance to enhance your resume's impact.</li>
              <li>Join now and take the first step towards your dream job!</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <div className="w-full py-7 bg-slate-100 shadow-lg rounded-3xl">
            <h1 className="text-xl md:text-3xl font-bold p-2 mb-2 text-center text-black">
              Sign up now to craft a professional CV
            </h1>
            <form action={formAction}>
              <div className=" mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1">
                    First Name  <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter Your First Name"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  {state?.fieldErrors?.first_name && (
          <p className="text-red-500">{state?.fieldErrors?.first_name}</p>
        )}
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Last Name  <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  {state?.fieldErrors?.last_name && (
          <p className="text-red-500">{state?.fieldErrors?.last_name}</p>
        )}
                </div>
              </div>

              <div className="mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Phone Number  <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  {state?.fieldErrors?.phone && (
          <p className="text-red-500">{state?.fieldErrors?.phone}</p>
        )}
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    E-mail  <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email-ID"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  {state?.fieldErrors?.email && (
          <p className="text-red-500">{state?.fieldErrors?.email}</p>
        )}
                </div>
              </div>

              <div className="mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Password{" "}  <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                   <button
        type="button"
        onClick={togglePaswword}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
      </div>
      {state?.fieldErrors?.password && (
          <p className="text-red-500">{state?.fieldErrors?.password}</p>
        )}
                </div>

                <div>
                  <label className="block text-gray-700 font-bold">
                    Confirm Password  <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    name="password2"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter Confirm Password"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                  <button
        type="button"
        onClick={confirmTogglePassword}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
      </div>
      {state?.fieldErrors?.password2 && (
          <p className="text-red-500">{state?.fieldErrors?.password2}</p>
        )}
                </div>
                
              </div>

              <div className="flex justify-center">
                <div  className=" pt-1 lg:mx-5">
                  <SubmitButton name="Create an account"/>
                </div>
                {/* <button
                  type="submit"
                  className="bg-green-700 rounded-md text-white py-2 px-4 hover:bg-green-600 font-bold focus:outline-none mx-2"
                >
                  Create an account
                </button> */}
                <Link
                  href="/"
                  className="bg-gray-300 rounded-md text-black py-2 px-4 hover:bg-green-600 focus:outline-none hover:text-white font-bold mx-2"
                >
                  Cancel
                </Link>
              </div>
              <h1 className="m-4 mx-4 lg:mx-12 gap-4 text-center">
                Already having an account?{" "}
                <a
                  href="/login"
                  className=" font-medium text-green-700 hover:text-green-600"
                >
                  Login
                </a>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
