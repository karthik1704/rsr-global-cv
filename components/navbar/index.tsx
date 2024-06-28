import Link from "next/link";
import { LockKeyhole } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Logo } from "@/public/images";

const Navbar = () => {
  return (
    <>
      <nav className="w-full grid items-center h-24 shadow-inner">
        <div className="w-full flex items-center justify-around">
          <Link href={"./stepper"}>
            <div className="flex gap-2">
              <div className="w-20">
                <img
                  className="w-full h-full"
                  src={`${Logo}`}
                  alt="logo"
                />
              </div>
              <h3>
                CV Creation
              </h3>
            </div>
          </Link>

          <ul className="flex items-center justify-evenly font-bold text-lg gap-7 p-5">
            <li >RSR</li>
            <li>RSR Device</li>
            <li>Learn in Uk</li>
            <li>Work in Uk</li>
            <li>About RSR</li>
            <li>Stakeholders</li>
          </ul>
          <div className="flex gap-2">
          <button className="py-2 px-4 font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl relative bottom-3 flex text-white gap-1">
          <LockKeyhole /> <span>Sign up</span>
          </button>
          <button className="py-2 px-4 font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl relative bottom-3 flex text-white gap-1">
          <LockKeyhole /> Sign in
          </button>

          </div>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
