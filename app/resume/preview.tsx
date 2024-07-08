import img from "@/public/cand-3.png";
import Image from "next/image";

type PreviewProps = {
  data:{
  
    firstName: string;
    lastName: string;
    dob: string;
    nationality: string;
    experience: number;
    companyName:string;
    location:string;
    add1:string;
    add2:string;
    email:string;
    workemail:string;
    about:string;
    about2:string;
    city:string;
    code:string;
    country:string;
    position:string;
    workfrom:string;
    workto:String;
    experiences: {
      years: number;
      description: string;
    }[];
  }}
  
  const Preview = ({ data,handleNext }: PreviewProps) => {
    const handleClick = () => {
      handleNext(); // Call the imported function
    }
    return (
      <>
      <div className="w-full">
      <h1 className="mb-4 px-6  text-black font-bold text-3xl text-center">
        {" "}
        CV Preview
      </h1>
      <div className="bg1 flex col">
          <div className="mx-10 my-5">
            <Image src={img} height={150} width={150} alt="" />
          </div>
          <div className=" flex-col w-full">
            <div className="flex w-full justify-between">
              <p className="block font-semibold text-base head my-2">
                Name:{" "}
               
                  {data.firstName} {data.lastName}
            
              </p>
              <p className="block text-black font-semibold text-base head px-28">
                Email Address: {data.email}
              </p>
            </div>
            <hr className="border-b-2 border-slate-700" />
            <div className=" w-5/6">
              <p className="text-black font-semibold text-base  head ">
                Date of birth :{data.dob}
              </p>
              <p className="text-black font-semibold text-base  head ">
                Nationality : {data.nationality}
              </p>
            </div>

            <div className="w-5/6">
              <p className="text-black font-semibold text-base">
                Address :{" "}
                <span className="text-sm text-red-500 cont">
                 {data.add1} {data.add2}
                </span>{" "}
                <span className=" block text-red-500 cont">
                  {data.city} {data.code} {data.country}
                </span>
              </p>
              <div className="flex flex-col">
                <p className="block text-black font-semibold text-base head flex-shrink-0 w-44">
                  About me:{data.about}
                </p>
                <span className="block text-black text-base flex-grow cont">
                </span>
              </div>
            </div>
          </div>
        </div>
      {/* <div className="flex col">
        <div>
      <Image src={img} height={150} width={150} alt="" />
      </div>
      <div className="flex col w-full">
      <div className="flex w-full justify-between">
        <p className="font-bold">Name : {firstName} {lastName}</p>
        <p>Email Address : </p>
        </div>
        <hr />

        </div>

        </div> */}
<p className="block text-black font-bold text-lg my-2">
            Work Experience
          </p>
          <hr className="border-b-2 border-slate-700" />
          <div className="flex justify-start w-3/5">
            <p className="text-black font-semibold text-base">From :{data.workfrom}</p>
            <p className="text-black font-semibold text-base mx-10">To : {data.workto}</p>
            <p className="text-black font-semibold text-base">Location : {data.location} </p>
          </div>
          <div className="flex justify-start w-2/5">
            <p className="text-black font-semibold text-base">Position : {data.position}</p>
            <p className="text-black font-semibold text-base mx-10">company Name :{data.companyName}</p>
          </div>
          <hr className="border-b-2 border-slate-700" />
          <p className="text-black font-semibold text-base">Duties & Responsibilities :</p>
          <div className="flex justify-start w-5/6">
          <p className="text-black font-semibold text-base">
                Department :<span className="cont"> </span>
              </p>
              <p className="text-black font-semibold text-base mx-10">
                Address :{data.location}
              </p>
              <p className="text-black font-semibold text-base">
              Website : {data.workemail}
              </p>
            </div>
            <p className="block text-black font-bold text-lg">
           Education and Training
          </p>
          <hr className="border-b-2 border-slate-700" />
        {/* <p>Experience : {data.experience}</p>
        <p>companyName : {data.companyName}</p>
        <h3>Experiences:</h3>
      {data.experiences.map((exp, index) => (
        <div key={index}>
          <p>Years: {exp.years}</p>
          <p>Description: {exp.description}</p>
        </div>
      ))} */}
      <hr />
      <div>
      </div>

      </div>
      </>
    );
  }
  export default Preview