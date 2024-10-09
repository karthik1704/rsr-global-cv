import { useState } from "react";
import {useForm,useFieldArray,useFormContext,FormProvider} from 'react-hook-form';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {dateFormatter,getCurrentDate} from '@/lib/utils';
import { useParams } from "next/navigation";
import { updateWorkExperience } from "../../action";

      //capitalize letter

      const capitalizeFirstLetter = (text) => {
        if (!text) return text;
        const words = text.split(' ');
        if (words.length === 0) return text;
      
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      
        return words.join(' ');
      };

//       type Resume ={
//         resume_title:string;
//         employer: string;
//   website: string;
//   location: string;
//   occupation: string;
//   from_date: "2024-10-01";
//   to_date: "2024-10-01";
//   currently_working: false;
//   about_company: string;
//   responsibilities: string;
//  }

const WorkExperience = ({setData,workExperience,setShowPreview,data,showPreview,setSelectedSection,selectedSection}) =>{
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
          workfrom1: undefined,
    workto1: undefined,
    companyName1: undefined,
    aboutcompany1: undefined,
    about1: undefined,
    position1: undefined,
    location1: undefined,
    workwebsite1: undefined,
    workdepartment1: undefined,
    workaddress1: undefined,
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
      const {id} = useParams()

      const updateWorkExperienceWithId = updateWorkExperience.bind(null, id as string)

      const sectionDeleted = () =>{
        setIsVisible(false)
      }

       //capitalize letter

      const handleChange = (event, index, field) => {
        const { value } = event.target;
        const formattedValue = capitalizeFirstLetter(value);
        
      
        setValue(`experiences.${index}.${field}`, formattedValue);
      };


      // const [isSwitchOn, setIsSwitchOn] = useState(false);

      // const handleSwitchChange = (checked) => {
      //   setIsSwitchOn(checked);
      //   if (checked) {
      //     clearErrors("experiences.0.workto");
      //     setValue("experiences.0.workto", "");
      //   }
      // };

      //from and to date validation
      
      const [fromDate, setFromDate] = useState('');

      const getMinToDate = () =>{
        if(!fromDate) return undefined;
        const minDate = new Date(fromDate);
        minDate.setDate(minDate.getDate()+1);
        return minDate.toISOString().split('T')[0];
      }

      // const getMinToDate = () => {
      //   if (!fromDate) return undefined;
      //   const minDate = new Date(fromDate);
      //   minDate.setDate(minDate.getDate() + 1);
      //   return minDate;
      // };
    
      //work exp To Date disable
    
      const workexpto = (value, { workto }) => {
        if (!value || switchStates) {
          return true;
        }
        return (
          new Date(value) >= new Date(workto) || "End date must be after start date"
        );
      };

      const [switchStates, setSwitchStates] = useState(
        experienceFields.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
      );

      const handleSwitchChange = (index) => {
        setSwitchStates((prevStates) => {
          const newSwitchState = !prevStates[index];
          if(newSwitchState){
            setValue(`experiences.${index}.workto`,null);
          }
          return{
          ...prevStates,
          [index]: newSwitchState,
          }
        });
      };


      const validateDateRange = (value) => {
        const minDate = new Date("1980-01-01");
        const maxDate = new Date("2024-12-31");
        const selectedDate = new Date(value);
    
        if (selectedDate < minDate || selectedDate > maxDate) {
          return "please enter valid Year";
        }
        return true;
      };

      const cancel =() =>{
        const newSelectoptions = selectedSection.filter(selected=>selected!=='work');
        setSelectedSection(newSelectoptions);
                setShowPreview(true);
      }
      

    const [show, setShowForm] = useState(true);

    const handleForm = async (workexpData) => {
        console.log(workexpData);
        setData((prevState) => ({
          ...prevState,
          jobappliedfor:workexpData.jobappliedfor,
          workExperience: workexpData.experiences,
        }));
        // workexpData.resume_title = workExperience.resume_title;
        // const res = await updateWorkExperienceWithId(workexpData)
        setShowForm(false);
        setShowPreview(true);
      };
// console.log(workExperience)
    return(
        <div className="my-8">

            {isVisible && !show && workExperience.length &&
            <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-black text-2xl font-bold uppercase">Work Experience</p>
             {!!data.jobappliedfor && <p className="text-lg font-semibold text-gray-800">Job Applied : <span className="font-light">{data.jobappliedfor}</span></p>}
              {workExperience.map((exp,index)=>(
                <div className="space-y-4" key={index}>
<p className="text-lg font-semibold text-gray-800">Employer : <span className="font-light capitalize">{exp.companyName}</span></p>
<p className="text-lg font-semibold text-gray-800">Website : <span className="font-light">{exp.workwebsite}</span></p>
<p className="text-lg font-semibold text-gray-800">Location : <span className="font-light capitalize">{exp.location}</span></p>
<p className="text-lg font-semibold text-gray-800">Occupation: <span className="font-light capitalize">{exp.position}</span></p>
<p className="text-lg font-semibold text-gray-800">From : <span className="font-light">{dateFormatter(exp.workfrom)}</span></p>
<p className="text-lg font-semibold text-gray-800">To : {exp.workto?(<span className="font-light">{dateFormatter(exp.workto)}</span>
):( 'Currently working')}</p>
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
              {/* <button
                type="button"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
                onClick={sectionDeleted}
              >
                Delete
              </button> */}

            </div>
                </div>
              ))}
              
                </div>
            }
            {show && (
            <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Job applied for
                </label>
                <input
                  type="text"
                  placeholder="Software engineer"
                  className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
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
                  <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
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
                    </div>

                    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
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
                      placeholder="Company name"
                      className="pl-4 block w-full rounded-md border-0 capitalize py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.experiences?.[index]?.companyName && (
                      <p className="text-red-700 text-sm">
                        {errors.experiences[index].companyName.message}
                      </p>
                    )}
                    </div>
                    </div>

                 

                  <div className="mb-4.5 flex flex-col lg:flex-row mt-2">
                    <div className="w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Website<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.workwebsite`, {
                          required: {
                            value: true,
                            message: "Company’s Website is required",
                          },
                          pattern: {
                            value: /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z0-9]+\.(com|org|in|net|co.in|co|biz|edu|io|gov)$/,
                            message: "Please enter a valid website (e.g. www.google.com)",
                          },
                        })}
                        placeholder="Company’s website"
                        className="pl-4 block w-full max-w-xs sm:max-w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.experiences?.[index]?.workwebsite && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workwebsite.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
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
                        placeholder="Working location"
                        className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
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
                      className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.experiences?.[index]?.position && (
                      <p className="text-red-700 text-sm">
                        {errors.experiences[index].position.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col lg:flex-col xl:flex-row gap-4 md:flex-col md:gap-6 lg:mx-auto xl:mx-auto">
                    <div className="mb-4 w-full md:px-6">
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
                        min="1980-01-01"
                        max={getCurrentDate()}
                        onChange={(e)=>setFromDate(e.target.value)}
                        className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                      />
                      {errors.experiences?.[index]?.workfrom && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workfrom.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full md:px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        To<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`experiences.${index}.workto`, {
                          required: !switchStates[index] ? {
                            value: true,
                            message: "Date is required",
                          } : false,
                          validate: (value) => !switchStates[index] ? workexpto(value, getValues(`experiences.${index}`)) : true,
                        })}
                        min={getMinToDate()}
                        max={getCurrentDate()}
                        className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                        disabled={switchStates[index] || !fromDate}
                      />
                      {errors.experiences?.[index]?.workto && (
                        <p className="text-red-700 text-sm">
                          {errors.experiences[index].workto.message}
                        </p>
                      )}
                    </div>
                   

                    <>
                   {index ===0 &&(
                    <div className="mb-4  w-2/6  px-6  ">
                      <Label className="block text-black font-bold text-sm head mb-2">
                        Working as
                      </Label>
                      <Switch
                        id={`switch-${index}`}
                        checked={switchStates[index]}
                        onCheckedChange={() => handleSwitchChange(index)}
                        // checked={isSwitchOn}
                        // onCheckedChange={handleSwitchChange}
                      />
                    </div>
                  )}
                    </>
                  </div>
                  

                  <div className="mb-4 w-full md:px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      About company
                    </label>
                    <textarea
                      className="pl-4 block w-full lg:w-full md:w-[455px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      {...register(`experiences.${index}.aboutcompany`, {
                        // required: {
                        //   value: true,
                        //   message: 'First Name is required'
                        // }
                      })}
                      value={item.aboutcompany}
              onChange={(event) => handleChange(event, index, 'aboutcompany')}
                      placeholder="About company"
                      rows={5}
                    />
                  </div>

                  <div className="mb-4 w-full md:px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Main activities and responsibilities
                    </label>
                    <textarea
                      className="pl-4 block w-full lg:w-full md:w-[455px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      {...register(`experiences.${index}.about2`, {
                        // required: {
                        //   value: true,
                        //   message: 'First Name is required'
                        // }
                      })}
                      value={item.about2}
                      onChange={(event) => handleChange(event, index, 'about2')}
                      placeholder="About work responsibilities"
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
                // onClick={()=> setShowPreview(true)}
                onClick={cancel}
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