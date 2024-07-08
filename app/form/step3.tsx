import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Personal = () => {
  return (
    <div>
            <div className="w-9/12 p-8  shadow-2xl border-gray-300 text-justify my-7 mx-auto">
              <form>
              <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Personal Skills</h1>
              <p className={`mb-4 px-6 text-gray-700 font-bold text-sm ${inter.variable} latin`}>
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
                Mother tongue<span className="text-red-700">*</span>
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

            <hr />

            <div className="mb-4  w-2/4 px-6  ">
              <label className="block text-gray-700 font-bold text-sm head">
                Other language<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
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

            <hr />

            </div>

              </form>
              </div>
      </div>
  )
}

export default Personal