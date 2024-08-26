import { useState } from "react";
import {useForm,useFieldArray} from 'react-hook-form';
import {dateFormatter,getCurrentDate} from '@/lib/utils'

const Training = ({setData,training,setShowPreview,setSelectedSection,selectedSection}) =>{
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
            training: [
                {
                  Hobbies: undefined,
                  institute: undefined,
                  trainingfrom: undefined,
                  trainingto: undefined,
                  traininglocation: undefined,
                },
              ],
        },
      });

      const {
        fields: trainingFields,
        append: appendTraining,
        remove: removeTraining,
      } = useFieldArray({
        control,
        name: "training",
      });

      const [show, setShowForm] = useState(true);

      const handleForm = (trainData) => {
          console.log(trainData);
          setData((prevState) => ({
            ...prevState,
            training: trainData.training,
          }));
          setShowForm(false);
          setShowPreview(true);
        };

        const cancel =() =>{
          const newSelectoptions = selectedSection.filter(selected=>selected!=='additional');
          setSelectedSection(newSelectoptions);
                  setShowPreview(true);
        }

        //--validation function for date year range--

  const validateDateRange = (value) => {
    const minDate = new Date("1950-01-01");
    const maxDate = new Date("2100-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

    return(

<div className="my-8">
{!show && training.length &&
            <div>
              {training.map((train,index)=>(
                <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md" key={index}>
                  <p className="text-black text-2xl font-bold uppercase">Trainings and Awards</p>
{/* <p className="text-lg font-semibold text-gray-800">Hobbies : <span className="font-light">{train.Hobbies}</span></p> */}
<p className="text-lg font-semibold text-gray-800">Institute : <span className="font-light">{train.institute}</span></p>
<p className="text-lg font-semibold text-gray-800">From : <span className="font-light">{dateFormatter(train.trainingfrom)}</span></p>
<p className="text-lg font-semibold text-gray-800">To : <span className="font-light">{dateFormatter(train.trainingto)}</span></p>
<p className="text-lg font-semibold text-gray-800">Location : <span className="font-light">{train.traininglocation}</span></p>
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
              {trainingFields?.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-between items-center	mb-4  w-2/4 px-6">
                      <p className="text-black font-bold text-3xl mb-4">
                        Additional Information
                      </p>
                      {index > 0 && (
                        <button
                          type="button"
                          className="w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2"
                          onClick={() => removeTraining(index)}
                        >
                          X
                        </button>
                      )}
                    </div>

                    {/* <div className="mb-4  w-2/4 px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Hobbies and interests
                        <span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`training.${index}.Hobbies`, {
                          // required: {
                          //   value: true,
                          //   message: 'First Name is required'
                          // }
                        })}
                        // placeholder='Title of Qualification'
                        className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                    </div> */}

                    <div>
                      <div className="mb-4  w-2/4 px-6">
                        <div className="flex justify-between items-center	">
                          <p className="text-gray-700 font-extrabold text-sm">
                            Training and awards
                          </p>
                        </div>
                        <label className="block text-black font-bold text-sm head my-2">
                          Institute <span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`training.${index}.institute`, {
                            required: {
                              value: true,
                              message: "institute is required",
                            },
                          })}
                          placeholder="Name of institute"
                          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />

                        {errors.training?.[index]?.institute && (
                          <p className="text-red-700 text-sm">
                            {errors.training[index].institute.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                        <div className="mb-4  w-2/4 px-6  ">
                          <label className="block text-black font-bold text-sm head mb-2">
                            From<span className="text-red-700">*</span>
                          </label>
                          <input
                            {...register(`training.${index}.trainingfrom`, {
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
                          />
                          {errors.training?.[index]?.trainingfrom && (
                            <p className="text-red-700 text-sm">
                              {errors.training[index].trainingfrom.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mb-4  w-2/4 px-6  ">
                        <label className="block text-black font-bold text-sm head mb-2">
                          To<span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`training.${index}.trainingto`, {
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
                        />
                        {errors.training?.[index]?.trainingto && (
                          <p className="text-red-700 text-sm">
                            {errors.training[index].trainingto.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4  w-2/4 px-6  ">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Location<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`training.${index}.traininglocation`, {
                          required: {
                            value: true,
                            message: "Location is required",
                          },
                        })}
                        placeholder="Location Name"
                        className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.training?.[index]?.traininglocation && (
                        <p className="text-red-700 text-sm">
                          {errors.training[index].traininglocation.message}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center mx-6">
                <p className="text-gray-700 font-extrabold text-base head">
                  New Training & Awards
                </p>
                <button
                  type="button"
                  className="w-14 rounded-md items-center capitalize bg-slate-300 hover:bg-slate-200 text-black  mx-5 text-2xl font-bold"
                  onClick={() => appendTraining({ years: 0, description: "" })}
                >
                  +
                </button>
              </div>

              <div className="flex mx-6 my-4">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
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

            </div>
            </form>
             )}
             </div>
            )
        }

        export default Training