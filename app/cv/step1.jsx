import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import "./stepper.css";

const PersonalInformation = ({ formData, handleChange, onNext,exit,toggleModal }) => {
    return (
        <>
        <div className="w-9/12 p-8 shadow-2xl  border-gray-300 text-justify mx-auto my-7">

  <form>
    <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Personal information</h1>
    <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
      Before you start, select the language you want to use in your
      profile
    </p>

    <hr />

    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
      <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
        <label className="block text-gray-700 font-bold text-sm head">
          First Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4"
          placeholder="Type name same as in the passport"
          name="firstName"
          value={formData.firstName}
        onChange={handleChange}
        required
        />
      </div>

      <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
        <label className="block text-gray-700 font-bold text-sm head">
          Last Name<span className="text-gray-700"></span>
        </label>
        <input
          type="text"
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
    </div>


    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
      <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
        <label className="block text-gray-700 font-bold text-sm head">
          Date of birth<span className="text-red-700">*</span>
        </label>
        
        <input
          type="date"
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block mr-2 pl-4 w-1/2"
          placeholder="DD"
          name="dob"
                        value={formData.dob}
                      onChange={handleChange}
                      required
        />

      </div>

    <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
    <label className="block text-gray-700 font-bold text-sm head">
       Gender<span className="text-red-700">*</span>
      </label>
      <select
       name="gen"
        value={formData.gen}
        onChange={handleChange}
        className=" w-3/4 border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block pl-4"
      >
        <option value="">Select an Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    </div>

    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
    <div className="mb-4 px-6 w-full md:w-[664px]">
      <label className="block text-gray-700 font-bold text-sm head">
        Nationality<span className="text-red-700">*</span>
      </label>
      <select
             name="nat"
             value={formData.nat}
             onChange={handleChange}
        className="w-1/2 border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block pl-4">
          <option value="">Select an Nationality</option>
        <option value="india">India</option>
        <option value="srilanka">SriLanka</option>
      </select>
    </div>

    <div className="mb-4 px-6 w-full md:w-[664px]">
      <label className="block text-gray-700 font-bold text-sm head">
       Status<span className="text-red-700">*</span>
      </label>
      <select
             name="add"
             value={formData.add}
             onChange={handleChange}
        className=" w-full md:w-[285px] border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block pl-4">
          <option value="">Select an Status</option>
        <option value="Married">Married</option>
        <option value="Unmarried">Unmarried</option>
      </select>
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
        name="add1"
                        value={formData.add1}
                      onChange={handleChange}
                      required
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
        name="add"
                        value={formData.add2}
                      onChange={handleChange}
                      required
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
        name="Postal"
                        value={formData.Postal}
                      onChange={handleChange}
                      required
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
        name="city"
                        value={formData.city}
                      onChange={handleChange}
                      required
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
        name="country"
                        value={formData.country}
                      onChange={handleChange}
                      required
      />
    </div>

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
        name="email"
                        value={formData.email}
                      onChange={handleChange}
                      required
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
        name="phone"
                        value={formData.phone}
                      onChange={handleChange}
                      required
      />
      </div>
</div>

<div className="mb-4  w-full px-6">
            <label className="block text-gray-700 font-bold text-sm head">
              Main activities and responsibilities
            </label>
            <textarea
              placeholder={`-about\n-about\n-about`}
              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full resize-none pl-4"
              rows={5}
              name="about"
                  value={formData.about}
                onChange={handleChange}
                required
            ></textarea>
          </div>

  </form>
</div>

<div className='btn flex justify-around'>
              <button onClick={toggleModal} className='btn1 text-white font-semibold'>Exit</button>
<div>
<button onClick={onNext} className='btn1 text-white font-semibold'>Next</button>
</div>
</div>
        </>
    )
}

export default PersonalInformation