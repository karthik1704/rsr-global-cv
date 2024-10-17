"use client";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";
import { signinJwt } from "./actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import img from "@/public/images/rsr_logo-1.png";
import SubmitButton from "@/components/submit-button/submit-button";

const initalState = {
  message: null,
  fieldErrors: {
    username: null,
    password: null,
  },
};

const LoginForm = () => {
  const [state, formAction] = useFormState(signinJwt, initalState);

  useEffect(() => {
    if (state?.message)
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });
  }, [state?.message, state]);

  return (
    <div className="h-full flex flex-col justify-center items-center py-10 bg-slate-100">
      <div className=" w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="bg-[url('/sign-bg-1.jpg')] bg-cover bg-center w-4/5 sm:w-3/5 md:w-7/12 lg:w-4/12 p-8 bg-white shadow-lg text-justify mb-6 lg:mb-0">
          <h1 className="text-4xl text-gray-100 font-bold mb-4 text-center ">
            Sign In
          </h1>
          <form action={formAction}>
            <div className="mb-4 mx:4 md:mx-8 lg:mx-12">
              <label className="block text-gray-100 font-bold">
                Email-ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your E-mail ID"
                  className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              {state?.fieldErrors?.username && (
                <p className="text-red-500">{state?.fieldErrors?.username}</p>
              )}
            </div>
            <div className="mb-4 mx:4 md:mx-8 lg:mx-12">
              <label className="block text-gray-100 font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              {state?.fieldErrors?.password && (
                <p className="text-red-500">{state?.fieldErrors?.password}</p>
              )}
            </div>
            <div className="mb-4 pt-2 mx:4 md:mx-8 lg:mx-12">
  <SubmitButton name='Login'/>
</div>
          </form>
        </div>

        <div className="w-4/5 sm:w-3/5 md:w-7/12 lg:w-4/12 p-3 bg-slate-200">
          <div className="flex flex-col justify-center items-center py-16">
            <Image src={img} alt="logo"></Image>
            <h1 className="text-black text-4xl font-bold my-2">
              Welcome to RSR CV Builder
            </h1>
            <p className="text-black my-2">Don&apos;t have an account?</p>
            <Link
              href="/signup"
              className="flex w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
