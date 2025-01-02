import Link from "next/link";
import Image from "next/image";
import img from "@/public/payment/payment.jpg";
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
  <div className="w-full mx-auto px-auto my-10 lg:ml-28 font-bold">
    <h1 className="text-2xl font-bold mb-2">Payment: £20</h1>
    <p className="text-gray-700 text-justify">
    You are about to make a payment of £20. Please confirm to proceed with the transaction securely through our Payment Gateway.
    </p>
    <p className="text-gray-700 text-justify">
    You must authorize your own card online to allow foreign remittance and ensure sufficient funds for a smooth transaction.
    </p>
    {/* <p className="text-gray-700 mb-4 text-justify">
    A discounted rate of £10 for the CV builder is available until 31 December 2024. Be sure to take advantage of this offer to complete your CV. The new rate will take effect from 1 January 2025.
    </p> */}
    <Link href={"/payment/pay"} className="block w-full lg:w-24 max-w-xs bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center">
      Pay Now
    </Link>
    <div className="mt-4">
    <Image src={img} width={500} height={250} alt="credit card" className="w-full h-96" />
  </div>
  </div>

  </div>
</div>
  );
};

export default PaymentPage;