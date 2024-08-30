import { useState } from "react";
import {useForm} from 'react-hook-form'

const Language = ({setData,language,selectedSection,setSelectedSection,setShowPreview,selected}) =>{
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

    const [show, setShowForm] = useState(true);

    const handleForm = (languageData) => {
      console.log(languageData);
      setData((prevState,) => ({
        ...prevState,
        language: {...languageData }
  
      }));
      setShowForm(false);
      setShowPreview(true);
    };

    const cancel =() =>{
        const newSelectoptions = selectedSection.filter(selected=>selected!=='language');
        setSelectedSection(newSelectoptions);
                setShowPreview(true);
                setShowForm(false);
      }


    return(
        <>
        {!show && language &&
                <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
           <p className="text-black text-2xl font-bold uppercase">Language Information</p>

    {language.mothertongue && (<p className="text-lg font-semibold text-gray-800">
        Mother language : <span className="font-light">{language.mothertongue}</span> 
    </p>)}

    {language.otherlanguage && (
    <p className="text-lg font-semibold text-gray-800">
        Other language : <span className="font-light">{language.otherlanguage}</span>
    </p>
)}
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
        <div>
<form onSubmit={handleSubmit(handleForm)}>

<h1 className="my-4 px-6  text-black font-bold text-3xl">
                Language Skills
              </h1>

              <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
              Mother tongue
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("mothertongue", {
                  required: {
                    value: true,
                    message: "language is required",
                  },
                })}
                placeholder=" Mother tongue"
              />
              {errors.mothertongue && (
                <p className="text-red-700 text-sm">
                  {errors.mothertongue.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
              Other language
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                {...register("otherlanguage", {
                  required: {
                    value: true,
                    message: "language is required",
                  },
                })}
                placeholder=" Other language"
              />
              {errors.otherlanguage && (
                <p className="text-red-700 text-sm">
                  {errors.otherlanguage.message}
                </p>
              )}
            </div>
          </div>

<div className="flex mx-6 my-4">
              <button
                type="button"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md"
                onClick={cancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
              >
                Save
              </button>
            </div>

    </form>
    </div>
     )}
</>
)
}

export default Language