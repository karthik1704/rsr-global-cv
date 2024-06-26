"use client";
import Image from "next/image";
import Link from "next/link";
import { signinJwt } from "./actions";
import { useFormState } from "react-dom";

const initalState = {
  message: null,
  fieldErrors: {
    username: null,
    password: null,
  },
};

const LoginForm = () => {
  const [state, action] = useFormState(signinJwt, initalState);
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="text-4xl font-bold mb-4 text-center ">
        Sign in to continue
      </h1>
      <div className="max-w-xl w-full p-8 bg-white shadow-lg text-justify">
        <form action={action}>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">
              Enter your e-mail address
            </label>
            <input
              type="text"
              name="username"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
          <div className="mb-4 mx-12">
            <label className="block text-gray-700 font-bold">
              Enter your password
            </label>
            <input
              type="password"
              name="password"
              className="border border-black px-3 py-2 mt-1 block w-full"
            />
          </div>
        </form>

        <div className="flex justify-between">
          <Link
            href="/signup"
            className="text-blue-800 hover:text-blue-950 underline text-sm mx-12 mb-6"
          >
            Create an account
          </Link>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 hover:bg-blue-950 mx-12 mb-6"
          >
            Login
          </button>
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
  );
};

export default LoginForm;
