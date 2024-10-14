import Image from "next/image";
import { dateFormatter } from "@/lib/utils";
import { ResumeType } from "./typings";
import { SERVER_API_URL, SERVER_IMAGE_URL } from "@/app/constants";

type PreviewProps = {
  data: ResumeType;
  handleNext: () => void;
  // handleEdit: () => void;
  image: string;
};

const Preview = ({ data, handleNext, image,  }: PreviewProps) => {
  console.log(data);
  const handleClick = () => {
    handleNext();
  };
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl text-center">
          {" "}
          CV Preview
        </h1>
        <div className=" flex col bg-slate-100">
          {!!data.resume_image && (
            <div className="mx-10 my-5">
              <Image
                src={`${SERVER_IMAGE_URL}${data.resume_image}`}
                height={150}
                width={150}
                alt=""
                className="h-32 w-40 rounded-full border-2 border-gray-700"
              />
            </div>
          )}
          <div className=" flex-col pl-10 w-full">
            <p className="block font-semibold text-base my-3">
              <span className="text-2xl font-bold text-gray-700 cont capitalize">
                {data.first_name} {data.last_name}
              </span>
            </p>

            <hr className="border-b-2 border-slate-500 w-10/12" />
            <div className=" w-5/6 flex my-2">
              <p className="text-black font-semibold text-base head ">
                Date of birth :{" "}
                <span className="text-base cont font-medium">
                  {new Date(data.date_of_birth).toLocaleDateString("en-GB")}
                </span>
              </p>
              {data.contact_number ? (
                <p className="text-black font-semibold text-base head mx-5">
                  | Contact Number :{" "}
                  <span className="text-base font-medium cont">
                    {data.contact_number}
                  </span>
                </p>
              ) : null}
            </div>

            <div className=" w-5/6 flex my-2">
              <p className="text-black font-semibold text-base head ">
                Nationality :{" "}
                <span className="text-base cont font-medium capitalize">
                  {data.nationality}
                </span>
              </p>
              {data.email_address ? (
                <p className="text-black font-semibold text-base head mx-5">
                  | Email - Id :{" "}
                  <span className="text-base font-medium cont">
                    {data.email_address}
                  </span>
                </p>
              ) : null}
            </div>

            <div className="w-5/6">
              <p className="text-black font-semibold text-base">
                Address :{" "}
                <span className="text-base font-medium cont capitalize">
                  {data.address_line_1}, {data.address_line_2}
                </span>{" "}
                <span className=" text-base font-medium cont capitalize">
                  {data.city}, {data.postal_code} {data.country}
                </span>
              </p>
              {data.responsibilities ? (
                <div className="flex flex-col py-2">
                  <p className="block text-black font-semibold text-base head flex-shrink-0 w-full">
                    About me :
                  </p>
                  <span className="block font-medium text-black text-base flex-grow cont">
                    {data.responsibilities}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="pl-8 pr-28">
          {data.job_applied_for && (
            <div className="flex my-2 justify-start items-center">
              <p className="text-black font-semibold text-base ">
                Job applied for :
              </p>
              <span className=" px-2 block font-medium text-black text-base capitalize">
                {data.job_applied_for}
              </span>
            </div>
          )}

          {!!data.experiences?.length && (
            <>
              <p className="block text-black font-extrabold text-2xl uppercase">
                Work Experience
              </p>
              <hr className="border-b-2 border-slate-500" />

              {data.experiences.map((exp, index) => (
                <div key={exp.id}>
                  <div className="flex justify-start w-3/5 pt-2">
                    <p className="text-gray-700 font-medium text-base">
                      {dateFormatter(exp.from_date)} {"-"}
                    </p>
                    <p className="text-gray-700 font-medium text-base">
                      {exp.to_date
                        ? dateFormatter(exp.to_date)
                        : "Currently Working"}
                    </p>
                    <p className="text-gray-700 font-medium text-base">
                      , {exp.location}
                    </p>
                  </div>
                  <div className="w-4/5">
                    <p className="text-gray-700 font-semibold text-2xl uppercase">
                      {exp.occupation}{" "}
                      <span className="text-gray-700 font-medium capitalize">
                        {exp.employer}
                      </span>
                    </p>
                  </div>
                  <hr className="border-b-1 border-slate-500" />

                  <p className="text-black font-semibold text-base py-2">
                    {" "}
                    {exp.employer} :{" "}
                    <span className="block font-medium text-base capitalize">
                      {exp.about_company}
                    </span>
                  </p>

                  <p className="text-black font-semibold text-base py-2">
                    {" "}
                    Duties & Responsibilities :{" "}
                    <span className="block font-medium text-base capitalize">
                      {exp.responsibilities}
                    </span>
                  </p>

                  <div className="flex justify-start w-5/6 py-2">
                    <p className="text-black font-semibold text-base ">
                      Address :{" "}
                      <span className="font-medium text-base capitalize">
                        {exp.location}
                      </span>
                    </p>
                    <p className="text-black font-semibold text-base mx-5">
                      | Website :{" "}
                      <span className="font-medium text-base">
                        {exp.website}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {!!data.education.length && (
          <div className="pl-8 pr-28">
            <p className="block text-black font-extrabold text-2xl mt-6 uppercase">
              Education and Training
            </p>
            <hr className="border-b-2 border-slate-500" />
            {data.education.map((educ, index) => (
              <div key={educ.id}>
                <div>
                  <div className="flex justify-start w-3/5 mt-2">
                    <p className="text-gray-700 font-medium text-base">
                      {dateFormatter(educ.from_date)}{" "}
                    </p>
                    <p className="text-gray-700 font-medium text-base ">
                      {" "}
                      - {dateFormatter(educ.to_date)}
                    </p>
                    <p className="text-gray-700 font-medium text-base capitalize">
                      , {educ.country}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-semibold text-2xl uppercase">
                  {" "}
                  {educ.title_of_qualification}
                  <span className="text-gray-700 font-medium text-lg ml-2 capitalize">
                    {educ.organization_name}
                  </span>
                </p>
                <hr className="border-b-1 border-slate-500" />
              </div>
            ))}
          </div>
        )}

        {!!data?.language_skills?.language && (
          <div className="className pl-8 pr-28">
            <p className="block text-black font-bold text-2xl mt-6 uppercase">
              Language Skills
            </p>
            <hr className="border-b-2 border-slate-500" />

            <p className="block text-lg font-bold text-black my-3">
              Languages Known :{" "}
              <span className="text-base font-normal text-black cont capitalize">
                {data.language_skills.language}
              </span>
            </p>
            {/* <p className="block text-base text-black my-3">
              Other language : <span className="text-lg font-bold text-black cont capitalize">{data.language.otherlanguage}</span>
              </p> */}
          </div>
        )}

        {!!data.training_awards.length && (
          <div className="pl-8 pr-28">
            <p className="block text-black font-bold text-2xl mt-6 uppercase">
              Additional Information
            </p>
            <hr className="border-b-2 border-slate-500" />
            <p className="block text-black font-bold text-2xl py-4">
              Honors & Awards
            </p>

            {data.training_awards.map((train, index) => (
              <div key={index}>
                {/* <p className="text-gray-700 font-semibold text-base py-2">
              {" "}
                {train.title}
            </p> */}
                <div className="flex justify-start w-4/5">
                  <p className="text-gray-700 text-base">
                    {dateFormatter(train.from_date)} {"-"}
                  </p>
                  <p className="text-gray-700 text-base">
                    {dateFormatter(train.to_date)}
                  </p>
                 
                  {/* <p className="text-gray-700 font-medium text-base capitalize">,{' '}
                {exp.location}
                  </p> */}
                </div>
                <div className="flex">
                  <p className="text-gray-700 font-semibold text-base capitalize">
                    {" "}
                    {train.title}
                    {","}
                  </p>
                  <p className="text-gray-700 font-semibold text-base capitalize">
                    {" "}
                    {train.awarding_institute }{","} 
                  </p>
                  <p className="text-gray-700 font-semibold text-base capitalize">
                  {train.location}
                 
                  </p>
                </div>
              </div>
            ))}
            <hr className="border-b-1 border-slate-500" />
          </div>
        )}

        {data.others.map((newItem, index) => (
          <div key={index} className="pl-8 pr-28">
            <p className="block text-black font-bold text-2xl mt-6 uppercase">Others</p>

            <hr className="border-b-2 border-slate-500" />
            <h4 className="text-lg font-bold text-black capitalize">
                {newItem.sectiontitle}
              </h4>
            <p className="block text-lg font-bold text-black my-3">
              Title :{" "}
              <span className="text-base font-normal text-black capitalize">
                {newItem.sectiontitle}
              </span>
            </p>
            <p className="block text-lg font-bold text-black my-3">
              Description :{" "}
              <span className="text-base font-normal text-black capitalize">
                {newItem.description}
              </span>
            </p>
          </div>
        ))}

        {!!data.driving_license.length && (
          <>
            <div className="pl-8 pr-28">
              <p className="block text-black font-bold text-2xl mt-6 uppercase">
                Driving License
              </p>
              <hr className="border-b-2 border-slate-500" />
            </div>
            {data.driving_license.map((lice, index) => (
              <div key={index} className="pl-8 pr-28">
                <p className="block text-lg font-bold text-black my-3">
                  Vehicle Type :{" "}
                  <span className="text-black text-base font-normal">
                    {lice.license_type}
                  </span>
                </p>
                <p className="block text-lg font-bold text-black my-3">
                  License Validation :{" "}
                  <span className="text-black text-base font-normal">
                    {dateFormatter(lice.license_issued_date)} to {dateFormatter(lice.license_expiry_date)}
                  </span>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default Preview;
