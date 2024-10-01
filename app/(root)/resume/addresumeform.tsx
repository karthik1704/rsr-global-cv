'use client';
import React, { useEffect } from 'react'
import { createResume } from './action'
import { useFormState } from 'react-dom'
import { toast } from 'sonner';

const initalState = {
  message: null,
  type: null,
  fieldErrors: {
    resume_title: null,
  },
};
const AddResumeForm = () => {
  const [ state, actionFn] = useFormState(createResume, initalState)
  
  useEffect(() => {
    if(state?.type==='Success'){
      toast.success(state?.message, {
        duration: 10000,
        closeButton: true,
      });

    }else {
    if (state?.message)
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });}
  }, [state?.message, state]);
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-green-700 mb-6">Resume</h1>
    <form action={actionFn} className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <label for="resume_title" class="block text-gray-700 text-sm font-semibold mb-2">Resume Title</label>
        <input type="text" name="resume_title" id="resume_title" 
               className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-700" 
               placeholder="Enter your resume title" required />
        <button type="submit" 
                className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition duration-200">
            Create Resume
        </button>
    </form>
</div>
  )
}

export default AddResumeForm