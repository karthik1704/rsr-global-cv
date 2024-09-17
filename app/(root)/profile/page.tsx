import { CircleCheckBig, Clock2, FilePlus, Mail, MapPin, MapPinCheck, Phone, SquareMenu, UserCheck, WalletCards } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Profile =() =>{
    return(
      <div>
  <h1 className="text-3xl font-semibold text-gray-800 text-center">Profile</h1>
        <div className="flex my-10">

        <div className="w-9/12 p-12 mx-auto space-y-6 shadow-2xl bg-slate-50 border-gray-300 text-justify my-7 rounded-lg">

        <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 flex justify-evenly">
        <div className="text-gray-600 space-y-2 flex-col items-center">
          <p className="flex">
       <span><UserCheck color="#121d91" size={32}/></span> 
         <span className="pl-3 text-2xl font-bold text-black">R.cameron James</span>
         </p>

         <p className="text-lg text-black flex items-center space-x-2">
  <span><CircleCheckBig color="#32b34c" /></span>
  <span>Joined: 28/03/2021</span>
</p>
        </div>

        <div className="text-gray-600 space-y-1 flex-col items-center">
          <p className="flex">
        <span><Phone /></span>
        <span className="pl-3 text-black">+351 598 456 8734</span> 
        </p>
         <p className="flex">
        <span><Mail /></span>
        <span className="pl-3 text-black">cameron@gmail.com</span> 
        </p>
        <p className="flex">
        <span><MapPinCheck /></span>
        <span className="pl-3 text-black">United India</span> 
        </p>
        </div>

<div className="text-gray-600 space-y-1 flex-col items-center">
  <p className="flex flex-col items-start">
    <span className="flex items-center">
      <MapPin />
      <span className="pl-3 text-black">15208 west 119th street,</span>
    </span>
    <span className="pl-9 text-black">Guindy, Chennai 607846</span>
  </p>
</div>

      </div>
    </div>

    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 flex-col justify-evenly">
        <div className="text-gray-600 space-y-6 flex-col items-center">
          <p className="flex">
       <span><FilePlus color="#824e83" size={32}/></span> 
         <span className="pl-3 text-2xl font-bold text-black">Resumes : <span className=" text-lg font-normal">file_name</span></span>
         </p>

         <p className="flex">
  <span><Clock2 color="#32b34c" size={32}/></span>
  <span className="pl-3 text-2xl font-bold text-black">Validate Till : <span className=" text-lg font-normal">28/12/2024</span> </span>
</p>

<p className="flex">
  <span><WalletCards color="#6e8d1c" size={32}/></span>
  <span className="pl-3 text-2xl font-bold text-black">Payment : <span className=" text-lg font-normal">Done</span> </span>
</p>
        </div>

      </div>
    </div>

        </div>

        </div>
        </div>
    )
}

export default Profile