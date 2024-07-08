import Link from "next/link";
import { LockKeyhole } from "lucide-react";
// import { UserRound } from "lucide-react";
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
import { logout } from "@/app/actions";

const Navbar = ({ user }: { user: User | null }) => {
  return (
    <>
      <nav className="w-full grid items-center h-24 shadow-inner ">
        <div className="w-full flex items-center justify-around">
          <Link href={"/"}>
            <div className="flex gap-2">
              <div className="w-32 h-20 relative">
                <Image
                  className="w-full h-full"
                  src="/images/training academy logo.png"
                  alt="logo"
                  fill={true}
                />
              </div>
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
          <div className="flex gap-2 items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <Avatar>
                    <AvatarImage src="null" alt="@shadcn" />
                    <AvatarFallback>{`${user.first_name[0].toUpperCase()}${user.last_name[0].toUpperCase()}`}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>
                    <Link href="/">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/cv">Create Cv</Link>
                  </DropdownMenuItem>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
