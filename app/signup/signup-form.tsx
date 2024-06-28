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

const SignUp = () => {
  const [state, action] = useFormState(createUser, []);
  return (
    <div className="p-8 mb-4 min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="text-4xl font-bold mb-4 text-center ">
        Create an account
      </h1>
      <div className="max-w-xl w-full p-8 bg-white shadow-lg">
        {/* <a
            href="#"
            className="text-blue-800 hover:text-blue-950 underline text-sm mx-12 mb-6"
          >
            Help for external users
          </a> */}
        <form action={action}>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">First Name</label>
            <input
              type="text"
              name="first_name"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">E-mail</label>
            <input
              type="email"
              name="email"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          {/* <div className="mb-4 mx-12">
              <label className="block text-gray-700 font-bold">
                Confirm e-mail
              </label>
              <input
                type="text"
                className="border border-black px-3 py-2 mt-1 block w-full"
              />
            </div> */}
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">Password </label>
            <input
              type="password"
              name="password"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">
              Confirm password
            </label>
            <input
              type="password"
              name="password2"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>

          {/* <div className="mb-4 mx-12">
              <label className="block text-gray-700 font-bold">
                E-mail language
              </label>
              <Select>
                <SelectTrigger className=" border-black w-[418px] rounded-none">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="Kannada">Kannada</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}

          <div className="flex items-center space-x-2 px-3 mb-4 mx-10">
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
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 hover:bg-blue-950 focus:outline-none focus:bg-blue-600 mx-2"
            >
              Create an account
            </button>
            <Link
              href="/"
              className="bg-gray-300 text-gray-700 py-2 px-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 mx-2"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
