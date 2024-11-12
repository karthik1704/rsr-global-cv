import { use, useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { dateFormatter, getCurrentDate } from "@/lib/utils";
import { useParams } from "next/navigation";
import { deleteAdditionalInfo, updateAdditionalInfo } from "../../action";
import { TrainingAward } from "../typings";
import { toast } from "sonner";
import DeleteButton from "@/components/deleteButton/deletebutton";
import EditButton from "@/components/editButton/editbutton";


type TrainingProps = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  trainings: TrainingAward[];
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSection: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSection: string[];
};

type FormValues = {
  training_awards: {
    title: string;
    awarding_institute: string;
    from_date: string;
    to_date: string;
    location: string;
    id?: number;
  }[];
};

const Training = ({
  setData,
  trainings,
  setShowPreview,
  setSelectedSection,
  selectedSection,
}: TrainingProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    getValues,
    trigger,
    control,
  } = useForm<FormValues>({
    defaultValues: {
      training_awards: trainings.length
        ? trainings
        : [
            {
              title: "",
              awarding_institute: "",
              from_date: "",
              to_date: "",
              location: "",
              id: undefined,
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
    name: "training_awards",
  });

  const [show, setShowForm] = useState(true);
  const { id } = useParams<{id:string;}>();

  const updateAdditionalWithId = updateAdditionalInfo.bind(null, id );
  const deleteTrainingWithId = deleteAdditionalInfo.bind(null, id);

  useEffect(() => {
    if (trainings.length) {
      setShowForm(false);
    }
  }, [trainings.length]);
        //validation function on date

        const [fromDate, setFromDate]=useState('');

        const getMinToDate = () =>{
          if(!fromDate) return undefined;
          const minDate = new Date(fromDate);
          minDate.setDate(minDate.getDate()+1);
          return minDate.toISOString().split('T')[0];
        }

        //--validation function for date year range--

  const handleForm = async (trainData:FormValues) => {
    console.log(trainData);
    // setData((prevState) => ({
    //   ...prevState,
    //   training: trainData.training,
    // }));
    // trainData.resume_title = training.resume_title;
    const res = await updateAdditionalWithId(trainData)
    if(res?.type==="Success"){
      toast.success("Training & Awards added successfully", {
        duration: 10000,
        closeButton: true,
      });
      setShowForm(false);
      setShowPreview(true);
    }else{
      toast.error("Failed to add Training & Awards", {
        duration: 10000,
        closeButton: true,
      });
    }
   
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "additional"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
  };

  //--validation function for date year range--

  const validateDateRange = (value:string) => {
    const minDate = new Date("1950-01-01");
    const maxDate = new Date("2100-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };
  const handleDeleteTraining = async (training_id: string | number) => {
    const res = await deleteTrainingWithId(training_id);

    if (res?.type==="Success") {
      toast.success("Training & Awards Deleted Successfully",{
        duration: 10000,
        closeButton: true,
      });
    } else {
      toast.error("Failed to delete Training & Awards",{
        duration: 10000,
        closeButton: true,
      });
    }
  }

  return (
    <div className="my-8">
      {!show && trainings.length && (
        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex justify-between items-center text-center border-b-2 pb-2">
              <p className="text-black lg:text-2xl text-xl font-bold uppercase">
                Honors & Awards
              </p>
                <EditButton onClick={() => setShowForm(true)}/>
              </div>
          {trainings.map((train, index) => (
            <div
              
              key={train.id}
            >
              {/* <div className="flex justify-between border-b-2 pb-2">
              <p className="text-black text-2xl font-bold uppercase">
                Honors & Awards
              </p>
              <button
                  onClick={() => setShowForm(true)}
                  type="button"
                  className="w-24 items-center capitalize bg-green-600 text-white hover:text-slate-100 hover:bg-green-700 p-2 font-bold rounded-md"
                >
                  Edit
                </button>
              </div> */}
              {/* <p className="text-lg font-semibold text-gray-800">Hobbies : <span className="font-light">{train.Hobbies}</span></p> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-10/12">
              <p className="lg:text-lg text-base font-semibold text-gray-800">
                Title of Award :{" "}
              </p>
              <p className="font-light lg:text-lg text-base capitalize">{train.title}</p>
              <p className="lg:text-lg text-base font-semibold text-gray-800">
                Awarding Institution :{" "}
              </p>
              <p className="font-light lg:text-lg text-base capitalize">{train.awarding_institute}</p>
              <p className="lg:text-lg text-basefont-semibold text-gray-800">
                From :{" "}
              </p>
              <p className="font-light lg:text-lg text-base">
                  {dateFormatter(train.from_date)}
                </p>
              <p className="lg:text-lg text-base font-semibold text-gray-800">
                To :{" "}
              </p>
              <p className="font-light lg:text-lg text-base">
                  {dateFormatter(train.to_date)}
                </p>
              <p className="lg:text-lg text-base font-semibold text-gray-800">
                Location :{" "}
              </p>
              <p className="font-light lg:text-lg text-base capitalize">
                  {train.location}
                </p>
              </div>
              <div>

                <DeleteButton onClick={()=>handleDeleteTraining(train.id)}/>
              </div>
            </div>
          ))}
        </div>
      )}

{show && (
<form onSubmit={handleSubmit(handleForm)}>
<div>
              {trainingFields?.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                    <div className="flex justify-between items-center">
                      <p className="text-black font-bold text-3xl mb-4">
                      Honors & Awards
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
                      <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                        <div className="flex justify-between items-center	">
                          <p className="text-gray-700 font-extrabold text-sm">
                            Awards
                          </p>
                        </div>
                        <label className="block text-black font-bold text-sm head my-2">
                         Title <span className="text-red-700">*</span>
                        </label>
                        <input {...register(`training_awards.${index}.id`)} type="hidden" />

                        <input
                          {...register(`training_awards.${index}.title`, {
                            required: {
                              value: true,
                              message: "institute is required",
                            },
                          })}
                          placeholder="Title of the award"
                          className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />

                        {errors.training_awards?.[index]?.title && (
                          <p className="text-red-700 text-sm">
                            {errors.training_awards[index].title.message}
                          </p>
                        )}
                      </div>
                    
                    </div>
                      <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                        {/* <div className="flex justify-between items-center	">
                        </div> */}
                        <label className="block text-black font-bold text-sm head my-2">
                         Awarding Institute <span className="text-red-700">*</span>
                        </label>
                        <input
                          {...register(`training_awards.${index}.awarding_institute`, {
                            required: {
                              value: true,
                              message: "institute is required",
                            },
                          })}
                          placeholder="Name of institute"
                          className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />

                      {errors.training_awards?.[index]?.awarding_institute && (
                        <p className="text-red-700 text-sm">
                          {errors.training_awards[index].awarding_institute.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                      <div className="mb-4  w-full">
                      <div className="flex flex-col lg:flex-col xl:flex-row gap-4 md:flex-col md:gap-6 lg:mx-auto xl:mx-auto">
                        <div className="mb-4 w-full md:px-6">
                          <label className="block text-black font-bold text-sm head mb-2">
                            From<span className="text-red-700">*</span>
                          </label>
                          <input
                            {...register(`training_awards.${index}.from_date`, {
                              required: {
                                value: true,
                                message: "Date is required",
                              },
                              validate: validateDateRange,
                            })}
                            min="1980-01-01"
                            max={getCurrentDate()}
                            className="pl-4 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                            type="Date"
                            onChange={(e)=>setFromDate(e.target.value)}
                          />
                          {errors.training_awards?.[index]?.from_date && (
                            <p className="text-red-700 text-sm">
                              {errors.training_awards[index].from_date.message}
                            </p>
                          )}
                        </div>
                      
                      </div>
                    </div>

                    <div className="mb-4 w-full md:px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        To<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`training_awards.${index}.to_date`, {
                          required: {
                            value: true,
                            message: "Date is required",
                          },
                          validate: validateDateRange,
                        })}
                        min="1980-01-01"
                        max={getCurrentDate()}
                        className="pl-4 block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                      />
                      {errors.training_awards?.[index]?.to_date && (
                        <p className="text-red-700 text-sm">
                          {errors.training_awards[index].to_date.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4  w-2/4 md:px-6  ">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Location<span className="text-red-700">*</span>
                    </label>
                    <input
                      {...register(`training_awards.${index}.location`, {
                        required: {
                          value: true,
                          message: "Location is required",
                        },
                      })}
                      placeholder="Location name"
                      className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.training_awards?.[index]?.location && (
                      <p className="text-red-700 text-sm">
                        {errors.training_awards[index].location.message}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="flex items-center mx-6">
              <p className="text-gray-700 font-extrabold text-base head">
                New Awards
              </p>
              <button
                type="button"
                className="w-14 rounded-md items-center capitalize bg-slate-300 hover:bg-slate-200 text-black  mx-5 text-2xl font-bold"
                onClick={() => appendTraining({ title: "", awarding_institute: "", from_date: "", to_date: "", location: "" , id: undefined})}
              >
                +
              </button>
            </div>

            <div className="flex mx-6 my-4">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white border border-gray-300 text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
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
  );
};

export default Training;
