import { useState } from "react";
import ImageUploader from "@/components/image/image_uploader";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {dateFormatter} from '@/lib/utils';

const PersonalInformation = ({ setData, personalInformation, image,setShowPreview }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    getValues,
    trigger,
    control,
  } = useForm({
    defaultValues: {},
  });

  const validateDateRange = (value) => {
    const minDate = new Date("1950-01-01");
    const maxDate = new Date("2100-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

  const [show, setShowForm] = useState(true);

  const [uploadedImage, setUploadedImage] = useState("");


  const handleImageChange = (imageurl) => {
    setUploadedImage(imageurl);
  };

  const handleForm = (personalData) => {
    console.log(personalData);
    setData((prevState,) => ({
      ...prevState,
      personalInformation: {...personalData,profileImage: uploadedImage }

    }));
    setShowForm(false);
    setShowPreview(true);
  };

  return (
    <div>
        {!show && personalInformation && 

        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          {!!uploadedImage &&
          <div>
            
            <Image src={uploadedImage} height={150} width={150} alt="" className="rounded-full"/>
          </div>}
    <p className="text-lg font-semibold text-gray-800">
        Name : <span className="font-light">{personalInformation.firstName} {personalInformation.lastName}</span>
    </p>
    <p className="text-lg font-semibold text-gray-800">
        Date of birth : <span className="font-light">{dateFormatter(personalInformation.dob)}</span>
    </p>
    <p className="text-lg font-semibold text-gray-800">
        Nationality : <span className="font-light">{personalInformation.nationality}</span> 
    </p>
    <p className="text-lg font-semibold text-gray-800">
        Address : <span className="font-light">{personalInformation.add1} {personalInformation.add2} {personalInformation.code} {personalInformation.city} {personalInformation.country}</span>
    </p>
    <p className="text-lg font-semibold text-gray-800">
        Email Address : <span className="font-light">{personalInformation.email}</span> 
    </p>
    <p className="text-lg font-semibold text-gray-800">
        Main activities and responsibilities : <span className="font-light">{personalInformation.about}</span> 
    </p>
    <div className="flex gap-4">
        <button
        onClick={()=>setShowForm(true)}
            type="button"
            className="w-24 bg-white text-black hover:text-white hover:bg-green-600 p-2 font-bold rounded-md border border-gray-300"
        >
            Edit
        </button>
        {/* <button
            type="button"
            className="w-24 bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md"
        >
            Delete
        </button> */}
    </div>
</div>

        }
      {show && (
        <form onSubmit={handleSubmit(handleForm)}>

          <h1 className="mb-4 px-6  text-black font-bold text-3xl">
                Personal information
              </h1>
              <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                Before you start, select the language you want to use in your
                profile
              </p>

              <ImageUploader onImageChange={handleImageChange} />

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row mt-2">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                First Name<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                })}
                placeholder="Type name same as in the passport"
              />
              {errors.firstName && (
                <p className="text-red-700 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <br />

            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Last Name<span className="text-gray-700"></span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                })}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-700 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
            <label className="block text-black font-bold text-sm head">
              Date of birth<span className="text-red-700">*</span>
            </label>
            <input
              className="px-4 block w-1/2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              type="date"
              {...register("dob", {
                required: {
                  value: true,
                  message: "Date of birth required",
                },
                validate: validateDateRange,
              })}
              placeholder="dob"
              min="1950-01-01"
              max="2100-12-31"
            />
            {errors.dob && (
              <p className="text-red-700 text-sm">{errors.dob.message}</p>
            )}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
                Nationality
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("nationality", {
                  required: {
                    value: true,
                    message: "Nationality is required",
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

          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
            <label className="block text-black font-bold text-sm head mb-2">
              Address Line 1<span className="text-red-700">*</span>
            </label>
            <input
              className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("add1", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              placeholder="eg:Street Name, P.O, Box"
            />
            {errors.add1 && (
              <p className="text-red-700 text-sm">{errors.add1.message}</p>
            )}
          </div>

          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
            <label className="block text-black font-bold text-sm head mb-2">
              Address Line 2<span className="text-red-700">*</span>
            </label>
            <input
              className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("add2", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              placeholder="Apartment, suite, unit, building, floor, etc"
            />
            {errors.add2 && (
              <p className="text-red-700 text-sm">{errors.add2.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                Postal code<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("code", {
                  required: {
                    value: true,
                    message: "postal code is required",
                  },
                })}
                placeholder="eg:6000 01"
              />
              {errors.code && (
                <p className="text-red-700 text-sm">{errors.code.message}</p>
              )}
            </div>

            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                City<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                placeholder="eg: chennai"
              />
              {errors.city && (
                <p className="text-red-700 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-black font-bold text-sm head mb-2">
                Country<span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                })}
                placeholder="eg: India"
              />
              {errors.country && (
                <p className="text-red-700 text-sm">{errors.country.message}</p>
              )}
            </div>
          </div>

          <h1 className="px-6 text-black font-bold">Contact</h1>
          <hr className="my-2" />

          <div className="mb-4 w-full md:w-2/6 px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Email Address<span className="text-red-700">*</span>
            </label>
            <input
              className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Id is required",
                },
              })}
              placeholder="Enter Your E-mail"
            />
            {errors.email && (
              <p className="text-red-700 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4  w-full px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Main activities and responsibilities
            </label>
            <textarea
              className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
              {...register("about", {
                // required: {
                //   value: true,
                //   message: 'First Name is required'
                // }
              })}
              placeholder="About us"
              rows={5}
            />
          </div>
<div className="flex mx-6">
{/* <button
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
              >
                Cancel
              </button> */}
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
