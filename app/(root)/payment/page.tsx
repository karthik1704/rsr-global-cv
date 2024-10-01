import Link from "next/link";
import Image from "next/image";
import img from "@/public/payment/creditcard.png";
import { redirect } from "next/navigation";
import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";

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
  <div className="w-full lg:w-3/5">
  <div className="text-2xl md:text-3xl font-bold capitalize text-center lg:text-left">
    Welcome {user?.first_name} {user?.last_name}
  </div>
  <div className="w-full mx-auto px-auto my-10 lg:ml-28">
    <h1 className="text-2xl font-bold mb-2">Payment: £10</h1>
    <p className="text-gray-700 mb-4">
    You're about to make a payment of £10. Please confirm to proceed with the transaction securely through our Payment Gateway.
    </p>
    <Link href={"/payment/pay"} className="block w-full lg:w-24 max-w-xs bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center">
      Pay Now
    </Link>
    <div className="mt-4">
    <Image src={img} width={500} height={250} alt="credit card" className="w-full h-auto " />
  </div>
  </div>

  </div>
</div>
  );
};

export default PaymentPage;