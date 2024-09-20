import { lessThanExpiryDate } from "@/lib/utils";
import Resume from "./resume-form";
import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function getData() {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  const res = await fetch(`${SERVER_API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    next: {
      tags: ["User"],
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    redirect("/login");
  }
  if (res.status !== 200) {
    redirect("/login");
  }

  const user = await res.json();
  console.log(user);
  if (!user.expiry_date) {
    redirect("/payment");
  }
  if (user.expiry_date && !lessThanExpiryDate(user.expiry_date)) {
    redirect("/payment/renew");
  }

  return user;
}

type Data = User;

const Page = async () => {
  const user: Data = await getData();
  return (
    <>
      <div>
        <Resume />
      </div>
    </>
  );
};

export default Page;
