import React from 'react';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import "./stepper.css";

const Skills = ({ formData, handleChange, onPrevious, onNext }) => {
    return (
        <>

<div className="w-9/12 p-8  shadow-2xl border-gray-300 text-justify my-7 mx-auto">
                          <form>
                          <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Education and training</h1>
                          <p className={`mb-4 px-6 text-gray-700 font-bold text-sm`}>
                          Describe your personal skills, such as language skills and digital skills, etc. 
                        </p>
            
                        <div className="w-11/12 p-8  border border-gray-300 text-justify">
            
                        {/* <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                         Language Skills 
                        </p>
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
                         Present your language skills here. 
                        </p> */}
                        
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
                            name="college"
                            placeholder="Name of the organisation"
                                value={formData.college}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
              <label className="block text-gray-700 font-bold text-sm head">
               From<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                placeholder='e.g: Paris'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="edfrom"
                  value={formData.edfrom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-gray-700 font-bold text-sm head">
                To<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                placeholder='Select'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="edto"
                  value={formData.edto}
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
                name="pi1"
                                value={formData.pi1}
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
                name="pi2"
                                value={formData.pi2}
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
                              name="pi3"
                                value={formData.pi3}
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
                              name="pi4"
                                value={formData.pi4}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

            <div className="mb-4  w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
              Postal code<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="eg: 0035482"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="pi5"
                                value={formData.pi5}
                              onChange={handleChange}
                              required
              />
            </div>
            
                        </div>
            
                        <div className="w-11/12 p-8  border border-gray-300 text-justify">
            
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm head">
                         Digital Skills 
                        </p>
                        <p className="mb-4 px-6  text-gray-700 font-bold text-sm head">
                         List your digital skills here and group them. 
                        </p>

                        <div className="mb-4  w-full lg:w-1/2 md:w-[504px] px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
              Mother tongue<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                // placeholder="eg: 0035482"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="lan"
                                value={formData.lan}
                              onChange={handleChange}
                              required
              />
            </div>
            
                        <hr />
            
                        </div>
            
                          </form>
                          </div>
                          <div className='btn flex justify-around'>
              <button className='btn1 text-white font-semibold'>Exit</button>
<div>
<button onClick={onNext} className='btn1 text-white font-semibold'>Next</button>
<button onClick={onPrevious} className='btn1 text-white font-semibold'>Previous</button>
</div>
</div>
        </>
    )
}

export default Skills