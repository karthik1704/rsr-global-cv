import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Resume from "./resume-form";

import { lessThanExpiryDate } from "@/lib/utils";
import { SERVER_API_URL } from "@/app/constants";
import { ResumeType } from "./typings";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";

export async function getUser() {
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


export async function getResume(id:string) {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");
  console.log('re running');
  const res = await fetch(`${SERVER_API_URL}/resumes/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    next: {
      tags: ["Resume"],
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    console.log("error");
    redirect('/login')

  }

  if (res.status === 401) {
    redirect('/login')
  }
  if (res.status !== 200) {
    // redirect("/resume/[id]");
    // redirect('/login')
    console.log("resume",res);
  }

  const resume = await res.json();

  return resume;
}


const ResumeEditPage = async ({params:{id}}:{params:{id:string;}}) => {
  const user: User = await getUser();
  const resume:ResumeType = await getResume(id);
  
  return (
    <>
      <div>
      <Suspense fallback={<Loader />}>
        <Resume resume={resume}/>
      </Suspense>
      </div>
    </>
  );
};

export default ResumeEditPage;
