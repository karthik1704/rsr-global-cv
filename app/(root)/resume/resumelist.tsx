import { Clock2, FilePlus, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResumeList = ({ resumes }) => {
  return (
    <div>
      ResumeList
      {resumes.map((resume) => (
        <Link href={`/resume/${resume.id}`} key={resume.id}>
          <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 flex-col justify-evenly">
              <div className="text-gray-600 space-y-6 flex-col items-center">
                <p className="flex">
                  <span>
                    <FilePlus color="#824e83" size={32} />
                  </span>
                  <span className="pl-3 text-2xl font-bold text-black">
                    Resumes :{" "}
                    <span className=" text-lg font-normal">
                      {resume.resume_title}
                    </span>
                  </span>
                </p>

                <p className="flex">
                  <span>
                    <Clock2 color="#32b34c" size={32} />
                  </span>
                  <span className="pl-3 text-2xl font-bold text-black">
                    Validate Till :{" "}
                    <span className=" text-lg font-normal">28/12/2024</span>{" "}
                  </span>
                </p>

                <p className="flex">
                  <span>
                    <WalletCards color="#6e8d1c" size={32} />
                  </span>
                  <span className="pl-3 text-2xl font-bold text-black">
                    Payment : <span className=" text-lg font-normal">Done</span>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResumeList;
