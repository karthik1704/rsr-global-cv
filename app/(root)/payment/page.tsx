import Link from "next/link";
import Image from "next/image";
import img from "@/public/payment/payment.jpg";
import { redirect } from "next/navigation";
import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import {Card,CardTitle,CardDescription} from "@/components/ui/card";
import {Accordion} from "@/components/ui/accordion";
import { Bot, Brain, Cpu, CreditCard, Sparkles } from "lucide-react";

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

  if (res.status === 401) {
    redirect ('/login');
  }
  if (res.status !== 200) {
    return null;
  }


  const user = await res.json();
  console.log(user);

  return user;
}

type Data = User | null;


const PaymentPage = async () => {

  const user:Data = await getData();

  return (
    

<div className="flex-row lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-4 space-y-4 lg:space-y-0 lg:space-x-8">
<Card className="border-2 p-10">
  <div className="w-full lg:w-3/5">

  <div className="flex items-center justify-between">
  <div>
  <CardTitle className="capitalize text-3xl font-bold lg:pl-28 lg:pt-7">Welcome {user?.first_name} {user?.last_name}</CardTitle>
  <CardDescription className="lg:pl-28 text-base">Complete your payment to continue</CardDescription>
  </div>
  <Accordion className="text-xl bg-green-600 p-3 text-white rounded-full">£20</Accordion>
  </div>
  {/* <div className="text-2xl md:text-3xl font-bold capitalize lg:pl-28 lg:pt-7">
    Welcome {user?.first_name} {user?.last_name}
  </div> */}
  <div className="w-full mx-auto px-auto my-10 lg:ml-28 space-y-4 font-bold">
    {/* <h1 className="text-2xl font-bold mb-2">Payment: £20</h1> */}
    <p className="text-gray-700 text-justify">
    You are about to make a payment of £20. Please confirm to proceed with the transaction securely through our Payment Gateway.
    </p>
    <p className="text-gray-700 text-justify">
    You must authorize your own card online to allow foreign remittance and ensure sufficient funds for a smooth transaction.
    </p>
    {/* <p className="text-gray-700 mb-4 text-justify">
    A discounted rate of £10 for the CV builder is available until 31 December 2024. Be sure to take advantage of this offer to complete your CV. The new rate will take effect from 1 January 2025.
    </p> */}
    <Link href={"/payment/pay"} className="flex justify-center text-xl items-center px-5 w-full lg:w-36 max-w-xs bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 text-center">
    <CreditCard className="mr-2 h-5 w-5" />
      Pay Now
    </Link>

    <Card className="border-2 p-10 bg-gradient-to-br from-purple-50 to-blue-50">
          {/* <CardHeader> */}
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-500" />
              AI Features Coming Soon
            </CardTitle>
            <CardDescription>Get ready for an enhanced experience powered by AI</CardDescription>
          {/* </CardHeader> */}
          {/* <CardContent> */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
                <Bot className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Resume Creation</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
                <Brain className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="font-medium">Smart Analytics</h3>
                  <p className="text-sm text-muted-foreground">Personalized insights</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
                <Cpu className="h-8 w-8 text-indigo-500" />
                <div>
                  <h3 className="font-medium">Auto Processing</h3>
                  <p className="text-sm text-muted-foreground">Instant Resume Builder</p>
                </div>
              </div>
            </div>
          {/* </CardContent> */}
        </Card>
        
    <div className="mt-4">
    <Image src={img} width={500} height={250} alt="credit card" className="w-full h-96" />
  </div>
  </div>

  </div>
  </Card>

  
</div>
  );
};

export default PaymentPage;