import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { dateFormatter, getCurrentDate } from "@/lib/utils";
import { useParams } from "next/navigation";
import { deleteEducation, updateEducation } from "../../action";
import { Education as EducationType } from "../typings";
import { toast } from "sonner";
import DeleteButton from "@/components/deleteButton/deletebutton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  setData: any;
  education: EducationType[];
  setShowPreview: any;
  setSelectedSection: any;
  selectedSection: string[];
};

type FormValues = {
  educations: {
    id?: number;
    title_of_qualification: string;
    organization_name: string;
    from_date: Date | string;
    to_date?: Date | string;
    city: string;
    country: string;
  }[];
};

const Education = ({
  setData,
  education,
  setShowPreview,
  setSelectedSection,
  selectedSection,
}: Props) => {
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
      educations: education.length
        ? education
        : [
            {
              title_of_qualification: "",
              organization_name: "",
              from_date: "",
              to_date: "",
              city: "",
              country: "",
              id: undefined,
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
    name: "educations",
  });

  const [show, setShowForm] = useState(true);
  const { id } = useParams();

  const updateEducationWithId = updateEducation.bind(null, id as string);
  const deleteEducationWithId = deleteEducation.bind(null, id as string);

  useEffect(() => {
    if (education.length) {
      setShowForm(false);
    }
  }, [education.length]);

  const handleForm = async (educationData: FormValues) => {
    console.log(educationData);
    // setData((prevState) => ({
    //   ...prevState,
    //   education: educationData.education,
    // }));
    // educationData.resume_title = education.resume_title;
    const res = await updateEducationWithId(educationData);

    if(res?.type==="Success"){ 
      toast.success("Education Updated Successfully", {
        duration: 10000,
        closeButton: true,
      });
      setShowForm(false);
      setShowPreview(true);
    }else{
      toast.error("Failed to update Education",{
        duration: 10000,
        closeButton: true,
      });
    }

   
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "education"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
  };

  //validation function on date

  const [fromDate, setFromDate] = useState("");

  const validateToDate = (value: string) => {
    const getMinToDate = () => {
      if (!fromDate) return undefined;
      const minDate = new Date(fromDate);
      minDate.setDate(minDate.getDate() + 1);
      return minDate.toISOString().split("T")[0];
    };

    if (!fromDate) return "select a from date first";

    const from = new Date(fromDate);
    const to = new Date(value);
  };

  const getMinToDate = () => {
    if (!fromDate) return undefined;
    const minDate = new Date(fromDate);
    minDate.setDate(minDate.getDate() + 1);
    return minDate.toISOString().split("T")[0];
  };

  //--validation function for date year range--

  const validateDateRange = (value: string |Date | undefined) => {
    if (!value) {
      return ;
    }
    const minDate = new Date("1980-01-01");
    const maxDate = new Date("2024-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

  const handleDeleteEducation = async (edu_id: number) => {
    const res = await deleteEducationWithId(edu_id);
    if(res?.type==="Success"){
      toast.success("Education Deleted Successfully", {
        duration: 10000,
        closeButton: true,
      });
    }else{
      toast.error("Failed to delete Education",{
        duration: 10000,
        closeButton: true,
      });
    }
  }

  return (
    <div className="my-8">
      {!show && education.length && (
        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex justify-between items-center text-center border-b-2 pb-2">
              <p className="text-black text-2xl font-bold uppercase">
                Education and Training
              </p>
              <button
                  onClick={() => setShowForm(true)}
                  type="button"
                  className="md:w-24 w-14 h-12 items-center capitalize bg-green-600 text-white hover:text-slate-100 hover:bg-green-700 p-2 font-bold rounded-md"
                >
                  Edit
                </button>
              </div>
          {education.map((edu, index) => (
            <div
              
              key={edu.id}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-10/12">
              <p className="text-lg font-semibold text-gray-800">
                Qualification :{" "}
              </p>
              <p className="font-light capitalize">
                  {edu.title_of_qualification}
                </p>
              <p className="text-lg font-semibold text-gray-800">
                Organisation :{" "}
              </p>
              <p className="font-light capitalize">
                  {edu.organization_name}
                </p>
              <p className="text-lg font-semibold text-gray-800">
                From :{" "}
              </p>
              <p className="font-light">
                  {dateFormatter(edu.from_date)}
                </p>
              <p className="text-lg font-semibold text-gray-800">
                To :{" "}
              </p>
              <p className="font-light">
                  {dateFormatter(edu.to_date)}
                </p>
              <p className="text-lg font-semibold text-gray-800">
                City :{" "}
              </p>
              <p className="font-light capitalize">
                  {edu.city}
                </p>
              <p className="text-lg font-semibold text-gray-800">
                Country :{" "}
              </p>
              <p className="font-light capitalize">
                  {edu.country}
                </p>
              </div>
              <div>
            <DeleteButton onClick={()=> handleDeleteEducation(edu.id)}/>
              </div>
            </div>
          ))}
        </div>
      )}
      {show && (
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            {educationFields?.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                    <div className="flex justify-between items-center">
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
                  </div>

                  <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Title of qualification/credential awarded
                      <span className="text-red-700">*</span>
                    </label>
                    <input type="hidden" {...register(`educations.${index}.id`)} />
                    <input
                      {...register(`educations.${index}.title_of_qualification`, {
                        required: {
                          value: true,
                          message: "Qualification is required",
                        },
                      })}
                      placeholder="Title of qualification"
                      className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.educations?.[index]?.title_of_qualification && (
                      <p className="text-red-700 text-sm">
                        {errors.educations[index].title_of_qualification.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Organisation providing education and training
                      <span className="text-red-700">*</span>
                    </label>
                    <input
                      {...register(`educations.${index}.organization_name`, {
                        required: {
                          value: true,
                          message: "Organisation Name is required",
                        },
                      })}
                      placeholder="Name of the organisation"
                      className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {errors.educations?.[index]?.organization_name && (
                      <p className="text-red-700 text-sm">
                        {errors.educations[index].organization_name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4.5 flex flex-col lg:flex-row mt-2">
                    <div className="w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        From<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`educations.${index}.from_date`, {
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
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                      {errors.educations?.[index]?.from_date && (
                        <p className="text-red-700 text-sm">
                          {errors.educations[index].from_date.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        To<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`educations.${index}.to_date`, {
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
                      {errors.educations?.[index]?.to_date && (
                        <p className="text-red-700 text-sm">
                          {errors.educations[index].to_date.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col lg:flex-row mt-2">
                    <div className="w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        City<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`educations.${index}.city`, {
                          required: {
                            value: true,
                            message: "City is required",
                          },
                        })}
                        placeholder="City"
                        className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.educations?.[index]?.city && (
                        <p className="text-red-700 text-sm">
                          {errors.educations[index].city.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Country<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...register(`educations.${index}.country`, {
                          required: {
                            value: true,
                            message: "Country is required",
                          },
                        })}
                        placeholder="Country"
                        className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {errors.educations?.[index]?.country && (
                        <p className="text-red-700 text-sm">
                          {errors.educations[index].country.message}
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
                onClick={() => appendeEducation({id: undefined, title_of_qualification: "", organization_name: "", from_date: "", to_date: "", city: "", country: ""})}
              >
                +
              </button>
            </div>

            <div className="flex mx-6">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white border border-gray-300 text-black hover:bg-green-600 hover:text-slate-100 p-2 font-bold rounded-md"
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
  );
};

export default Education;
