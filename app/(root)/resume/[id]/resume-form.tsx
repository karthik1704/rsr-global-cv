"use client";
import { use, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";

import Preview from "./preview";
import PreviewPdf from "./preview-pdf-new";
import StepperComponent from "@/components/stepper/dynamic";

import PersonalInformation from "./forms/personalinformation";
import WorkExperience from "./forms/workexperience";
import Education from "./forms/education";
import Training from "./forms/additional";
import AddSection from "./add-section";
import Language from "./forms/language";
import Others from "./forms/others";
import License from "./forms/license";

import { toast } from "sonner";
import { ResumeType } from "./typings";
import { deleteOthers } from "../action";
import DeleteButton from "@/components/deleteButton/deletebutton";
import EditButton from "@/components/editButton/editbutton";

type ResumeProps = {
  resume: ResumeType;
  isMobile: boolean;
};

const Resume = ({ resume, isMobile }: ResumeProps) => {
  const [section, setSection] = useState(false);

  const handleSection = () => {
    setSection(true);
  };

  const [selectedSection, setSelectedSection] = useState<string[]>([]);

  const [showPreview, setShowPreview] = useState(false);

  const [otherId, setOtherId] = useState<number|null>(null);

  const [show, setShow] = useState(0);

  useEffect(() => {
    if (resume.first_name) {
      setShowPreview(true);
    }
  }, [resume.first_name]);

  useEffect(() => {
    const sections = [
      { key: "work", data: resume.experiences },
      { key: "education", data: resume.education },
      { key: "language", data: resume?.language_skills?.language },
      { key: "additional", data: resume.training_awards },
      { key: "drivinglicense", data: resume.driving_license },
      { key: "others", data: resume.others },
    ];

    sections.forEach(({ key, data }) => {


      if ( data && data.length && !selectedSection.includes(key)) {
        setSelectedSection((prevState) => {
          if (!prevState.includes(key)) {
            return [...prevState, key];
          }
          return prevState;
        });
      }
    });
  }, [resume, selectedSection]);

  const [data, setData] = useState({
    personalInformation: null,
    workExperience: [],
    workExperience1: [],
    jobappliedfor: undefined,

    education: [],
    training: [],
    language: undefined,
    others: [],
    lic: [],
  });

  //first letter capital
  const [text, setText] = useState({
    a: "",
    b: {
      field1: "",
      field2: "",
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string,
    subkey?: string
  ) => {
    const value = event.target.value;
    const updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setText((prevValues) => {
      if (subkey) {
        return {
          ...prevValues,
          b: {
            ...prevValues.b,
            [subkey]: updatedValue,
          },
        };
      } else {
        return {
          ...prevValues,
          [key]: updatedValue,
        };
      }
    });
  };

  const [additionalTitle, setAdditionalTitle] = useState("");

  const deleteOthersWithId = deleteOthers.bind(null, resume.id);

  const deleteOther = async (id: number) => {
    const res = await deleteOthersWithId(id);

    if (res?.type ==="Success") {
      toast.success("Section Deleted Successfully", {
        duration: 10000,
        closeButton: true,
      });
    } else {
      toast.error("Error Deleting Section", {
        duration: 10000,
        closeButton: true,
      });
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalTitle(event.target.value);
  };

  const [showFields, setShowFields] = useState(true);

  type FormComponentsType = {
    [key: string]: JSX.Element;
  };

  const formComponents: FormComponentsType = {
    work: (
      <WorkExperience
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setData={setData}
        setShowPreview={setShowPreview}
        workExperience={resume.experiences}
        data={data}
        job_applied_for={resume.job_applied_for}
      />
    ),
    education: (
      <Education
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setData={setData}
        setShowPreview={setShowPreview}
        education={resume.education}
      />
    ),
    additional: (
      <Training
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setData={setData}
        setShowPreview={setShowPreview}
        trainings={resume.training_awards}
      />
    ),
    language: (
      <Language
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setShowPreview={setShowPreview}
        setData={setData}
        language={resume.language_skills}
      />
    ),
    drivinglicense: (
      <License
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setShowPreview={setShowPreview}
        setData={setData}
        lic={resume.driving_license}
      />
    ),
    others: (
      <Others
      otherId={otherId}
      setOtherId={setOtherId}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setShowPreview={setShowPreview}
        setData={setData}
        others={resume.others}
        sectionTitle={additionalTitle}
        setSectionTitle={setAdditionalTitle}
      />
    ),
  };

  //home page

  const handleHome = () => {
    window.location.href = "/";
  };

  // handler for dropdown change

  const addSections = (sectionName: string) => {
    setSelectedSection((prevState) => [...prevState, sectionName]);
  };

  //--validation function for date year range--

  const validateDateRange = (value:string|Date) => {
    const minDate = new Date("1950-01-01");
    const maxDate = new Date("2100-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

  //--validation for input field--

  const handleNext = async () => {
    // const isValid = await trigger();
    // if(isValid){
    if (resume.first_name === null) {
      toast.error("Please Enter Personal Information", {
        duration: 10000,
        closeButton: true,
      });
      return;
    }
    setShow(show + 1);
    setSection(true);
  };
  // };

  const handlePrevious = () => {
    setShow(show - 1);
  };

  const handleReset = () => {
    setShow(0);
  };

  const toggleFields = () => {
    setShowFields(!showFields);
  };

  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageChange = (imageurl:string) => {
    setUploadedImage(imageurl);
  };

  // const onSubmit: SubmitHandler<FormValues> = async (data) => {
  //   console.log(data);
  //   setData({ ...data, profileImage: uploadedImage });
  //   handleNext();
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   console.log(data);
  //   setShow(4);
  //   setShowPreview(true);
  // };

  const handleEdit = async () => {
    console.log("Going back with data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Previous data state:", data);

    setShow(0);
    setShowPreview(false);
  };

  return (
    <div className="w-9/12 shadow-2xl  border-gray-300 text-justify mx-auto my-7">
      <StepperComponent step={show} />

      {show === 0 && (
        <div className="p-8">
          <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            {/* <h4>{resume.resume_title}</h4> */}
            <div>
              <hr className="mb-2" />
              <PersonalInformation
                setData={setData}
                personalInformation={resume}
                setShowPreview={setShowPreview}
                text={text.a}
                handleChange={(event) => handleChange(event, "a")}
              />
            </div>

            {selectedSection.map((selected) => (
              selected !== "others" && <div key={selected}>{formComponents[selected]}</div>
            ))}
            {selectedSection.includes("others") &&
              resume.others.length && !additionalTitle && 
              resume.others.map((other) => (
                <div
                  key={other.id}
                  className="p-3 space-y-4 bg-gray-100 rounded-lg shadow-md my-4"
                >
                  <div className="flex justify-between items-center text-center border-b-2 pb-2 mx-4">
                  <p className="text-black lg:text-xl text-lg font-bold uppercase">
                    {other.sectiontitle}
                  </p>

            <EditButton 
  onClick={() => {
    setAdditionalTitle(other.sectiontitle);
    setOtherId(other.id);
  }}
/>
                  </div>
                  <div className="flex justify-between mx-4">
<div>
                  <p className="font-normal lg:text-base text-sm capitalize">{other.title}</p>

                  <p className="font-normal lg:text-base text-sm capitalize">
                      {other.description}
                    </p>
                  </div>
                  <div>
                <DeleteButton onClick={()=> deleteOther(other.id)}/>
          </div>
          </div>
                </div>
              ))}
               {selectedSection.includes('others') && (
               <div >{formComponents['others']}</div>
            )}
          </div>
          <div className="my-3">
            {showPreview ? (
              <AddSection
                addSections={addSections}
                setShowPreview={setShowPreview}
                showPreview={showPreview}
                selectedSection={selectedSection}
                handleInputChange={handleInputChange}
                additionalTitle={additionalTitle}
              />
            ) : null}
          </div>
          <div className="flex mx-6 my-10">
            <button
              type="button"
              className="lg:w-12 lg:h-10 w-12 h-10 items-center capitalize bg-white border border-gray-300 hover:bg-green-600 text-black p-2 hover:text-slate-100 font-bold rounded-md"
              onClick={handleHome}
            >
              Exit
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="lg:w-12 lg:h-10 w-12 h-10 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2  mx-10 font-bold rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div>
        {show === 1 && (
          <div>
            <Preview
              data={resume}
              handleNext={handleNext}
              image={uploadedImage}
              
            />
            {/* <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button> */}
            <div className="flex py-4 px-8">
              <button
                type="button"
                className="lg:w-12 lg:h-10 w-12 h-10 items-center capitalize bg-white border border-gray-300 hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                onClick={handleEdit}
                // onClick={() => setShowForm(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="lg:w-12 lg:h-10 w-12 h-10 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
                onClick={handleNext}
              >
                next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* {show ===2 && (
          <div>
            <CheckoutPage handleNext={handleNext}/>

            <div className="flex py-4 px-8">
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                  onClick={handlePrevious}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
                  onClick={handleNext}
                >
                  next
                </button>
              </div>

            </div>
        )} */}

      {show === 2 && (
        <div>
          <PreviewPdf data={resume} isMobile={isMobile}
          // handleNext={handleNext} 
          />

          <div className="flex justify-between py-4 px-8">
            <button
                  type="button"
                  className="w-16 items-center capitalize bg-white border border-gray-300 hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                  onClick={handlePrevious}
                >
                  Back
                </button>
            <Link
              href="/resume"
              className="w-28 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md inline-flex justify-center"
            >
              Go To Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
