import { useState } from "react";
import {useForm,useFieldArray} from 'react-hook-form';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {dateFormatter} from '@/lib/utils';

const WorkExperience = ({setData,workExperience,setShowPreview,data}) =>{
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
        defaultValues: {
          jobappliedfor:undefined,
            experiences: 
            [
                {
                  workfrom: undefined,
                  workto: undefined,
                  companyName: undefined,
                  aboutcompany: undefined,
                  about2: undefined,
                  position: undefined,
                  location: undefined,
                  workwebsite: undefined,
                  workdepartment: undefined,
                  workaddress: undefined,
                },
              ],
        },
      });

      const {
        fields: experienceFields,
        append: appendExperience,
        remove: removeExperience,
      } = useFieldArray({
        control,
        name: "experiences",
      });

      const [isVisible, setIsVisible] = useState(true);

      const sectionDeleted = () =>{
        setIsVisible(false)
      }

      const [isSwitchOn, setIsSwitchOn] = useState(false);

      const handleSwitchChange = (checked) => {
        setIsSwitchOn(checked);
        if (checked) {
          clearErrors("experiences.0.workto");
          setValue("experiences.0.workto", "");
        }
      };
    
      //work exp To Date disable
    
      const workexpto = (value, { workto }) => {
        if (!value || isSwitchOn) {
          return true;
        }
        return (
          new Date(value) >= new Date(workto) || "End date must be after start date"
        );
      };


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

    const handleForm = (workexpData) => {
        console.log(workexpData);
        setData((prevState) => ({
          ...prevState,
          jobappliedfor:workexpData.jobappliedfor,
          workExperience: workexpData.experiences,
        }));
        setShowForm(false);
        setShowPreview(true);
      };
// console.log(workExperience)
    return(
        <div className="my-8">
            {isVisible && !show && workExperience.length &&
            <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
             {!!data.jobappliedfor && <p className="text-lg font-semibold text-gray-800">Job Applied : <span className="font-light">{data.jobappliedfor}</span></p>}
              {workExperience.map((exp,index)=>(
                <div className="space-y-4" key={index}>
<p className="text-lg font-semibold text-gray-800">Employer : <span className="font-light">{exp.companyName}</span></p>
<p className="text-lg font-semibold text-gray-800">Website : <span className="font-light">{exp.workwebsite}</span></p>
<p className="text-lg font-semibold text-gray-800">Location : <span className="font-light">{exp.location}</span></p>
<p className="text-lg font-semibold text-gray-800">Occupation: <span className="font-light">{exp.position}</span></p>
<p className="text-lg font-semibold text-gray-800">From : <span className="font-light">{dateFormatter(exp.workfrom)}</span></p>
<p className="text-lg font-semibold text-gray-800">To : <span className="font-light">{dateFormatter(exp.workto)}</span></p>
<p className="text-lg font-semibold text-gray-800">About Company : <span className="font-light">{exp.aboutcompany}</span></p>
<p className="text-lg font-semibold text-gray-800">work Responsibilities : <span className="font-light">{exp.about2}</span></p>
<div className="flex mx-6">
              <button
              onClick={()=>setShowForm(true)}
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
                // onClick={handlePrevious}
              >
                Edit
              </button>
              <button
                type="button"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
                onClick={sectionDeleted}
              >
                Delete
              </button>
            </div>
                </div>
              ))}
              
                </div>
            }
            {show && (
            <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <div className="ml-7 my-2 w-1/4">
                <label className="block text-black font-bold text-sm head mb-2">
                  Job applied for<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg : Software Engineer"
                  className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("jobappliedfor", {
                    // required: {
                    //   value: true,
                    //   message: "job applied is required",
                    // },
                  })}
                />
                {/* {errors.jobappliedfor && (
                <p className="text-red-700 text-sm">{errors.jobappliedfor.message}</p>
              )} */}
              </div>

              {experienceFields.map((item, index) => (
                <div key={item.id}>
                  <div className="mb-4  w-2/4 px-6">
                    <div className="flex justify-between items-center	">
                      <p className="text-black font-bold text-3xl mb-4">
                        Work experience
                      </p>
                      <button
                        type="button"
                        className="w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2"
                        onClick={() => removeExperience(index)}
                      >
                        X
                      </button>
                    </div>

                    <label className="block text-black font-bold text-sm head mb-2">
                      Employer<span className="text-red-700">*</span>
                    </label>
                    <input
                      {...register(`experiences.${index}.companyName`, {
                        required: {
                          value: true,
                          message: "Employer name is required",
                        },
                      })}
                      placeholder="companyName"
                      className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.experiences?.[index]?.companyName && (
                      <p className="text-red-700 text-sm">
                        {errors.experiences[index].companyName.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                    <div className="mb-4  w-2/4 px-6  ">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Website<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.workwebsite`, {
                          required: {
                            value: true,
                            message: "Website is required",
                          },
                        })}
                        placeholder="Website Name"
                        className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.experiences?.[index]?.workwebsite && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workwebsite.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4  w-2/4 px-6  ">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Location
                      </label>
                      <input
                        {...register(`experiences.${index}.location`, {
                          // required: {
                          //   value: true,
                          //   message: 'First Name is required'
                          // }
                        })}
                        placeholder="Location Name"
                        className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-4  w-2/4 px-6  ">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Occupation or position held
                      <span className="text-red-700">*</span>
                    </label>
                    <input
                      {...register(`experiences.${index}.position`, {
                        required: {
                          value: true,
                          message: "Position is required",
                        },
                      })}
                      placeholder="Position"
                      className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.experiences?.[index]?.position && (
                      <p className="text-red-700 text-sm">
                        {errors.experiences[index].position.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                    <div className="mb-4  w-2/6 px-6  ">
                      <label className="block text-black font-bold text-sm head mb-2">
                        From<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.workfrom`, {
                          required: {
                            value: true,
                            message: "Date is required",
                          },
                          validate: validateDateRange,
                        })}
                        min="1950-01-01"
                        max="2100-12-31"
                        className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                      />
                      {errors.experiences?.[index]?.workfrom && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workfrom.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4  w-2/6  px-6  ">
                      <label className="block text-black font-bold text-sm head mb-2">
                        To<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.workto`, {
                          required: {
                            value: !isSwitchOn,
                            message: "Date is required",
                          },
                          // validate: validateDateRange
                          validate: (value) =>
                            workexpto(value, getValues(`experiences.${index}`)),
                        })}
                        min="1950-01-01"
                        max="2100-12-31"
                        className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                        disabled={isSwitchOn}
                      />
                      {errors.experiences?.[index]?.workto && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workto.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4  w-2/6  px-6  ">
                      <Label className="block text-black font-bold text-sm head mb-2">
                        Working On
                      </Label>
                      <Switch
                        id="airplane-mode"
                        checked={isSwitchOn}
                        onCheckedChange={handleSwitchChange}
                      />
                    </div>
                  </div>

                  <div className="mb-4  w-full px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      About company
                    </label>
                    <textarea
                      className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      {...register(`experiences.${index}.aboutcompany`, {
                        // required: {
                        //   value: true,
                        //   message: 'First Name is required'
                        // }
                      })}
                      placeholder="about Company"
                      rows={5}
                    />
                  </div>

                  <div className="mb-4  w-full px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Main activities and responsibilities
                    </label>
                    <textarea
                      className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      {...register(`experiences.${index}.about2`, {
                        // required: {
                        //   value: true,
                        //   message: 'First Name is required'
                        // }
                      })}
                      placeholder="about work responsibilities"
                      rows={5}
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center mx-6 py-4">
                <p className="text-gray-700 font-bold text-base head">
                  New work experience
                </p>
                <button
                  type="button"
                  className="w-14 items-center capitalize bg-slate-300 hover:bg-slate-200 text-black text-2xl mx-5 rounded-md font-extrabold"
                  onClick={() =>
                    appendExperience({ years: 0, description: "" })
                  }
                >
                  +
                </button>
              </div>

              <div className="flex mx-6">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
                // onClick={handlePrevious}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
                // onClick={handleNext}
              >
                Save
              </button>
            </div>
            </div>
            </form>
            )}
        </div>
    )

}

export default WorkExperience