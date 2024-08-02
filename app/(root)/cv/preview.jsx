import React from "react";
import Image from "next/image";
import img from "@/public/cand-3.png";
import "./stepper.css";

const Preview = ({ formData, onPrevious, onNext, onSubmit }) => {
  return (
    <div className="bg-slate-300 w-full">
      <h1 className="mb-4 px-6  text-black font-bold text-3xl text-center">
        {" "}
        CV Preview
      </h1>
      <div className="w-9/12 shadow-2xl  border-gray-300 text-justify mx-auto my-2">
        <div className="bg1 flex col">
          <div className="mx-10 my-5">
            <Image src={img} height={150} width={150} alt="" />
          </div>
          <div className=" flex-col w-full">
            <div className="flex w-full justify-between">
              <p className="block font-semibold text-base head border-t border-gray-300 my-4">
                Name:{" "}
                <span className="cont">
                  {formData.firstName} {formData.lastName}
                </span>
              </p>
              <p className="block text-black font-semibold text-base head px-28">
                Email Address: <span className="cont">{formData.email}</span>
              </p>
            </div>
            <hr className="section4-bg" />
            <div className=" w-5/6">
              <p className="block text-black font-semibold text-base  head ">
                Date of birth :<span className="cont"> {formData.dob}</span>
              </p>
              <p className="block text-black font-semibold text-base  head ">
                Nationality : <span className="cont">{formData.nat}</span>
              </p>
            </div>

            <div className="w-5/6">
              <p className="block text-black font-semibold text-base mt-4">
                Address :{" "}
                <span className="text-sm text-red-500 cont">
                  {formData.add1}
                </span>{" "}
                <span className=" block text-red-500 cont">
                  {formData.add2} {formData.city} {formData.Postal}{" "}
                  {formData.country}
                </span>
              </p>
              {/* <p className="block text-black font-semibold text-base  head ">Email Address: {formData.email}</p> */}
              {/* <p className="block text-black font-semibold text-base  head ">About me : <span className='cont'>{formData.responsibilities}</span></p> */}
              <div className="flex flex-col">
                <p className="block text-black font-semibold text-base head flex-shrink-0 w-44">
                  About me:
                </p>
                <span className="block text-black text-base flex-grow cont">
                  {formData.about}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}

        <div className="bg2">
          <p className="block text-black font-bold text-lg  heading ">
            Work Experience
          </p>
          <hr className="section4-bg" />
          <div className="flex justify-start w-2/5">
            <p className="block text-black font-semibold text-base head ">
              Company Name : <span className="cont"> {formData.company}</span>
            </p>
            <p className="block text-black font-bold text-base head mx-10 ">
              Location :<span className="cont"> {formData.location}</span>
            </p>
          </div>
            <p className="block text-gray-600 font-semibold  text-base head">
              Website :<span className="cont">{formData.website}</span>
            </p>
            <p className="block text-black font-semibold text-base head">
              Address :{" "}<span className="cont">
              {formData.line1}{" "}
              <span className="block cont">
                {formData.line2} {formData.line4} {formData.line3}{" "}
                {formData.line5}
              </span>
              </span>
            </p>
        </div>

        <div className="section-3">
          <p className="block text-black font-bold text-lg heading">
            Duties & Responsibilities
          </p>
          <hr className="section4-bg" />
          <div className="flex flex-col">
            <p className="block text-black font-semibold text-base head flex-shrink-0 w-44">
              About me:
            </p>
            <span className="block text-black text-base flex-grow w-5/6 cont">
              {formData.responsibilities}
            </span>
          </div>

<div className="flex justify-start w-2/5">
          <p className="block text-black font-semibold text-base head ">
            Job Title :<span className="cont"> {formData.position}</span>
          </p>
          <p className="block text-black font-semibold text-base head mx-10">
            From :{" "}
            <span className="cont">{formData.from}</span>
          </p>
          <p className="block text-black font-semibold text-base head ">
            To : <span className="cont">{formData.to}</span>
          </p>
          </div>
          {/* <p className="block text-black font-semibold text-base  head ">About me : <span className='cont'>{formData.responsibilities}</span></p> */}
        </div>

        <div className="section-3">
          <p className="block text-black font-bold text-lg heading">
            Education and Training
          </p>
          <hr className="section4-bg" />
          <div className="flex justify-start w-2/5">
            <p className="block text-black font-semibold text-base head ">
              From : <span className="cont">{formData.edfrom}</span>
            </p>
            <p className="block text-black font-semibold text-base head mx-10 ">
              to : <span className="cont">{formData.edto}</span>
            </p>
            <p className="block text-black font-semibold text-base  head ">
              Place :{" "}
            </p>
          </div>
          <p className="block text-black font-semibold text-base  head ">
            College : <span className="cont">{formData.college}</span>
          </p>

          <p className="block text-black font-semibold text-base  head ">
            Address : <span className="cont">{formData.pi1}</span>{" "}
            <span className="block cont">
              {" "}
              {formData.pi2} {formData.pi3} {formData.pi5} {formData.pi4}
            </span>
          </p>
        </div>

        <div className="section-3">
          <p className="block text-black font-bold text-lg heading">
            Language Skills
          </p>
          <hr className="section4-bg" />
          <p className="block text-black font-semibold text-base  head ">
            Mother tongue(s) : <span className="cont">{formData.lan}</span>{" "}
          </p>
        </div>

        {/* <div className='section-3'>
                    <p className="block text-black font-bold text-xl  head ">Additional Information</p>
                    <hr className='section4-bg' />
                    <p className="block text-black font-bold text-xl  head ">Hobbies and Interests</p>
                </div> */}
        {/* <p className="block text-gray-700 font-bold text-base  head ">Gender: {formData.gen}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Nationality: {formData.nationality}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Email address: {formData.emailAddress}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Phone: {formData.phone}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Type: {formData.type}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Address Line 1: {formData.address}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Address Line 2: {formData.add}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Postal code: {formData.Postal}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">City: {formData.city}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Country: {formData.country}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Occupation: {formData.position}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Company Name: {formData.company}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">City: {formData.city}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">country: {formData.country}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">From: {formData.postal}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">To: {formData.city}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">responsibilities: {formData.responsibilities}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Mother tongue: {formData.mothertongue}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base head ">Other language: {formData.otherlanguage}</p> */}


</div>
<div className='btn flex justify-around'>
              <button className='btn1 text-white font-semibold'>Exit</button>
<div>
<button onClick={onNext} className='btn1 text-white font-semibold'>Next</button>
<button onClick={onPrevious} className='btn1 text-white font-semibold'>Previous</button>
</div>
</div>
    </div>
    
  );
};

export default Preview;
