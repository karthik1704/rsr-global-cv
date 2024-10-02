import { useState } from "react";
import {useForm,useFieldArray} from 'react-hook-form';
import {dateFormatter,getCurrentDate} from '@/lib/utils';
import { useParams } from "next/navigation";
import { updateEducation } from "../../action";



const Education = ({setData,education,setShowPreview,sectionDeleted,setSelectedSection,selectedSection}) =>{
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
        getValues,
        trigger,
        control,
      } = useForm<Resume>({
        defaultValues: {
            education: [
                {
                  qualification: undefined,
                  organisation: undefined,
                  educationfrom: undefined,
                  educationto: undefined,
                  educationcity: undefined,
                  educationcountry: undefined,
                },
              ],
        },
      });

      const {
        fields: educationFields,
        append: appendeEducation,
        remove: removeEducation,
      } = useFieldArray({
        control,
        name: "education",
      });

      const [show, setShowForm] = useState(true);
      const {id} = useParams()

      const updateEducationWithId = updateEducation.bind(null, id as string)

      const handleForm = async (educationData:Resume) => {
          console.log(educationData);
          setData((prevState) => ({
            ...prevState,
            education: educationData.education,
          }));
          // educationData.resume_title = education.resume_title;
          // const res = await updateEducationWithId(educationData)

          setShowForm(false);
          setShowPreview(true);
        };

        const cancel =() =>{
          const newSelectoptions = selectedSection.filter(selected=>selected!=='education');
          setSelectedSection(newSelectoptions);
                  setShowPreview(true);
        }

        //validation function on date

        const [fromDate, setFromDate]= useState('');

        const validateToDate = (value) =>{
          if(!fromDate) return 'select a from date first';

          const from = new Date(fromDate);
          const to = new Date(value);
        }

        const getMinToDate = () =>{
          if(!fromDate) return undefined;
          const minDate = new Date(fromDate);
          minDate.setDate(minDate.getDate()+1);
          return minDate.toISOString().split('T')[0];
        };

          //--validation function for date year range--

  const validateDateRange = (value) => {
    const minDate = new Date("1980-01-01");
    const maxDate = new Date("2024-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

    return(
<div className="my-8">
{!show && education.length &&
            <div>
              {education.map((edu,index)=>(
                <div  className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md" key={index}>
                  <p className="text-black text-2xl font-bold uppercase">Education and Training</p>
<p className="text-lg font-semibold text-gray-800">Qualification : <span className="font-light capitalize">{edu.qualification}</span></p>
<p className="text-lg font-semibold text-gray-800">Organisation : <span className="font-light capitalize">{edu.organisation}</span></p>
<p className="text-lg font-semibold text-gray-800">From : <span className="font-light">{dateFormatter(edu.educationfrom)}</span></p>
<p className="text-lg font-semibold text-gray-800">To : <span className="font-light">{dateFormatter(edu.educationto)}</span></p>
<p className="text-lg font-semibold text-gray-800">City : <span className="font-light capitalize">{edu.educationcity}</span></p>
<p className="text-lg font-semibold text-gray-800">Country : <span className="font-light capitalize">{edu.educationcountry}</span></p>
<div className="flex mx-6">
              <button
              onClick={()=>setShowForm(true)}
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
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
              {educationFields?.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-between items-center	mb-4  w-2/4 px-6">
                      <p className="text-black font-bold text-3xl mb-4">
                        Education
                      </p>
                      {index > 0 && (
                        <button
                          type="button"
                          className="w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2"
                          onClick={() => removeEducation(index)}
                        >
                          X
                        </button>
                      )}
                    </div>

                    <div className="mb-4 w-2/4 px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Title of qualification/credential awarded
                        <span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`education.${index}.qualification`, {
                          required: {
                            value: true,
                            message: "Qualification is required",
                          },
                        })}
                        placeholder="Title of qualification"
                        className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.education?.[index]?.qualification && (
                        <p className="text-red-700 text-sm">
                          {errors.education[index].qualification.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-2/4 px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Organisation providing education and training
                        <span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`education.${index}.organisation`, {
                          required: {
                            value: true,
                            message: "Organisation Name is required",
                          },
                        })}
                        placeholder="Name of the organisation"
                        className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.education?.[index]?.organisation && (
                        <p className="text-red-700 text-sm">
                          {errors.education[index].organisation.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                      <div className="mb-4 w-2/4 px-6">
                        <label className="block text-black font-bold text-sm head mb-2">
                          From<span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`education.${index}.educationfrom`, {
                            required: {
                              value: true,
                              message: "Date is required",
                            },
                            validate: validateDateRange,
                          })}
                          min="1980-01-01"
                          max={getCurrentDate()}
                          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                          type="Date"
                          onChange={(e)=>setFromDate(e.target.value)}
                        />
                        {errors.education?.[index]?.educationfrom && (
                          <p className="text-red-700 text-sm">
                            {errors.education[index].educationfrom.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4 w-2/4 px-6">
                        <label className="block text-black font-bold text-sm head mb-2">
                          To<span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`education.${index}.educationto`, {
                            required: {
                              value: true,
                              message: "Date is required",
                            },
                            validate: validateDateRange,
                          })}
                          min={getMinToDate()}
                          max={getCurrentDate()}
                          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                          type="Date"
                          disabled={!fromDate}
                        />
                        {errors.education?.[index]?.educationto && (
                          <p className="text-red-700 text-sm">
                            {errors.education[index].educationto.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                      <div className="mb-4 w-2/4 px-6">
                        <label className="block text-black font-bold text-sm head mb-2">
                          City<span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`education.${index}.educationcity`, {
                            required: {
                              value: true,
                              message: "City is required",
                            },
                          })}
                          placeholder="City"
                          className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />
                        {errors.education?.[index]?.educationcity && (
                          <p className="text-red-700 text-sm">
                            {errors.education[index].educationcity.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4 w-2/4 px-6">
                        <label className="block text-black font-bold text-sm head mb-2">
                          Country<span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`education.${index}.educationcountry`, {
                            required: {
                              value: true,
                              message: "Country is required",
                            },
                          })}
                          placeholder="Country"
                          className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />
                        {errors.education?.[index]?.educationcountry && (
                          <p className="text-red-700 text-sm">
                            {errors.education[index].educationcountry.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center mx-6 my-3">
                <p className="text-gray-700 font-extrabold text-base head">
                  Education
                </p>
                <button
                  type="button"
                  className="w-14 rounded-md items-center capitalize bg-slate-300 hover:bg-slate-200 text-black  mx-5 text-2xl font-bold"
                  onClick={() =>
                    appendeEducation({ years: 0, description: "" })
                  }
                >
                  +
                </button>
              </div>

              <div className="flex mx-6">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:bg-green-600 hover:text-slate-100 p-2 font-bold rounded-md"
                onClick={cancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
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
            
            export default Education;