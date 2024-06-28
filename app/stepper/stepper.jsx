    "use client"
    import "./stepper.css";
    import { Label } from "@/components/ui/label"
    import { Switch } from "@/components/ui/switch"
    
    import React, { useState } from 'react';
    import Form from './form'
import WorkExp from './step2';
import Personal from './step3';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const steps = ["Personal information", "Work Experience", "Personal Skills",'Completed'];
// const [currentStep, setCurrentStep] = useState(0);
    function Stepper() {
        const [step, setStep] = useState(1);
        const [formData, setFormData] = useState({
          // firstName: '',
          // lastName: '',
          email: '',
          phone: '',
          address: '',
          experience: '',
          education: '',
          skills: '',
          gen: '',
        });
      
        const handleNext = () => {
          setStep(step + 1);
        };
      
        const handlePrev = () => {
          setStep(step - 1);
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        };
      
        const renderStep = () => {
          switch (step) {
            case 1:
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
                  className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
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
                <div className="flex">
                <input
                  type="text"
                  className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                  placeholder="DD"
                  name="dob"
                                value={formData.dob}
                              onChange={handleChange}
                              required
                />

<input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
  placeholder="MM"
  name="dob1"
                                value={formData.dob1}
                              onChange={handleChange}
                              required />
  <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
  placeholder="YYYY"
  name="dob2"
                                value={formData.dob2}
                              onChange={handleChange}
                              required />
  </div>
              </div>

              <div className="mb-4 px-6 ">
              <label className="block text-gray-700 font-bold text-sm head">
               Gender<span className="text-red-700">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full md:w-[285px]   border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select a Gender" value={formData.gen} onChange={handleChange}/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  <SelectItem name="gen" value="male">Male</SelectItem>
                    <SelectItem name="gen" value='Female' >Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            </div>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
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

            <div className="mb-4 px-6 ">
              <label className="block text-gray-700 font-bold text-sm head">
               Status<span className="text-red-700">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full md:w-[285px]   border-gray-300 bg-gray-100 rounded-md">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Married</SelectItem>
                    <SelectItem value="banana">unMarried</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
                name="address"
                                value={formData.address}
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
                                value={formData.add}
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

          </form>
        </div>
     
    </div>
                );
            case 2:
              // return <WorkExp formData={formData} handleChange={handleChange} />;
              return (
                <div>
                        {/* <div className=" min-h-screen flex  justify-center items-center bg-slate-100"> */}
                        <div className="w-9/12 p-8  shadow-2xl border-gray-300 text-justify my-7 mx-auto">
            
                          <form>
                          <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Work Experience</h1>
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                         Describe all your work experience. you can include paid work, volunteering, internship, apprenticeships, freelancing and other activities.
                        </p>
            
                        <div className="mb-4  w-2/4 px-6  ">
                        <p className='text-gray-700 font-bold text-sm'>New work experience</p>
                          <label className="block text-gray-700 font-bold text-sm head">
                            Occupation or position held<span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Title of the occupation"
                            className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                            name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                          />
                        </div>
            
                        <div className="mb-4  w-2/4 px-6  ">
                          <label className="block text-gray-700 font-bold text-sm head">
                            Employer<span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Name of the Employer"
                            className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                            name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                          />
                        </div>
            
                        <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
                            <label className="block text-gray-700 font-bold text-sm head">
                             City<span className="text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder='e.g: Paris'
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
                          </div>
            
                          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              country<span className="text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder='Select'
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
            
                        <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                        <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              From<span className="text-red-700">*</span>
                            </label>
                            <div className="flex">
                            <input
                              type="text"
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                              placeholder="DD"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
            
            <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
              placeholder="MM"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
              placeholder="YYYY"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              </div>
                          </div>
                          <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              To<span className="text-red-700">*</span>
                            </label>
                            <div className="flex">
                            <input
                              type="text"
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                              placeholder="DD"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
            
            <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
              placeholder="MM"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
              placeholder="YYYY"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              </div>
                          </div>
                          </div>
            
                          <div className="mb-4  w-full px-6  ">
                          <label className="block text-gray-700 font-bold text-sm head">
                            Main activities and responsibilities
                          </label>
                          <textarea
                            placeholder={`-maintence of computers\n -relations with suppliers\n -coaching a junior ice Hockey team (10 hours/week)`}
                            className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full resize-none pl-4"
                            rows={5}
                            name="responsibilities"
                                value={formData.responsibilities}
                              onChange={handleChange}
                              required
                          ></textarea>
                        </div>
            
                          </form>
                          </div>
            {/* </div> */}
                  </div>
              )
            case 3:
              // return <Personal formData={formData} handleChange={handleChange}/>;
              return (
                <div>
                        <div className="w-9/12 p-8  shadow-2xl border-gray-300 text-justify my-7 mx-auto">
                          <form>
                          <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Education and training</h1>
                          <p className={`mb-4 px-6 text-gray-700 font-bold text-sm`}>
                          Describe your personal skills, such as language skills and digital skills, etc. 
                        </p>
            
                        <div className="w-11/12 p-8  border border-gray-300 text-justify">
            
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                         Language Skills 
                        </p>
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                         Present your language skills here. 
                        </p>
            
                        <hr />
            
                        <div className="mb-4 px-6 ">
                          <label className="block text-gray-700 font-bold text-sm head">
                          Title of qualification awarded
                          <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
                            name="otherlanguage"
                            placeholder="Title of qualification"
                                value={formData.otherlanguage}
                              onChange={handleChange}
                              required
                          />
                        </div>
            
                        <hr />
            
                        <div className="mb-4  w-2/4 px-6  ">
                          <label className="block text-gray-700 font-bold text-sm head">
                          Organisation providing education and training<span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
                            name="otherlanguage"
                            placeholder="Name of the organisation"
                                value={formData.otherlanguage}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div className="mb-4  w-2/4 px-6  ">
                          <label className="block text-gray-700 font-bold text-sm head">
                          Website<span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
                            name="otherlanguage"
                            placeholder="e.g. www.university.com"
                                value={formData.otherlanguage}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
                            <label className="block text-gray-700 font-bold text-sm head">
                             City<span className="text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder='e.g: Paris'
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
                          </div>
            
                          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              country<span className="text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder='Select'
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-4 w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
                Address Line 1<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg:Street Name, P.O, Box"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="address"
                                value={formData.address}
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
                                value={formData.add}
                              onChange={handleChange}
                              required
              />
            </div>

            <div className="mb-4  w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
              Postal code<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg: 0035482"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="add"
                                value={formData.add}
                              onChange={handleChange}
                              required
              />
            </div>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                        <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              From<span className="text-red-700">*</span>
                            </label>
                            <div className="flex">
                            <input
                              type="text"
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                              placeholder="DD"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
            
            <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
              placeholder="MM"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
              placeholder="YYYY"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              </div>
                          </div>
                          <div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
                            <label className="block text-gray-700 font-bold text-sm head">
                              To<span className="text-red-700">*</span>
                            </label>
                            <div className="flex">
                            <input
                              type="text"
                              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
                              placeholder="DD"
                              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required
                            />
            
            <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
              placeholder="MM"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
              placeholder="YYYY"
              name="position"
                                value={formData.position}
                              onChange={handleChange}
                              required />
              </div>
                          </div>

                          <Switch id="on-going" />
      <Label htmlFor="on-going">on going</Label>
                          </div>
            
                        </div>
            
                        <div className="w-11/12 p-8  border border-gray-300 text-justify">
            
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm head">
                         Digital Skills 
                        </p>
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm head">
                         List your digital skills here and group them. 
                        </p>
            
                        <hr />
            
                        </div>
            
                          </form>
                          </div>
                  </div>
              )
              case 4:
                // return <Personal formData={formData} />;
                return(
                  <div>
                     <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl text-center">Preview</h1>
                    <div className="w-9/12 p-8 shadow-2xl  border-gray-300 text-justify mx-auto my-7">
                    <p className="block text-gray-700 font-bold text-base  head">Name: {formData.firstName} {formData.lastName}</p>
                    <hr />
                {/* <p className="block text-gray-700 font-bold text-base  head">Language: {formData.language}</p> */}
                {/* <hr /> */}
                <p className="block text-gray-700 font-bold text-base  head ">D.O.B: {formData.dob}{formData.dob1}{formData.dob2}</p>
                <hr />
                <p className="block text-gray-700 font-bold text-base  head ">Gender: {formData.gen}</p>
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
                <p className="block text-gray-700 font-bold text-base head ">Other language: {formData.otherlanguage}</p>

                </div>
                  </div>
                )
            default:
              return null;
          }
        };
      
        return (
          <div className="container mx-auto my-10">

{/* <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div> */}

            {renderStep()}
            <div className="flex justify-between mt-5 w-2/4 mx-auto fixed bottom-0">
              {step !== 1 && <button onClick={handlePrev} className=" btn bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Previous</button>}
              {step !== 4 && <button onClick={handleNext} className=" btn1 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Next</button>}
            </div>
          </div>
        );
      }

    export default Stepper;
