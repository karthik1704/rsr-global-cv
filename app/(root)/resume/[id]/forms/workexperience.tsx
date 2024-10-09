import { useCallback, useEffect, useState } from "react";
import {
  useForm,
  useFieldArray,
  useFormContext,
  FormProvider,
  useWatch,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { dateFormatter, getCurrentDate } from "@/lib/utils";
import { useParams } from "next/navigation";
import { updateWorkExperience } from "../../action";
import { Experience } from "../typings";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

//capitalize letter

const capitalizeFirstLetter = (text: string) => {
  if (!text) return text;
  const words = text.split(" ");
  if (words.length === 0) return text;

  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return words.join(" ");
};

type Props = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  workExperience: Experience[];
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  // showPreview: any;
  setSelectedSection: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSection: string[];
  job_applied_for?: string;
};

type FormValues = {
  job_applied_for: string;
  experiences: {
    id?: number;
    employer: string;
    website: string;
    location: string;
    occupation: string;
    from_date: Date | string;
    to_date?: Date | string | null;
    currently_working: boolean;
    about_company: string;
    responsibilities: string;
  }[];
};

const WorkExperience = ({
  setData,
  workExperience,
  setShowPreview,
  data,
  // showPreview,
  setSelectedSection,
  selectedSection,
  job_applied_for,
}: Props) => {
  const form = useForm<FormValues>({
    defaultValues: {
      job_applied_for: job_applied_for ?? "",
      experiences: workExperience ? workExperience : [],
    },
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: "experiences",
  });
  const watchExperience = useWatch({
    control: form.control,
    name: "experiences",
  });
  const [isVisible, setIsVisible] = useState(true);
  const { id } = useParams();

  const updateWorkExperienceWithId = updateWorkExperience.bind(
    null,
    id as string
  );

  const sectionDeleted = () => {
    setIsVisible(false);
  };

  //capitalize letter

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof FormValues["experiences"][number]
  ) => {
    console.log(event.target.value);
    console.log(`experiences.${index}.${field}`);
    const { value } = event.target;
    const formattedValue = capitalizeFirstLetter(value);

    form.setValue(`experiences.${index}.${field}`, formattedValue);
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

  const [fromDate, setFromDate] = useState("");

  const getMinToDate = () => {
    if (!fromDate) return undefined;
    const minDate = new Date(fromDate);
    minDate.setDate(minDate.getDate() + 1);
    return minDate.toISOString().split("T")[0];
  };

  //work exp To Date disable

  const workexpto = (
    value: string,
    { to_date }: { to_date: string | Date }
  ) => {
    if (!value ) {
      return true;
    }
    return (
      new Date(value) >= new Date(to_date) ||
      "End date must be after start date"
    );
  };

  const [switchStates, setSwitchStates] = useState<boolean[]>(
    workExperience.length
      ? workExperience.map((exp) => exp.currently_working)
      : []
  );

  const updateSwitchStates = useCallback(() => {
    const currently_workings =
      watchExperience?.map((field) => field.currently_working ?? false) || [];
    if (currently_workings.length) {
      setSwitchStates((prevState) => {
        if (JSON.stringify(prevState) !== JSON.stringify(currently_workings)) {
          return currently_workings;
        }
        return prevState;
      });
    }
  }, [watchExperience]);

  useEffect(() => {
    updateSwitchStates();
  }, [updateSwitchStates]);

  const handleSwitchChange = (index: number) => {
    setSwitchStates((prevStates) => {
      const newSwitchState = !prevStates[index];
      if (newSwitchState) {
        form.setValue(`experiences.${index}.to_date`, null);
      }
      return {
        ...prevStates,
        [index]: newSwitchState,
      };
    });
  };

  const validateDateRange = (value: string | Date) => {
    const minDate = new Date("1980-01-01");
    const maxDate = new Date("2024-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "work"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
  };

  const [show, setShowForm] = useState(true);
  useEffect(() => {
    // if(!workExperience.length) setShowForm(false);
    if (workExperience.length) setShowForm(false);
  }, [workExperience.length]);

  const handleForm = async (workexpData: FormValues) => {
    console.log(workexpData);
    // setData((prevState) => ({
    //   ...prevState,
    //   jobappliedfor: workexpData.job_applied_for,
    //   workExperience: workexpData.experiences,
    // }));
    // workexpData.resume_title = workExperience.resume_title;
    const res = await updateWorkExperienceWithId(workexpData);
    setShowForm(false);
    setShowPreview(true);
  };
  // console.log(workExperience)
  return (
    <div className="my-8">
      {!show && workExperience.length && (
        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-black text-2xl font-bold uppercase">
            Work Experience
          </p>
          {!!data.jobappliedfor && (
            <p className="text-lg font-semibold text-gray-800">
              Job Applied :{" "}
              <span className="font-light">{data.jobappliedfor}</span>
            </p>
          )}
          {workExperience.map((exp, index) => (
            <div className="space-y-4" key={index}>
              <p className="text-lg font-semibold text-gray-800">
                Employer :{" "}
                <span className="font-light capitalize">{exp.employer}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Website : <span className="font-light">{exp.website}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Location :{" "}
                <span className="font-light capitalize">{exp.location}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Occupation:{" "}
                <span className="font-light capitalize">{exp.occupation}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                From :{" "}
                <span className="font-light">
                  {dateFormatter(exp.from_date)}
                </span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                To :{" "}
                {exp.to_date ? (
                  <span className="font-light">
                    {dateFormatter(exp.to_date)}
                  </span>
                ) : (
                  "Currently working"
                )}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                About Company :{" "}
                <span className="font-light">{exp.about_company}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                work Responsibilities :{" "}
                <span className="font-light">{exp.responsibilities}</span>
              </p>
              <div className="flex mx-6">
                <button
                  onClick={() => setShowForm(true)}
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
      )}
      {show && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)}>
            <div>
              <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Job applied for
                </label>
                <input
                  type="text"
                  placeholder="Software engineer"
                  className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...form.register("job_applied_for", {
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
                        {...form.register(`experiences.${index}.id`)}
                        type="hidden"
                      />

                      <input
                        {...form.register(`experiences.${index}.employer`, {
                          required: {
                            value: true,
                            message: "Employer name is required",
                          },
                        })}
                        placeholder="Company name"
                        className="pl-4 block w-full rounded-md border-0 capitalize py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {form.formState.errors.experiences?.[index]?.employer && (
                        <p className="text-red-700 text-sm">
                          {
                            form.formState.errors.experiences[index].employer
                              .message
                          }
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
                        {...form.register(`experiences.${index}.website`, {
                          required: {
                            value: true,
                            message: "Company’s Website is required",
                          },
                          pattern: {
                            value:
                              /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z0-9]+\.(com|org|in|net|co.in|co|biz|edu|io|gov)$/,
                            message:
                              "Please enter a valid website (e.g. www.google.com)",
                          },
                        })}
                        placeholder="Company’s website"
                        className="pl-4 block w-full max-w-xs sm:max-w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      />
                      {form.formState.errors.experiences?.[index]?.website && (
                        <p className="text-red-700 text-sm">
                          {
                            form.formState.errors.experiences[index].website
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full lg:w-1/2 md:px-6 md:w-[504px]">
                      <label className="block text-black font-bold text-sm head mb-2">
                        Location
                      </label>
                      <input
                        {...form.register(`experiences.${index}.location`, {
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
                      {...form.register(`experiences.${index}.occupation`, {
                        required: {
                          value: true,
                          message: "Position is required",
                        },
                      })}
                      placeholder="Position"
                      className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                    {form.formState.errors.experiences?.[index]?.occupation && (
                      <p className="text-red-700 text-sm">
                        {
                          form.formState.errors.experiences[index].occupation
                            .message
                        }
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col lg:flex-col xl:flex-row gap-4 md:flex-col md:gap-6 lg:mx-auto xl:mx-auto">
                    <div className="mb-4 w-full md:px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        From<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...form.register(`experiences.${index}.from_date`, {
                          required: {
                            value: true,
                            message: "Date is required",
                          },
                          validate: validateDateRange,
                        })}
                        min="1980-01-01"
                        max={getCurrentDate()}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                      />
                      {form.formState.errors.experiences?.[index]
                        ?.from_date && (
                        <p className="text-red-700 text-sm">
                          {
                            form.formState.errors.experiences[index].from_date
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <div className="mb-4 w-full md:px-6">
                      <label className="block text-black font-bold text-sm head mb-2">
                        To<span className="text-red-700">*</span>
                      </label>
                      <input
                        {...form.register(`experiences.${index}.to_date`, {
                          required: !switchStates[index]
                            ? {
                                value: true,
                                message: "Date is required",
                              }
                            : false,
                          validate: (value) =>
                            switchStates[index]
                              ? workexpto(value as string, {
                                  to_date: form.getValues(
                                    `experiences.${index}.to_date`
                                  ) as string | Date,
                                })
                              : true,
                        })}
                        min={getMinToDate()}
                        max={getCurrentDate()}
                        className="pl-4 block w-full md:w-[455px] lg:w-[300px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        type="Date"
                        disabled={switchStates[index]}
                      />
                      {form.formState.errors.experiences?.[index]?.to_date && (
                        <p className="text-red-700 text-sm">
                          {
                            form.formState.errors.experiences[index]?.to_date
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <>
                      {index === 0 ? (
                        <>
                          <div className="mb-4  w-2/6  px-6  ">
                            <Label className="block text-black font-bold text-sm head mb-2">
                              Working as
                            </Label>
                            <FormField
                              control={form.control}
                              name={`experiences.${index}.currently_working`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            {/* <Switch
                            id={`switch-${index}`}
                            checke[index]}
                            onCheckedChange={() => handleSwitchChange(index)}
                            // checked={isSwitchOn}
                            // onCheckedChange={handleSwitchChange}
                          /> */}
                          </div>
                        </>
                      ) : (
                        <input
                          type="hidden"
                          {...form.register(
                            `experiences.${index}.currently_working`
                          )}
                          value={0}
                        />
                      )}
                    </>
                  </div>

                  <div className="mb-4 w-full md:px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      About company
                    </label>
                    <textarea
                      {...form.register(`experiences.${index}.about_company`, {
                        // required: {
                        //   value: true,
                        //   message: 'First Name is required'
                        // }
                      })}
                      className="pl-4 block w-full lg:w-full md:w-[455px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      // value={item.about_company}
                      // onChange={(event) =>
                      //   handleChange(event, index, "about_company")
                      // }
                      placeholder="About company"
                      rows={5}
                    />
                  </div>

                  <div className="mb-4 w-full md:px-6">
                    <label className="block text-black font-bold text-sm head mb-2">
                      Main activities and responsibilities
                    </label>
                    <textarea
                      {...form.register(
                        `experiences.${index}.responsibilities`,
                        {
                          // required: {
                          //   value: true,
                          //   message: 'First Name is required'
                          // }
                        }
                      )}
                      className="pl-4 block w-full lg:w-full md:w-[455px] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                      // value={item.responsibilities}
                      // onChange={(event) =>
                      //   handleChange(event, index, "responsibilities")
                      // }
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
                    appendExperience({
                      id: undefined,
                      employer: "",
                      website: "",
                      location: "",
                      occupation: "",
                      from_date: "",
                      to_date: "",
                      about_company: "",
                      responsibilities: "",
                      currently_working: false,
                    })
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
        </Form>
      )}
    </div>
  );
};

export default WorkExperience;
