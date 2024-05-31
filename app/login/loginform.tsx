import { Facebook, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import img1 from '@/public/google-play-img-1.png';
import img2 from '@/public/app-store-img-1.png';

const LoginForm = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center items-center bg-slate-100">
        <h1 className="text-4xl font-bold mb-4 text-center ">
          Sign in to continue
        </h1>
        <div className="max-w-xl w-full p-8 bg-white shadow-lg text-justify">
          <form>
            <div className="mb-4 mx-12">
              <label className="block text-gray-700 font-bold">
                Enter your e-mail address or unique identifier
              </label>
              <input
                type="text"
                className="border border-black px-3 py-2 mt-1 block w-full"
              />
            </div>
          </form>

          <div className="flex justify-between">
            <a
              href="#"
              className="text-blue-800 hover:text-blue-950 underline text-sm mx-12 mb-6"
            >
              Create an account
            </a>
            <button className="bg-blue-700 text-white py-2 px-4 hover:bg-blue-950 mx-12 mb-6">
              Next
            </button>
          </div>

          {/* <div className="flex justify-center content-center mb-6">
            <hr className="w-1/4 border-t-2 border-gray-400" />
            <div className="text-2xl mx-4">Or</div>
            <hr className="w-1/4 border-t-2 border-gray-400" />
          </div> */}

          {/* <div className="text-sm mx-12 mb-6">
          If you do not wish to create an EU Login account, you can sign in by using one of the following third-party sign-in options ("Sign-in Service"). <span className="underline font-bold">Read more</span> 
          </div> */}

          {/* <div className="flex justify-evenly mb-6 mx-12">
          <Globe size={40} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className="bg-teal-600 p-2" />
          <a className="underline text-blue-800" href="#">Sign in with your eID</a>
          </div>
<div className="flex justify-evenly mb-6 mx-12">
<Facebook size={40} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth  className="bg-blue-700 p-2" />
          <a className="underline text-blue-800" href="#">Sign in with facebook</a>
          </div>

          <div className="flex justify-evenly mb-6 mx-12">
<Linkedin size={40} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className="bg-blue-500 p-2" />
          <a className="underline text-blue-800" href="#">Sign in with LinkedIn</a>
          </div> */}

        </div>

        <p className="text-left m-6" >Easy, fast and secure: download the <span className="font-bold">EU Login app</span></p>
        
            <ul className="flex">
                <li className="mx-2">
                  <a href="#">
<Image src={img1} height={150} width={100} alt=""/>
</a>
                </li>
                <li className="mx-2 rounded-md">
                <a href="#">
                  <Image src={img2} height={150} width={100} alt=""/>
                  </a>
                </li>
            </ul>
        
      </div>
    </>
  );
};

export default LoginForm;
