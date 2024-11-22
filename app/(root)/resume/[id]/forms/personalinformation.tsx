import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import ImageUploader from "@/components/image/image_uploader";
import { dateFormatter } from "@/lib/utils";
import DatePicker from "../datepicker";
import { updateResume, uploadImage } from "../../action";
import { toast } from "sonner";
import { SERVER_IMAGE_URL } from "@/app/constants";
import { textHandleChange } from "@/lib/utils";
import { maxLengthValidation } from "@/lib/utils";
import { Contact } from "lucide-react";
import EditButton from "@/components/editButton/editbutton";

type Resume = {
  resume_title: string;
  resume_image:string;
  first_name: string;
  last_name: string;
  date_of_birth: Date | string; // Format: YYYY-MM-DD
  nationality: string;
  address_line_1: string;
  address_line_2: string;
  postal_code: string;
  city: string;
  country: string;
  email_address: string;
  contact_number: string;
  responsibilities: string;
  referred_by: string;
};

type PersonalInformationProps = {
  setData: (data: any) => void;
  personalInformation: Resume;
  image?: string;
  setShowPreview: (showPreview: boolean) => void;
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};



const PersonalInformation = ({
  setData,
  personalInformation,
  image,
  setShowPreview,
  text,
  handleChange,
}: PersonalInformationProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    getValues,
    trigger,
    control,
  } = useForm<Resume>({
    defaultValues: {
      first_name: personalInformation?.first_name ?? "",
      last_name: personalInformation?.last_name ?? "",
      date_of_birth: new Date(personalInformation?.date_of_birth).toUTCString() ?? "",
      nationality: personalInformation?.nationality ?? "",
      address_line_1: personalInformation?.address_line_1 ?? "",
      address_line_2: personalInformation?.address_line_2 ?? "",
      postal_code: personalInformation?.postal_code ?? "",
      city: personalInformation?.city ?? "",
      country: personalInformation?.country ?? "", 
      email_address: personalInformation?.email_address ?? "",
      contact_number: personalInformation?.contact_number ?? "",
      responsibilities: personalInformation?.responsibilities ?? "",
      referred_by: personalInformation?.referred_by ?? "",
    },
  });

  const [date, setDate] = useState<Date | undefined>(new Date(personalInformation.date_of_birth) ?? undefined);
  const { id } = useParams<{id:string;}>();
  const [show, setShowForm] = useState(true);
  const [error, setError] = useState('');

  const updateResumeWithId = updateResume.bind(null, id );
  const uploadImageWithId = uploadImage.bind(null, id );

  // const handleDateChange = (newDate) => {
  //   setDate(newDate);
  //   console.log(newDate)
  //   setValue("date_of_birth", newDate);
  // };

  // useEffect(() => {
  //   if(personalInformation.date_of_birth) {
  //     setDate(new Date(personalInformation.date_of_birth as string));
  //   }
  // }, [personalInformation.date_of_birth]);

  useEffect(() => {
    if(personalInformation.first_name) {
      setShowForm(false);
    }
  }, [personalInformation.first_name]);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    // const formattedDate = newDate.toISOString().split("T")[0];
    const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setValue("date_of_birth", formattedDate);
  };

  // const validateDateRange = (value: Date) => {
  //   const minDate = new Date("1950-01-01");
  //   const maxDate = new Date("2100-12-31");
  //   const selectedDate = new Date(value);

  //   if (selectedDate < minDate || selectedDate > maxDate) {
  //     return "please enter valid Year";
  //   }
  //   return true;
  // };


  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageChange = (imageurl: string) => {
    setUploadedImage(imageurl);

  };

  const handleForm = async (personalData: Resume) => {
    console.log(personalData);
    console.log(personalData.date_of_birth)
    personalData.resume_title=personalInformation.resume_title;
    console.log(personalData.date_of_birth)
    personalData.date_of_birth = new Date(personalData.date_of_birth).toISOString().split("T")[0];
    console.log(personalData.date_of_birth)
    const res = await updateResumeWithId(personalData)

    if(res?.type==="Success") {
      toast.success("Personal Information added successfully", {
        duration: 10000,
        closeButton: true,
      });
      setShowForm(false);
      setShowPreview(true);
    }else{
      toast.error("Error in adding Personal Information", {
        duration: 10000,
        closeButton: true,
      });
    }

   
  };

  return (
    <div className="md:w-full lg:w-full sm:w-full xl:w-full">
      {!show && (
        <div className="p-3 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex justify-between text-center items-center border-b-2 pb-2">
          <p className="text-black lg:text-xl text-lg font-bold uppercase">
            Personal Information
          </p>
            <EditButton onClick={() => setShowForm(true)}/>
          </div>

          <div className="flex lg:flex-row flex-col items-center">
          {!!personalInformation.resume_image && (

            <div className="xl:w-2/6 lg:w-3/4 mx-4">
              <Image
                src={`${SERVER_IMAGE_URL}${personalInformation.resume_image}`}
                height={150}
                width={150}
                alt=""
                className=" h-36 w-36 rounded-full"
              />
            </div>
          )}
          <div className="space-y-3">
  <p className="font-semibold lg:text-2xl md:text-left text-center text-xl capitalize text-gray-800">
    {personalInformation.first_name} {personalInformation.last_name}
  </p>

  <div className="flex md:flex-row flex-col">
  <p className="lg:text-base text-sm font-semibold">
    Date of Birth: <span className="font-thin"> {dateFormatter(personalInformation.date_of_birth as string)} </span>
  </p>

  {personalInformation.contact_number && (
    <>
    <span className="text-gray-800 mx-2 sm:inline hidden">|</span>
      <p className="lg:text-base text-sm font-semibold">
        Contact Number: <span className="font-thin">{personalInformation.contact_number}</span> 
      </p>
    </>
  )}
  </div>

<div className="flex md:flex-row flex-col">
  <p className="lg:text-base text-sm font-semibold">
    Nationality: <span className="font-thin">{personalInformation.nationality}</span>
  </p>
  {personalInformation.email_address && (
    <>
    <span className="text-gray-800 mx-2 sm:inline hidden">|</span>
      <p className="lg:text-base text-sm font-semibold">
        Email Address: <span className="font-thin">{personalInformation.email_address}</span>
      </p>
    </>
  )}
  </div>
  <p className="lg:text-base text-sm font-semibold">
    Address: <span className="font-thin">{personalInformation.address_line_1} {personalInformation.address_line_2} {personalInformation.postal_code} {personalInformation.city} {personalInformation.country}</span>
  </p>
          {personalInformation.responsibilities && (
            <p className="lg:text-base text-sm font-semibold">
              Main Activities and Responsibilities:{" "}
              <span className="font-light lg:text-base text-sm">
                {personalInformation.responsibilities}
              </span>
            </p>
          )}
          </div>
          </div>
          
        </div>
      )}
      {show && (
        <form onSubmit={handleSubmit(handleForm)}>
          <h1 className="mb-4 w-full px-6 lg:m-0 md:mx-36 md:text-xl md:w-full text-black font-bold lg:text-3xl lg:w-1/2">
            Personal Information
          </h1>
          {/* <p className="mb-4 px-6 lg:w-full lg:m-0 w-full md:mx-36 md:w-[350px] text-gray-700 font-bold text-sm">
            Before you start, select the language you want to use in your
            profile
          </p> */}

          <ImageUploader onImageChange={handleImageChange} image_url={personalInformation.resume_image} />

          <div className="mb-4.5 flex flex-col lg:flex-row mt-2">
            <div className="w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                First Name<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full max-w-xs sm:max-w-full rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("first_name", {
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                    minLength: {
                      value: 1,
                      message: "must have a minimum of one character.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum 20 characters allowed.",
                    },
                 
                  // maxLength : maxLengthValidation(20),
                })}
                placeholder="Type name same as in the passport"
              />
              {errors.first_name && (
                <p className="text-red-700 text-sm">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <br />

            <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Last Name<span className="text-gray-700"></span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("last_name", {
                  // required: {
                  //   value: true,
                  //   message: "Last Name is required",
                  // },
                  // maxLength : maxLengthValidation(20),
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed.",
                  },
                })}
                placeholder="Last Name"
              />
              {errors.last_name && (
                <p className="text-red-700 text-sm">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4 w-[354px] lg:w-1/2 md:w-[554px] md:px-6">
            <label className="block text-black font-bold text-sm head">
              Date of birth<span className="text-red-700">*</span>
            </label>
            <DatePicker
              selectedDate={date}
              onDateChange={handleDateChange}
              {...register("date_of_birth", {
                required: {
                  value: true,
                  message: "Date is required",
                },
              })}
            />
            {errors.date_of_birth && (
              <p className="text-red-700 text-sm">
                {errors.date_of_birth.message}
              </p>
            )}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Nationality
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("nationality", {
                  required: {
                    value: true,
                    message: "Nationality is required",
                  },
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed.",
                  },
                })}
                placeholder="Nationality"
              />
              {errors.nationality && (
                <p className="text-red-700 text-sm">
                  {errors.nationality.message}
                </p>
              )}
            </div>
          </div>

          <h1 className="px-6 text-black font-bold">Address</h1>
          <hr className="my-2" />

          <div className="mb-4 w-full lg:w-1/2 md:w-[504px] md:px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Address Line 1<span className="text-red-700">*</span>
            </label>
            <input
              className="pl-4 block w-full rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("address_line_1", {
                required: {
                  value: true,
                  message: "Address is required",
                },
                minLength: {
                  value: 1,
                  message: "must have a minimum of one character.",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters allowed.",
                },
              })}
              placeholder="Street name, P.O, box"
            />
            {errors.address_line_1 && (
              <p className="text-red-700 text-sm">
                {errors.address_line_1.message}
              </p>
            )}
          </div>

          <div className="mb-4 w-full lg:w-1/2 md:w-[504px] md:px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Address Line 2<span className="text-red-700">*</span>
            </label>
            <input
              className="pl-4 block w-full rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("address_line_2", {
                required: {
                  value: true,
                  message: "Address is required",
                },
                minLength: {
                  value: 1,
                  message: "must have a minimum of one character.",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters allowed.",
                },
              })}
              placeholder="Apartment, suite, unit, building, floor, etc"
            />
            {errors.address_line_2 && (
              <p className="text-red-700 text-sm">
                {errors.address_line_2.message}
              </p>
            )}
          </div>

          <div className="flex flex-col lg:flex-col xl:flex-row gap-4 md:flex-col md:gap-6 lg:mx-auto xl:mx-auto">
            <div className="mb-4 w-full md:px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                Postal Code
              </label>
              <input
                className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("postal_code", {
                  // required: {
                  //   value: true,
                  //   message: "postal code is required",
                  // },
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed.",
                  },
                })}
                placeholder="6000 01"
              />
              {errors.postal_code && (
                <p className="text-red-700 text-sm">{errors.postal_code.message}</p>
              )}
            </div>

            <div className="mb-4 w-full md:px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                City<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed.",
                  },
                })}
                placeholder="Chennai"
              />
              {errors.city && (
                <p className="text-red-700 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div className="mb-4 w-full md:px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                Country<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed.",
                  },
                  // validate: (value) => {
                  //   const validation = maxLengthValidation(10);
                  //   return value.length <= validation.value || validation.message;
                  // },
                })}
                placeholder="India"
              />
              {errors.country && (
                <p className="text-red-700 text-sm">{errors.country.message}</p>
              )}
            </div>
          </div>

          <h1 className="px-6 text-black font-bold">Contact</h1>
          <hr className="my-2" />
          <div className="flex flex-col gap-3 md:flex-col">
            <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Email Address
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("email_address", {
                  // required: {
                  //   value: true,
                  //   message: "Email Id is required",
                  // },
                  minLength: {
                    value: 1,
                    message: "must have a minimum of one character.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximum 30 characters allowed.",
                  },
                })}
                placeholder="Email"
              />
              {/* {errors.email && (
              <p className="text-red-700 text-sm">{errors.email.message}</p>
            )} */}
            </div>

            <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block md:w-full text-black font-bold text-sm head mb-2">
                Contact Number
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("contact_number", {
                  // required: {
                  //   value: true,
                  //   message: "Email Id is required",
                  // },
                })}
                placeholder="Contact Number"
              />
              {/* {errors.email && (
              <p className="text-red-700 text-sm">{errors.email.message}</p>
            )} */}
            </div>
          </div>

          <div className="mb-4 w-full md:px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Main activities and responsibilities
            </label>
            <textarea
              className="pl-4 block w-full lg:w-full md:w-[455px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("responsibilities", {
                minLength: {
                  value: 0,
                  message: "Must be at least 10 characters long",
                },
                maxLength: {
                  value: 300,
                  message: "Maximum length is 300 characters",
                },
                // required: {
                //   value: true,
                //   message: 'First Name is required'
                // },
                // maxLength : maxLengthValidation(300),
              })}
              // onChange={(event)=>textHandleChange(event, updateText)}
              onChange={textHandleChange}
              placeholder="About us"
              // name="aboutus"
              rows={5}
              // maxLength={300}
            />
             {errors.responsibilities && (
              <p className="text-red-700 text-sm">{errors.responsibilities.message}</p>
            )}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Referred By
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("referred_by", {
                  required: {
                    value: true,
                    message: "Referred is required",
                    // maxLength : () => maxLengthValidation(10),
                  },                 
                maxLength : maxLengthValidation(20),
                })}
                placeholder="Independent candidate or referred by RSR Global Partner"
              />
              {errors.referred_by && (
                <p className="text-red-700 text-sm">
                  {errors.referred_by.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex mx-6">
            <button
              type="submit"
              className="mx-6 w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default PersonalInformation;
