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
        <div className="flex flex-col lg:flex-row bg-slate-100">
          {!!data.resume_image && (
            <div className="mx-auto lg:mx-10 my-auto xl:my-5">
              <Image
                src={`${SERVER_IMAGE_URL}${data.resume_image}`}
                height={150}
                width={150}
                alt=""
                className="lg:h-32 lg:w-40 h-32 w-32 rounded-full border-2 border-gray-700"
              />
            </div>
          )}
          <div className=" flex-col pl-10 w-full">
            <p className="block font-semibold text-base my-3">
              <span className="lg:text-2xl text-xl font-bold text-gray-700 cont capitalize">
                {data.first_name} {data.last_name}
              </span>
            </p>

            <hr className="border-b-2 border-slate-500 w-10/12" />
            <div className="flex md:flex-row flex-col my-2">
              <p className="text-black font-semibold lg:text-base text-sm head ">
                Date of birth :{" "}
                <span className="lg:text-base text-sm font-medium">
                  {new Date(data.date_of_birth).toLocaleDateString("en-GB")}
                </span>
              </p>
              {data.contact_number ? (
                <p className="text-black font-semibold lg:text-base text-sm head md:ml-5">| Contact Number :{" "}
                  <span className="lg:text-base text-sm font-medium cont">
                    {data.contact_number}
                  </span>
                </p>
              ) : null}
            </div>

            <div className=" w-5/6 flex md:flex-row flex-col my-2">
              <p className="text-black font-semibold lg:text-base text-sm head ">
                Nationality :{" "}
                <span className="lg:text-base text-sm font-medium capitalize">
                  {data.nationality}
                </span>
              </p>
              {data.email_address ? (
                <p className="text-black font-semibold lg:text-base text-sm head md:mx-5">
                  | Email - Id :{" "}
                  <span className="lg:text-base text-sm font-medium cont">
                    {data.email_address}
                  </span>
                </p>
              ) : null}
            </div>

            <div className="w-5/6">
              <p className="text-black font-semibold lg:text-base text-sm">
                Address :{" "}
                <span className="lg:text-base text-sm font-medium cont capitalize">
                  {data.address_line_1}, {data.address_line_2}
                </span>{" "}
                <span className=" lg:text-base text-sm font-medium cont capitalize">
                  {data.city}, {data.postal_code} {data.country}
                </span>
              </p>
              {data.responsibilities ? (
                <div className="flex flex-col py-2">
                  <p className="block text-black font-semibold lg:text-base text-sm head flex-shrink-0 w-full">
                    About me :
                  </p>
                  <span className="block font-medium text-black lg:text-base text-sm flex-grow cont">
                    {data.responsibilities}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="pl-8 lg:pr-28 pr-8">
          {data.job_applied_for && (
            <div className="flex my-2">
              <p className="text-black font-semibold lg:text-base text-sm ">
                Job applied for :
              </p>
              <span className=" px-2 block font-medium text-black lg:text-base text-sm capitalize">
                {data.job_applied_for}
              </span>
            </div>
          )}

          {!!data.experiences?.length && (
            <>
              <p className="block text-black font-extrabold lg:text-xl text-lg uppercase">
                Work Experience
              </p>
              <hr className="border-b-2 border-slate-500" />

              {data.experiences.map((exp, index) => (
                <div key={exp.id}>
                  <div className="flex justify-start pt-2">
                    <p className="text-gray-700 font-medium lg:text-base text-sm">
                      {dateFormatter(exp.from_date)} <span className="md:mx-1"> - </span>
                    </p>
                    <p className="text-gray-700 font-medium lg:text-base text-sm">
                      {exp.to_date
                        ? dateFormatter(exp.to_date)
                        : "Currently Working"}
                    </p>
                    
                  </div>
                  <div className="w-4/5">
                    <p className="text-gray-700 font-semibold lg:text-xl text-lg uppercase">
                      {exp.occupation}{" "}
                      <span className="text-gray-700 font-medium capitalize">
                        {exp.employer}
                      </span>
                    </p>
                  </div>
                  <hr className="border-b-1 border-slate-500" />

                  <p className="text-black font-semibold lg:text-base text-sm py-2">
                    {" "}
                    {exp.employer} :{" "}
                    <span className="block font-medium lg:text-base text-sm capitalize">
                      {exp.about_company}
                    </span>
                  </p>

                  <p className="text-black font-semibold lg:text-base text-sm py-2">
                    {" "}
                    Duties & Responsibilities :{" "}
                    <span className="block font-medium lg:text-base text-sm capitalize">
                      {exp.responsibilities}
                    </span>
                  </p>

                  <div className="flex flex-col lg:flex-row py-2">
                    <p className="text-black font-semibold text-base ">
                      Address :{" "}
                      <span className="font-medium text-base capitalize">
                        {exp.location}
                      </span>
                    </p>
                    <p className="text-black font-semibold lg:text-base text-sm lg:mx-5">
                      | Website :{" "}
                      <span className="font-medium lg:text-base text-sm">
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
          <div className="pl-8 lg:pr-28 pr-8">
            <p className="block text-black font-extrabold lg:text-xl text-lg mt-6 uppercase">
              Education and Training
            </p>
            <hr className="border-b-2 border-slate-500" />
            {data.education.map((educ, index) => (
              <div key={educ.id}>
                <div>
                  <div className="flex justify-start mt-2">
                    <p className="text-gray-700 font-medium lg:text-base text-sm">
                      {dateFormatter(educ.from_date)}{" "}
                    </p>
                    <p className="text-gray-700 font-medium lg:text-base text-sm ">
                    <span className="md:mx-1"> - </span> {dateFormatter(educ.to_date)}
                    </p>
                    <p className="text-gray-700 font-medium lg:text-base text-sm capitalize">
                      , {educ.country}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-semibold lg:text-xl text-lg uppercase">
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
          <div className="pl-8 lg:pr-28 pr-8">
            <p className="block text-black font-bold lg:text-xl text-lg mt-6 uppercase">
              Language Skills
            </p>
            <hr className="border-b-2 border-slate-500" />

            <p className="block lg:text-base text-sm font-bold text-black my-3">
              Languages Known :{" "}
              <span className="lg:text-base text-sm font-normal text-black cont capitalize">
                {data.language_skills.language}
              </span>
            </p>
            {/* <p className="block text-base text-black my-3">
              Other language : <span className="text-lg font-bold text-black cont capitalize">{data.language.otherlanguage}</span>
              </p> */}
          </div>
        )}

        {!!data.training_awards.length && (
          <div className="pl-8 lg:pr-28 pr-8">
            <p className="block text-black font-bold lg:text-xl text-lg mt-6 uppercase">
              Additional Information
            </p>
            <hr className="border-b-2 border-slate-500" />
            <p className="block text-black font-bold lg:text-xl text-lg py-4">
              Honors & Awards
            </p>

            {data.training_awards.map((train, index) => (
              <div key={index}>

                <div className="flex justify-start">
                  <p className="text-gray-700 lg:text-base text-sm">
                    {dateFormatter(train.from_date)} <span className="md:mx-1"> - </span>
                  </p>
                  <p className="text-gray-700 lg:text-base text-sm">
                    {dateFormatter(train.to_date)}
                  </p>
                 
                </div>
                <div className="flex">
  <p className="text-gray-700 font-semibold lg:text-base text-sm capitalize">
    {train.title},{" "}
  </p>
  <p className="text-gray-700 font-semibold lg:text-base text-sm capitalize">
    {train.awarding_institute},{" "}
  </p>
  <p className="text-gray-700 font-semibold lg:text-base text-sm capitalize">
    {train.location}
  </p>
</div>
              </div>
            ))}
            <hr className="border-b-1 border-slate-500" />
          </div>
        )}

<p className="block text-black font-bold lg:text-xl text-lg mt-6 uppercase pl-8">Others</p>
        {data.others.map((newItem, index) => (
          <div key={index} className="pl-8 lg:pr-28 pr-8">
           

            <hr className="border-b-2 border-slate-500" />
            <h4 className="text-lg font-bold text-black capitalize">
                {newItem.sectiontitle}
              </h4>
            <p className="block lg:text-base text-sm font-bold text-black my-3">
              Title :{" "}
              <span className="lg:text-base text-sm font-normal text-black capitalize">
                {newItem.sectiontitle}
              </span>
            </p>
            <p className="block lg:text-base text-sm font-bold text-black my-3">
              Description :{" "}
              <span className="lg:text-base text-sm font-normal text-black capitalize">
                {newItem.description}
              </span>
            </p>
          </div>
        ))}

        {!!data.driving_license.length && (
          <>
            <div className=" pl-8 lg:pr-28 pr-8">
              <p className="block text-black font-bold text-2xl mt-6 uppercase">
                Driving License
              </p>
              <hr className="border-b-2 border-slate-500" />
            </div>
            {data.driving_license.map((lice, index) => (
              <div key={index} className="pl-8 pr-28">
                <p className="block lg:text-base text-sm font-bold text-black my-3">
                  Vehicle Type :{" "}
                  <span className="text-black lg:text-base text-sm font-normal">
                    {lice.license_type}
                  </span>
                </p>
                <p className="block lg:text-base text-sm font-bold text-black my-3">
                  License Validation :{" "}
                  <span className="text-black lg:text-base text-sm font-normal">
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
