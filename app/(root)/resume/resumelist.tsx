import { Clock2, FilePlus, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ResumeType } from "./[id]/typings";

type Props = {
  resumes: ResumeType[];
};

const ResumeList = ({ resumes }: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold text-gray-800 mb-4">
        Resume List
      </h1>
      {resumes.map((resume) => (
        <Link href={`/resume/${resume.id}`} key={resume.id}>
          <div className="w-full box-border shadow-2xl mx-auto overflow-hidden mb-4 transition-transform transform hover:scale-105">
            <div className="p-6 flex flex-col justify-evenly">
              <div className="text-gray-600 space-y-4 flex-col items-start">
                <div className="flex items-center justify-evenly ml-3">
                  <p className="flex items-center">
                    <FilePlus className="text-green-700" size={32} />
                    <span className="pl-3 text-xl font-bold text-black">
                      Resumes:{" "}
                      <span className="text-lg font-normal">
                        {resume.resume_title}
                      </span>
                    </span>
                  </p>
                  <Link
                    href={`/resume/${resume.id}`}
                    className="flex w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit
                  </Link>
                </div>

                <p className="flex items-center ml-44">
                  <Clock2 className="text-green-700" size={32} />
                  <span className="pl-3 text-xl font-bold text-black">
                    Validate Till :{" "}
                    <span className="text-lg font-normal">28/12/2024</span>
                  </span>
                </p>

                <p className="flex items-center ml-44">
                  <WalletCards className="text-green-700" size={32} />
                  <span className="pl-3 text-xl font-bold text-black">
                    Payment : <span className="text-lg font-normal">Done</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {/* <Link
              href="/signup"
              className="flex w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Edit
            </Link> */}
    </div>
  );
};

export default ResumeList;

{
  /* <div className="max-w-4xl mx-auto p-4">
  <h1 className="text-2xl text-center font-semibold text-gray-800 mb-4">Resume List</h1>
  <div className="flex justify-center gap-4">
    {resumes.map((resume) => (
      <Link href={`/resume/${resume.id}`} key={resume.id}>
      
  <div className="flex space-x-4 gap-4 mt-4">
  <div className="mx-auto overflow-hidden mb-4 transition-transform transform hover:scale-105 shadow-lg rounded-lg p-10 bg-white flex items-center">
  <FilePlus className="text-green-700" size={32} />
  <div className="ml-4">  
    <h2 className="text-lg font-semibold text-gray-800">Resumes </h2>
    <p className="text-gray-600">File_name</p>
  </div>
</div>

    <div className="mx-auto overflow-hidden mb-4 transition-transform transform hover:scale-105 shadow-lg rounded-lg p-10 bg-white flex items-center">
    <Clock2 className="text-green-700" size={32} />
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-gray-800">Validate Till  </h2>
      <p className="text-gray-600">28/12/2024</p>
      </div>
    </div>

    <div className="mx-auto overflow-hidden mb-4 transition-transform transform hover:scale-105 shadow-lg rounded-lg p-10 bg-white flex items-center">
    <WalletCards className="text-green-700" size={32} />
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-gray-800">Payment  </h2>
      <p className="text-gray-600">Done</p>
    </div>
    </div>

  </div>
  <Link
              href="/signup"
              className="flex w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Edit
            </Link>
  </Link>
    ))}
  </div>
</div> */
}
