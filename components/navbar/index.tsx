import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/app/(root)/actions";
import { lessThanExpiryDate } from "@/lib/utils";
import { cookies } from "next/headers";
import { SERVER_API_URL } from "@/app/constants";
import { redirect } from "next/navigation";

export async function getData() {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  
  const res = await fetch(`${SERVER_API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    next:{
      tags:['User']
    }
  });

  if (!res.ok) {
    console.log("error");
  }

  
  if (res.status !== 200) {
    return null;
  }



  const user = await res.json();
  console.log(user);
  
  if(user.expiry_date && !lessThanExpiryDate(user.expiry_date)){
    redirect ('/payment');
  }

  return user;
}
type Data = User | null;


const Navbar = async () => {
  const user:Data = await getData();


  return (
    <>
      <nav className="w-full grid items-center h-24 shadow-inner ">
        <div className="w-full flex justify-between">
          <Link href={"/"}>
            <div className="flex ml-7 gap-2">
              <div className="w-48 h-14 relative">
                <Image
                  className="w-full h-full"
                  src="/images/rsr_logo.webp"
                  alt="logo"
                  fill={true}
                />
              </div>
            </div>
          </Link>

          {/* <ul className="flex items-center justify-evenly font-bold text-lg gap-7 p-5">
            <li >RSR</li>
            <li>RSR Device</li>
            <li>Learn in Uk</li>
            <li>Work in Uk</li>
            <li>About RSR</li>
            <li>Stakeholders</li>
          </ul> */}
          <div className="flex gap-2 items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <Avatar className="mr-5">
                    {/* <AvatarImage src="" alt="@shadcn" /> */}
                    {/* <AvatarFallback>{`${user.first_name[0].toUpperCase()}${user.last_name[0].toUpperCase()}`}</AvatarFallback> */}
                    <AvatarFallback>
  {user && user.first_name && user.last_name
    ? `${user.first_name[0]?.toUpperCase() || ""}${user.last_name[0]?.toUpperCase() || ""}`
    : "?"}
</AvatarFallback>

                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                  {user.expiry_date && lessThanExpiryDate(user.expiry_date) && (
                    <>
                      <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/resume">Create Cv</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <form action={logout}>
                      <button type="submit">Logout</button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center p-6 gap-2 sm:gap-6">
                  <Link
                    href="/signup"
                    className="py-2 px-6 rounded-md outline-1 outline outline-offset-0 outline-black text-black bg-white text-md font-bold hover:bg-green-600 hover:outline-none hover:text-slate-100 transition-colors hover:ease-in-out hidden sm:inline-block"
                  >
                    <span>Register</span>
                  </Link>
                  <Link
                    href="/login"
                    className="py-2 px-6 rounded-md outline-1 outline outline-offset-0 outline-white text-white bg-green-600 text-md font-bold hover:bg-green-500 hover:text-slate-100 transition-colors hover:ease-in-out"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
