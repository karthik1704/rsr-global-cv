import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import img1 from "@/public/india-flag.png";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      {/* <h1 className="bg-gray-400">An official website of the European Union</h1> */}
     
      {/* <div className="flex justify-evenly ">
        <div className="flex">
          <Image src={img1} height={100} width={75} alt="" />
          <div>
            <p>europass</p>
            <p>European Union</p>
          </div>
        </div>

        <div>English</div>
      </div> */}


      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-cover bg-center h-[500px] py-4"
      style={{
        clipPath: 'polygon(0 0, 100% 0%, 100% 74%, 0% 100%)'
      }}>
      <div className="container mx-auto px-4 w-9/12 mt-9">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex">
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Europass</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Europass tools</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Learn in Europe</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Work in Europe</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">About Europass</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Stakeholders</a>
          </div>

          <button className="text-white bg-gradient-to-r from-indigo-500 to-indigo-800 p-3 rounded-full" type="submit">
                  Login to Europass
                </button>

          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        <div className=" flex flex-col items-start justify-center mt-9 w-5/6">
            <h1 className="text-white text-6xl font-bold my-4">Contact Us</h1>
            <p className="text-white text-2xl my-4 ">
              Do you need further information? you can contact us in an number
              of ways depending on the information you are looking for.
            </p>
          </div>
      </div>
    </nav>
    

      <div className="flex flex-col w-9/12 mx-auto space-y-4 my-10">
        <Link
          href="#"
          className=" border-2 border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full w-80 text-center"
        >
          Read the FAQs
        </Link>
        <Link
          href="#"
          className="border-2 border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full w-80 text-center"
        >
          Contact europass helpdesk
        </Link>
        <Link
          href="#"
          className="border-2 border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full w-80 text-center"
        >
          Contact national europass centres
        </Link>
        <Link
          href="#"
          className="border-2 border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full w-80 text-center"
        >
          See how your data is used by europass
        </Link>
      </div>

      <div className="w-2/3 mx-auto">
        <a
          href="#"
          className="inline-flex items-center w-2/3 mx-auto text-blue-700"
        >
          <ChevronLeft />
          <p>Go to previous page</p>
        </a>
      </div>
    </>
  );
};

export default ContactPage;
