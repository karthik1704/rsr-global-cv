import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
// import { Stepper } from "react-form-stepper";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const Form = () => {
  return (
    <div>
        <div className="w-9/12 p-8 shadow-2xl  border-gray-300 text-justify mx-auto my-7">

        {/* <Stepper /> */}

          <form>
            <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Personal information</h1>
            <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
              Before you start, select the language you want to use in your
              profile
            </p>

            <hr />

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
                <label className="block text-gray-700 font-bold text-sm head">
                  First Name<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
                  
                />
              </div>

              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                <label className="block text-gray-700 font-bold text-sm head">
                  Last Name<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
                />
              </div>
            </div>

            <div className="mb-4 px-6 ">
              <label className="block text-gray-700 font-bold text-sm head">
                Select the language in which you want to create your profile<span className="text-red-700">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full md:w-[485px]   border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select a Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">English</SelectItem>
                    <SelectItem value="banana">Korean</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
                <label className="block text-gray-700 font-bold text-sm head">
                  Date of birth<span className="text-red-700">*</span>
                </label>
                <div className="flex">
                <input
                  type="text"
                  className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                  placeholder="DD"
                />

<input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
  placeholder="MM" />
  <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
  placeholder="YYYY" />
  </div>
              </div>

              <div className="mb-4 px-6 ">
              <label className="block text-gray-700 font-bold text-sm head">
               Gender<span className="text-red-700">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full md:w-[285px]   border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select a Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Male</SelectItem>
                    <SelectItem value="banana">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            </div>

            <div className="mb-4 px-6 w-full md:w-[664px]">
              <label className="block text-gray-700 font-bold text-sm head">
                Nationality<span className="text-red-700">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-6/12 md:w-[220px]   border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select a Nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">India</SelectItem>
                    <SelectItem value="banana">Srilanka</SelectItem>
                    <SelectItem value="blueberry">Bangladesh</SelectItem>
                    <SelectItem value="grapes">Bhutan</SelectItem>
                    <SelectItem value="pineapple">Indonesia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <h1 className="px-6  text-gray-700 font-bold ">Contact</h1>
            <hr />

            <div className="mb-4  w-2/4 px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
                Email address<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
              />
            </div>

            <div className="mb-4 px-6 ">
              <label className="block text-gray-700 font-bold text-sm head">
                Phone<span className="text-red-700">*</span>
              </label>
              <div className="flex flex-col gap-3 lg:flex-row">

              <Select>
                <SelectTrigger className="w-[120px]  border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Phone-code</SelectLabel> */}
                    <SelectItem value="apple">+91</SelectItem>
                    <SelectItem value="banana">+44</SelectItem>
                    <SelectItem value="blueberry">+92</SelectItem>
                    <SelectItem value="grapes">+97</SelectItem>
                    <SelectItem value="pineapple">+01</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <input
                type="text"
                placeholder="eg:555 22 33 44"
                className="border border-gray-300 bg-gray-100 rounded-md py-2 block w-[360px] pl-4"
              />
              </div>
</div>

<h1 className="px-6 text-gray-700 font-bold">Address</h1>
<hr />
<div className="mb-4 px-6 ">
<label className="block text-gray-700 font-bold text-sm head">
                Type<span className="text-red-700">*</span>
              </label>
<Select>
                <SelectTrigger className="w-[220px]  border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Home</SelectItem>
                    <SelectItem value="banana">Business</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>

              </div>

<div className="mb-4 w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
                Address Line 1<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg:Street Name, P.O, Box"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              />
            </div>

            <div className="mb-4  w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
                Address Line 2<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Apartment, suite, unit, building, floor, etc"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              />
            </div>

            <div className="flex flex-col gap-3 md:flex-row">

            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-gray-700 font-bold text-sm head">
                Postal code<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg:6000 01"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              />
            </div>

            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-gray-700 font-bold text-sm head">
                City<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg:Chennai"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              />
            </div>

            <div className="mb-4 w-full md:w-2/6 px-6">
              <label className="block text-gray-700 font-bold text-sm head">
                Country<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg:India"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              />
            </div>

            </div>

          </form>
        </div>
      {/* </div> */}

      {/* <Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]} activeStep={1} /> */}
    </div>
  );
};

export default Form;
