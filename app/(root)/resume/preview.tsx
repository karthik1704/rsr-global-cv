import Image from "next/image";
import {dateFormatter} from '@/lib/utils'

type PreviewProps = {
  data: {
    firstName: string;
    lastName: string;
    dob: string;
    nationality: string;
    experience: number;
    add1: string;
    add2: string;
    email: string;
    workemail: string;
    about: string;
    city: string;
    code: string;
    country: string;
    position: string;
    companyName: string;
    workfrom: string;
    workto: String;
    location: string;
    workabout: string;
    workwebsite: string;
    workdepartment: String;
    workaddress: string;
    qualification: string;
    organisation: String;
    educationfrom:string;
    educationto:string;
    educationcity: String;
    educationcountry:string;
    Hobbies:string;
    institute :string;
    trainingfrom:string;
    trainingto:string;
    traininglocation:string;
    trainingskills:string;
    jobappliedfor:string;
    experiences: {
      workfrom: string;
      workto: String;
      years: number;
      description: string;
      companyName: string;
      aboutcompany:string;
      about2: string;
      position: string;
      location: string;
      workwebsite: string;
      workdepartment: String;
      workaddress: string;
    }[];
    education:{
      qualification:string;
        organisation:string;
        educationfrom:string;
        educationto:string;
        educationcity:string;
        educationcountry:string;
    }[]
    training: {
      position: string;
      Hobbies:string;
          institute :string;
          trainingfrom:string;
          trainingto:string;
          traininglocation:string;
          trainingskills:string;  
    }[];
  };
};

const Preview = ({ data, handleNext,image }: PreviewProps) => {
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
        <div className="bg1 flex col">
          {!!data.personalInformation.profileImage &&
          <div className="mx-10 my-5">
            <Image src={data.personalInformation.profileImage} height={150} width={150} alt="" className="rounded-full" />
          </div>}
          <div className=" flex-col w-full">
            <div className="flex w-full justify-between">
              <p className="block font-semibold text-base head">
                Name: <span className="text-sm text-gray-700 cont">{data.personalInformation.firstName} {data.personalInformation.lastName}</span>
              </p>
              <p className="block text-black font-semibold text-base head px-28">
                Email Address: <span className="text-sm text-gray-700 cont">{data.personalInformation.email}</span>
              </p>
            </div>
            <hr className="border-b-2 border-slate-500" />
            <div className=" w-5/6 flex my-2">
              <p className="text-black font-semibold text-base head ">
                Date of birth :<span className="text-sm text-gray-700 cont">{new Date(data.personalInformation.dob).toLocaleDateString("en-GB")}</span>
              </p>
              <p className="text-black font-semibold text-base head mx-5">
                | Nationality :<span className="text-sm text-gray-700 cont">{data.personalInformation.nationality}</span>
              </p>
            </div>

            <div className="w-5/6">
              <p className="text-black font-semibold text-base">
                Address :{" "}
                <span className="text-sm text-gray-700 cont">
                  {data.personalInformation.add1}, {data.personalInformation.add2}
                </span>{" "}
                <span className=" text-sm text-gray-700 cont">
                  {data.personalInformation.city}, {data.personalInformation.code}, {data.personalInformation.country}
                </span>
              </p>
              <div className="flex flex-col py-2">
                <p className="block text-black font-semibold text-base head flex-shrink-0 w-full">
                  About me:
                </p>
                <span className="block text-gray-700 text-base flex-grow cont">
                  {data.personalInformation.about}
                </span>
              </div>
            </div>
          </div>
        </div>

{data.jobappliedfor && (
        <div className="flex my-2 justify-start items-center">
        <p className="text-black font-semibold text-base ">
                    Job applied for :
                  </p>
                  <span className=" px-2 block font-semibold text-gray-700 text-sm">
                  {data.jobappliedfor}
                </span>
        </div>
)}

        {!!data.workExperience.length && (
          <>
            <p className="block text-black font-bold text-lg">
              Work Experience
            </p>
            <hr className="border-b-2 border-slate-500" />

            {data.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-start w-3/5 py-2">
                  <p className="text-black font-semibold text-base">
                    From :
                    <span className="text-gray-700 text-sm">
                      {dateFormatter(exp.workfrom)}
                    </span>
                  </p>
                  <p className="text-black font-semibold text-base mx-10">
                    To :{" "}
                    <span className="text-gray-700 text-sm">
                      {dateFormatter(exp.workto)? exp.workto: 'Currently Working'}
                      </span>
                  </p>
                  <p className="text-black font-semibold text-base">
                    Location :{" "}
                    <span className="text-gray-700 text-sm">
                      {exp.location}
                    </span>
                  </p>
                </div>
                <div className="flex justify-start w-4/5 py-2">
                  <p className="text-black font-semibold text-base">
                    Position :{" "}
                    <span className="text-gray-700 text-sm">
                      {exp.position}
                    </span>
                  </p>
                  <p className="text-black font-semibold text-base mx-10">
                    companyName :{" "}
                    <span className="text-gray-700 text-sm">
                      {exp.companyName}
                    </span>
                  </p>
                </div>
                
                <p className="text-black font-semibold text-base py-2">
                  {" "}
                  About Company :
                  <span className="text-gray-700 text-base">{exp.aboutcompany}</span>
                </p>

                <p className="text-black font-semibold text-base py-2">
                  {" "}
                  Duties & Responsibilities :
                  <span className="text-gray-700 text-base">{exp.about2}</span>
                </p>

                <div className="flex justify-start w-5/6 py-2">
                  {/* <p className="text-black font-semibold text-base">
                    {" "}
                    Department :
                    <span className="text-gray-700 text-sm">
                      {data.experience}
                    </span>
                  </p> */}
                  <p className="text-black font-semibold text-base ">
                    Address :
                    <span className="text-gray-700 text-sm">
                      {exp.position}
                    </span>
                  </p>
                  <p className="text-black font-semibold text-base mx-10">
                    Website :
                    <span className="text-gray-700 text-sm">
                      {exp.companyName}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </>
        )}

{!!data.education.length && 
<div>
        <p className="block text-black font-extrabold text-lg mt-6">
          Education and Training
        </p>
        <hr className="border-b-2 border-slate-500" />
{data.education.map((educ, index)=>(
  <div key={index}>

        <div className="flex my-2">
            <p className="text-black font-semibold text-base">
              {" "}
              Title of qualification :
              <span className="text-gray-700 text-sm">{educ.qualification}</span>
            </p>
            <p className="text-black font-semibold text-base mx-10">
              Education Organisation :
              <span className="text-gray-700 text-sm">
                {educ.organisation}
              </span>
            </p>
          </div>

        <div>
          <div className="flex justify-start w-3/5 py-2">
            <p className="text-black font-semibold text-base">
              From :<span className="text-gray-700 text-sm">{dateFormatter(educ.educationfrom)}</span>
            </p>
            <p className="text-black font-semibold text-base mx-10">
              To : <span className="text-gray-700 text-sm">{dateFormatter(educ.educationto)}</span>
            </p>
            <p className="text-black font-semibold text-base">
              Location : <span className="text-gray-700 text-sm">{educ.educationcountry}</span>
            </p>
          </div>
          </div>

        </div>
        ))}
        </div>
      }

{!!data.training.length &&
<div>

        <p className="block text-black font-bold text-lg mt-6">
          Additional information
        </p>
        <hr className="border-b-2 border-slate-500" />
        <p>Training and Awards :</p>

        {data.training.map((train, index) => (
          <div key={index}>
            {/* <p className="text-black font-semibold text-base py-2">
              {" "}
              Hobbies and Interest :
              <span className="text-gray-700 text-sm">
                {train.Hobbies}
              </span>
            </p> */}
            <div className="flex justify-start w-4/5 py-2">
              <p className="text-black font-semibold text-base">
                From :<span className="text-gray-700 text-sm">{dateFormatter(train.trainingfrom)}</span>
              </p>
              <p className="text-black font-semibold text-base mx-10">
                To : <span className="text-gray-700 text-sm">{dateFormatter(train.trainingto)}</span>
              </p>
              <div className="flex">
          <p className="text-black font-semibold text-base ">
              Institute : <span className="text-gray-700 text-sm">{train.institute}</span>
            </p> 
            <p className="text-black font-semibold text-base mx-10">
              Location : <span className="text-gray-700 text-sm">{train.traininglocation}</span>
            </p>
            </div>
            </div>
          </div>
        ))}
        </div>
}
      </div>
    </>
  );
};
export default Preview;
