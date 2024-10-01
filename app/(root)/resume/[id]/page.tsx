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
export async function getResume(id) {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  console.log(access);
  const res = await fetch(`${SERVER_API_URL}/resumes/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    next: {
      tags: ["Resume"],
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    // redirect("/resume/[id]");
    // redirect('/resume')
  }
  if (res.status !== 200) {
    // redirect("/resume/[id]");
    // redirect('/login')
    console.log("resume",res);
  }

  const resumes = await res.json();
  console.log('resume',resumes);

  return resumes;
}

type ResumeType = {};

const Page = async ({params:{id}}) => {
  console.log('id', id)
  const user: Data = await getData();
  const resume:ResumeType = await getResume(id)
  
  return (
    <>
      <div>
        <Resume resume={resume}/>
      </div>
    </>
  );
};

export default Page;
