
import CheckoutForm from "./checkout-from";
import { cookies } from "next/headers";
import { SERVER_API_URL } from "@/app/constants";
import { redirect } from "next/navigation";
import PaymentWarpper from "./payment-warpper";





export async function getUser() {
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


const CheckoutPage = async () => {
  const user = await getUser();
  return (
    <div className="flex justify-center items-center p-10 w-full">
        <PaymentWarpper user={user} />
    </div>
  );
};

export default CheckoutPage;
