import React from 'react'

const WorkExp = () => {
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
                />

<input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
  placeholder="MM" />
  <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
  placeholder="YYYY" />
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
                />

<input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 mr-2 pl-4"
  placeholder="MM" />
  <input type="text" className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-24 pl-4"
  placeholder="YYYY" />
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
              ></textarea>
            </div>

              </form>
              </div>
{/* </div> */}
      </div>
  )
}

export default WorkExp