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

const SignUp = () => {
  const [state, action] = useFormState(createUser, []);
  return (
    <div className="p-8 min-h-screen  justify-center items-center bg-slate-100">

<div className="h-screen bg-[url('/signup-bglat.png')] bg-cover content-center relative">
      <div className="w-full absolute left-1/2 top-48">
        {/* <div className="w-5/12">
        <Image src='/images/sign_up.jpg' alt="image"  width={600}
                height={70}/>
                </div> */}

      <div className="w-4/12 py-14 bg-white shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-center ">
        Create an account
      </h1>
        <form action={action}>
          <div className=" flex mb-4 mx-12 gap-4">
          <div className="flex-1">
        <label className="block text-gray-700 font-bold mb-1">First Name</label>
        <input
          type="text"
          name="first_name"
          className="border border-black px-3 py-2 block w-full"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 font-bold mb-1">Last Name</label>
        <input
          type="text"
          name="last_name"
          className="border border-black px-3 py-2 block w-full"
        />
      </div>
          </div>

          <div className="mb-4 mx-12 flex gap-4">
            <div className="flex-1">
            <label className="block text-gray-700 font-bold">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
            </div>
            <div className="flex-1">
            <label className="block text-gray-700 font-bold">E-mail</label>
            <input
              type="email"
              name="email"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          </div>


          <div className="mb-4 mx-12 flex gap-4">
            <div className="flex-1">
            <label className="block text-gray-700 font-bold">Password </label>
            <input
              type="password"
              name="password"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
            </div>
            <div className="flex-1">
            <label className="block text-gray-700 font-bold">
              Confirm password
            </label>
            <input
              type="password"
              name="password2"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          </div>
          

          {/* <div className="flex items-center space-x-2 px-3 mb-4 mx-10">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By checking this box, you acknowledge that you have read and
              understood the{" "}
              <span className="underline text-blue-800 hover:text-blue-950">
                privacy statement
              </span>
            </label>
          </div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 rounded-3xl text-white py-2 px-4 hover:bg-green-600 font-bold focus:outline-none mx-2"
            >
              Create an account
            </button>
            <Link
              href="/"
              className="bg-gray-300 rounded-3xl text-black py-2 px-4 hover:bg-green-600 focus:outline-none hover:text-white font-bold mx-2"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>

      </div>
      </div>
    </div>
  );
};

export default SignUp;
