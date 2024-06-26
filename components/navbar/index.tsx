import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { UserRound } from "lucide-react";
import Image from "next/image";
// import { Logo } from "@/public/images";

const Navbar = () => {
  return (
    <>
      <nav className="w-full grid items-center h-24 shadow-inner ">
        <div className="w-full flex items-center justify-around">
          <Link href={"/"}>
            <div className="flex gap-2">
              <div className="w-32 relative">
                <Image
                  className="w-full h-full"
                  src="/images/training academy logo.png"
                  alt="logo"
                  fill={true}
                />
              </div>
              <h3>
                RSR <br /> Global
              </h3>
            </div>
          </Link>

          <ul className="flex items-center justify-evenly font-bold text-lg gap-7 p-5">
            <li>RSR</li>
            <li>RSR Device</li>
            <li>Learn in Uk</li>
            <li>Work in Uk</li>
            <li>About RSR</li>
            <li>Stakeholders</li>
          </ul>
          <div className="flex gap-2 items-center">
            <Link
              href="/signup"
              className="py-2 px-4 font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl relative bottom-3 flex text-white gap-1"
            >
              <LockKeyhole /> <span>Sign up</span>
            </Link>
            <Link
              href="/login"
              className="py-2 px-4 font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl relative bottom-3 flex text-white gap-1"
            >
              <LockKeyhole /> Sign in
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
