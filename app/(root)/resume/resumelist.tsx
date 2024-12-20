import {
  CircleCheckBig,
  Clock2,
  FilePlus,
  Mail,
  MapPin,
  MapPinCheck,
  Pencil,
  Phone,
  UserCheck,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { ResumeType } from "./[id]/typings";
import { dateFormatter, lessThanExpiryDate } from "@/lib/utils";
import { cookies } from "next/headers";
import { SERVER_API_URL } from "@/app/constants";
import { redirect } from "next/navigation";

type Props = {
  resumes: ResumeType[];
  user: User;
};

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
    return {};
  }

  const user = await res.json();
  console.log(user);

  if (user.expiry_date && !lessThanExpiryDate(user.expiry_date)) {
    redirect("/payment");
  }

  const res1 = await fetch(`${SERVER_API_URL}/resumes/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
  });

  if (!res1.ok) {
    console.log("error");
    return { user };
  }

  const resumes = await res1.json();
  console.log(resumes);

  return { user, resumes };
}
type Data = { user: User | null; resumes: ResumeType[] };

const ResumeList = ({ resumes, user }: Props) => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold text-green-700 my-4">
        Profile
      </h1>

      {resumes.map((resume) => (
        <div key={resume.id}>
          <div className="w-full flex items-center justify-center">
            <div className="p-10 flex flex-col border w-11/12 mx-auto overflow-hidden mb-4 border-gray-300 rounded-lg shadow-lg bg-right-bottom bg-cover bg-[url('/section/background.webp')]">
              <div className="w-full mx-auto transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 md:p-6 flex flex-col lg:flex-row justify-evenly">
                  <div className="text-gray-600 space-y-2 flex-col items-center">
                    {user && user.first_name && user.last_name ? (
                      <p className="flex items-center space-x-2">
                        <span>
                          <UserCheck color="#121d91" />
                        </span>
                        <span className="pl-3 lg:text-lg text-base font-bold text-black capitalize space-x-2">
                          {`${user.first_name} ${user.last_name}`}
                        </span>
                      </p>
                    ) : null}

                    <p className="lg:text-lg text-base text-black flex items-center space-x-2">
                      <span>
                        <CircleCheckBig color="#32b34c" />
                      </span>
                      <span className=" pl-3 lg:text-lg text-base text-black flex items-center space-x-2">
                        Joined: {dateFormatter(user.created_at)}
                      </span>
                    </p>
                  </div>

                  <div className="text-gray-600 space-y-2 flex-col items-center">
                    <p className="flex space-x-2">
                      <span>
                        <Phone />
                      </span>
                      <span className="pl-3 text-black">+{user.phone}</span>
                    </p>
                    <p className="flex space-x-2">
                      <span>
                        <Mail />
                      </span>
                      <span className="pl-3 text-black">{user.email}</span>
                    </p>
                    {resumes && resumes[0].country ? (
                      <p className="flex space-x-2">
                        <span>
                          <MapPinCheck />
                        </span>
                        <span className="pl-3 text-black">
                          {`${resumes[0].country}`}
                        </span>
                      </p>
                    ) : null}
                  </div>
                  {resumes && resumes[0] && (
                    <div className="text-gray-600 space-y-2 flex-col items-center">
                      <p className="flex space-x-2 flex-col items-start">
                        {resumes[0].address_line_1 ||
                        resumes[0].address_line_2 ||
                        resumes[0].city ||
                        resumes[0].postal_code ? (
                          <span className="flex items-center space-x-2">
                            {resumes[0].address_line_1 && <MapPin />}
                            <span className="pl-3 text-black">
                              {resumes[0].address_line_1
                                ? `${resumes[0].address_line_1}`
                                : null}
                              {resumes[0].address_line_1 && (
                                <>
                                  {resumes[0].address_line_2 ||
                                  resumes[0].city ||
                                  resumes[0].postal_code
                                    ? ","
                                    : ""}
                                </>
                              )}
                            </span>
                          </span>
                        ) : null}

                        <span className="pl-9 text-black">
                          {resumes[0].address_line_2 &&
                            `${resumes[0].address_line_2}`}
                          {resumes[0].address_line_2 ? ", " : ""}
                          {resumes[0].city && `${resumes[0].city}`}
                          {resumes[0].city ? ", " : ""}
                          {resumes[0].postal_code &&
                            `${resumes[0].postal_code}`}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white transition-transform transform hover:scale-105 w-full my-5 rounded-lg lg:w-1/2 md:w-3/4">
                <div className="p-2 md:p-6 flex-col lg:flex md:flex-col justify-evenly">
                  <div className="p-10 flex">
                    <FilePlus className="text-green-700" size={32} />
                    <div className="flex justify-center flex-col lg:flex-row sm:flex-col">
                      <p className="pl-3 lg:text-lg text-base font-bold text-black">
                        Resumes:{" "}
                        <span className="lg:text-lg text-base font-normal">
                          {resume.resume_title}
                        </span>
                      </p>
                    </div>
                    <Link
                      href={`/resume/${resume.id}`}
                      className="lg:ml-5 ml-5 flex lg:w-24 w-14 h-10 justify-center items-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span className="hidden lg:block">Edit</span>
                      <Pencil size={20} className="block lg:hidden" />
                    </Link>
                  </div>

                  <div className="p-10 flex">
                    <Clock2 className="text-green-700" size={32} />
                    <p className="pl-3 md:px-auto lg:text-lg text-base font-bold text-black">
                      Validate Till:{" "}
                      <span className="lg:text-lg text-base font-normal">
                        {user.expiry_date && dateFormatter(user.expiry_date)}
                      </span>
                    </p>
                  </div>

                  <div className="p-10 flex">
                    <WalletCards className="text-green-700" size={32} />
                    <p className="pl-3 flex flex-col md:flex-row lg:text-lg text-base font-bold text-black">
                      Payment:
                      <span className="lg:text-lg text-base font-normal ml-1">
                        Done
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeList;
