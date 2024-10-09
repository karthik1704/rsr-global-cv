import Image from "next/image";
import {dateFormatter} from '@/lib/utils'
import Others from "./forms/others";

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
    mothertongue: string;
    otherlanguage: string;
    othertitle: string;
  otherdesc: string;
  mainTitle: string;
    others:{
    othertitle: string;
  otherdesc: string;
  mainTitle: string;
    };
    language:{
      mothertongue: string;
    otherlanguage: string;
    }
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
      title:string;
          institute :string;
          trainingfrom:string;
          trainingto:string;
          traininglocation:string;
          trainingskills:string;  
    }[];
    lic:{
      license: string,
      daterange: {
        datefrom: string;
        dateto: string;
      }
    }[];
  };
};

const Preview = ({ data, handleNext,image,handleEdit}: PreviewProps) => {
  console.log(data)
  const handleClick = () => {
    handleNext();
    handleEdit();
  };
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl text-center">
          {" "}
          CV Preview
        </h1>
        <div className=" flex col bg-slate-100">
          {!!data.personalInformation.profileImage &&
          <div className="mx-10 my-5">
            <Image src={data.personalInformation.profileImage} height={150} width={150} alt="" className="h-32 w-40 rounded-full border-2 border-gray-700" />
          </div>}
          <div className=" flex-col pl-10 w-full">
              <p className="block font-semibold text-base my-3">
             <span className="text-2xl font-bold text-gray-700 cont capitalize">{data.personalInformation.first_name} {data.personalInformation.last_name}</span>
              </p>

            <hr className="border-b-2 border-slate-500 w-10/12" />
            <div className=" w-5/6 flex my-2">
              <p className="text-black font-semibold text-base head ">
                Date of birth : <span className="text-base cont font-medium">{new Date(data.personalInformation.date_of_birth).toLocaleDateString("en-GB")}</span>
              </p>
              {data.personalInformation.contact_number ? (
              <p className="text-black font-semibold text-base head mx-5">
                | Contact Number : <span className="text-base font-medium cont">{data.personalInformation.contact_number}</span>
              </p>
              ): null}
            </div>

            <div className=" w-5/6 flex my-2">
              <p className="text-black font-semibold text-base head ">
              Nationality : <span className="text-base cont font-medium capitalize">{data.personalInformation.nationality}</span>
              </p>
              {data.personalInformation.email_address ? (
              <p className="text-black font-semibold text-base head mx-5">
                | Email - Id : <span className="text-base font-medium cont">{data.personalInformation.email_address}</span>
              </p>
              ) : null}
            </div>

            <div className="w-5/6">
              <p className="text-black font-semibold text-base">
                Address : {" "}
                <span className="text-base font-medium cont capitalize">
                  {data.personalInformation.address_line_1}, {data.personalInformation.address_line_2}
                </span>{" "}
                <span className=" text-base font-medium cont capitalize">
                  {data.personalInformation.city}, {data.personalInformation.postal_code} {' '} {data.personalInformation.country}
                </span>
              </p>
              {data.personalInformation.responsibilities ? (
  <div className="flex flex-col py-2">
    <p className="block text-black font-semibold text-base head flex-shrink-0 w-full">
      About me :
    </p>
    <span className="block font-medium text-black text-base flex-grow cont">
      {data.personalInformation.responsibilities}
    </span>
  </div>
) : null}
            </div>
          </div>
        </div>
<div className="pl-8 pr-28">
{data.jobappliedfor && (
        <div className="flex my-2 justify-start items-center">
        <p className="text-black font-semibold text-base ">
                    Job applied for :
                  </p>
                  <span className=" px-2 block font-medium text-black text-base capitalize">
                  {data.jobappliedfor}
                </span>
        </div>
)}

        {!!data.workExperience.length && (
          <>
            <p className="block text-black font-extrabold text-2xl">
              Work Experience
            </p>
            <hr className="border-b-2 border-slate-500" />

            {data.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-start w-3/5 pt-2">
                  <p className="text-gray-700 font-medium text-base">
                  {dateFormatter(exp.workfrom)} {'-'}
                  </p>
                  <p className="text-gray-700 font-medium text-base">
                  {exp.workto ? (
  dateFormatter(exp.workto)
) : (
  'Currently Working'
)}
                  </p>
                  {/* <p className="text-gray-700 font-medium text-base capitalize">,{' '}
                {exp.location}
                  </p> */}
                </div>
                <div className="w-4/5">
                  <p className="text-gray-700 font-semibold text-2xl uppercase">
                  {exp.position} {' '}
                  <span className="text-gray-700 font-medium capitalize">{exp.companyName}</span>
                
                 
                  </p>
                </div>
                <hr className="border-b-1 border-slate-500" />
                
                <p className="text-black font-semibold text-base py-2">
                  {" "}
                  {exp.companyName} :{' '}
                  <span className="block font-medium text-base capitalize">{exp.aboutcompany}</span>
                </p>

                <p className="text-black font-semibold text-base py-2">
                  {" "}
                  Duties & Responsibilities : {' '}
                  <span className="block font-medium text-base capitalize">{exp.about2}</span>
                </p>

                <div className="flex justify-start w-5/6 py-2">

                  <p className="text-black font-semibold text-base ">
                    Address : {' '}
                    <span className="font-medium text-base capitalize">
                      {exp.position}
                    </span>
                  </p>
                  <p className="text-black font-semibold text-base mx-5"> | Website : {' '}
                    <span className="font-medium text-base">
                      {exp.workwebsite}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
        </div>

{!!data.education.length && 
<div  className="pl-8 pr-28">
        <p className="block text-black font-extrabold text-2xl mt-6">
          Education and Training
        </p>
        <hr className="border-b-2 border-slate-500" />
{data.education.map((educ, index)=>(
  <div key={index}>



        <div>
          <div className="flex justify-start w-3/5 mt-2">
            <p className="text-gray-700 font-medium text-base">
            {dateFormatter(educ.educationfrom)} {' '}
            </p>
            <p className="text-gray-700 font-medium text-base "> {' '} - {' '} 
            {dateFormatter(educ.educationto)}
            </p>
            <p className="text-gray-700 font-medium text-base capitalize">,{' '}  
            {educ.educationcountry}
            </p>
          </div>
          </div>

            <p className="text-gray-700 font-semibold text-2xl uppercase">
              {" "}
              {educ.qualification} 
              <span className="text-gray-700 font-medium text-lg ml-2 capitalize">
            {educ.organisation}
            </span>
            </p>
            <hr className="border-b-1 border-slate-500" />


        </div>
        ))}
        </div>
      }

{!!data.language &&
          <div className="className pl-8 pr-28">
          <p className="block text-black font-bold text-2xl mt-6">
          Language Skills
        </p>
        <hr className="border-b-2 border-slate-500" />
        
              <p className="block text-base text-black my-3">
              Languages Known : <span className="text-lg font-bold text-black cont capitalize">{data.language.mothertongue}</span>
              </p>
              {/* <p className="block text-base text-black my-3">
              Other language : <span className="text-lg font-bold text-black cont capitalize">{data.language.otherlanguage}</span>
              </p> */}
          </div>
}

{!!data.training.length &&
<div className="pl-8 pr-28">

        <p className="block text-black font-bold text-2xl mt-6">
          Additional Information
        </p>
        <hr className="border-b-2 border-slate-500" />
        <p className="block text-black font-bold text-2xl py-4">Honors & Awards</p>

        {data.training.map((train, index) => (
          <div key={index}>
            {/* <p className="text-gray-700 font-semibold text-base py-2">
              {" "}
                {train.title}
            </p> */}
            <div className="flex justify-start w-4/5">
              <p className="text-gray-700 text-base">
              {dateFormatter(train.trainingfrom)} {'-'}
              </p>
              <p className="text-gray-700 text-base">
              {dateFormatter(train.trainingto)}
              </p>
               </div>
               <div className="flex">
               <p className="text-gray-700 font-semibold text-base capitalize">
              {" "}
                {train.title}{','}
            </p>
          <p className="text-gray-700 font-semibold text-base capitalize">{' '}
          {train.institute} {','}
            </p> 
            <p className="text-gray-700 font-semibold text-base capitalize">
            {train.traininglocation}
            </p>
            </div>
          </div>
        ))}
        <hr className="border-b-1 border-slate-500" />
        </div>
}


{data.others.map((newItem, index) => (
  <div key={index} className="pl-8 pr-28">
    <p className="block text-black font-bold text-2xl mt-6">
      Others
    </p>

    <hr className="border-b-2 border-slate-500" />

    <p className="block text-base text-black my-3">
      Title : <span className="text-lg font-bold text-black capitalize">{newItem.othertitle}</span>
    </p>
    <p className="block text-base text-black my-3">
      Description : <span className="text-lg font-bold text-black capitalize">{newItem.otherdesc}</span>
    </p>
  </div>
))}

{!!data.license &&
<>
<div className="pl-8 pr-28">
 <p className="block text-black font-bold text-2xl mt-6 ">Driving License</p>
 <hr className="border-b-2 border-slate-500" />
 </div>
{data.license.map((lice, index)=>(
  <div key={index} className="pl-8 pr-28">
   
   

    <p className="block text-lg font-bold text-black my-3">
      Vehicle Type : <span className="text-black text-base font-normal">{lice.license}</span>
    </p>
    <p className="block text-lg font-bold text-black my-3">
      License Validation : <span className="text-black text-base font-normal">{lice.daterange.datefrom} to {lice.daterange.dateto}</span>
    </p>
  </div>
))}
</>
}


      </div>
    </>
  );
};
export default Preview;
