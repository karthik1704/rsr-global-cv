import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LanguageSkill } from "../typings";
import { useParams } from "next/navigation";
import { deleteLanguage, updateLanguage } from "../../action";
import { toast } from "sonner";

type LanguageProps = {
  setData: any;
  language: LanguageSkill;
  selectedSection: string[];
  setSelectedSection: any;
  setShowPreview: any;
};

type FormValues = {
  id?: number;
  language: string;
};

const Language = ({
  setData,
  language,
  selectedSection,
  setSelectedSection,
  setShowPreview,
}: LanguageProps) => {
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
      id: language?.id ?? undefined,
      language: language?.language ?? "",
    },
  });

  const [show, setShowForm] = useState(true);

  const { id } = useParams<{ id: string }>();

  const updateLanguageWithId = updateLanguage.bind(null, id);
  const deleteLanguageWithId = deleteLanguage.bind(null, id);

  useEffect(() => {
    if (language?.language) {
      setShowForm(false);
    }
  }, [language]);

  const handleForm = async (languageData: FormValues) => {
    console.log(languageData);
    // setData((prevState) => ({
    //   ...prevState,
    //   language: { ...languageData },
    // }));
    const res = await updateLanguageWithId(languageData);

    if(res?.type === "Success") {
      toast.success("Language Updated Successfully");
    } else {
      toast.error("Something went wrong");
    }

    setShowForm(false);
    setShowPreview(true);
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "language"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
    setShowForm(false);
  };

  const handleDeleteLanguage = async (language_id: string | number) => {
    const res = await deleteLanguageWithId(language_id);

    if (res?.type === "Success") {
      toast.success("Language Deleted Successfully");
    } else {
      toast.error("Failed to delete language");
    }
  };

  return (
    <div className="my-8">
      {!show && language && (
        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-black text-2xl font-bold uppercase">
            Language Information
          </p>

          {language.language && (
            <p className="text-lg font-semibold text-gray-800">
              Languages Known :{" "}
              <span className="font-light capitalize">{language.language}</span>
            </p>
          )}

          {language.other_languages && (
            <p className="text-lg font-semibold text-gray-800">
              Other language :{" "}
              <span className="font-light capitalize">
                {language.other_languages}
              </span>
            </p>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              type="button"
              className="w-24 bg-white text-black hover:text-white hover:bg-green-600 p-2 font-bold rounded-md border border-gray-300"
            >
              Edit
            </button>
            <button
              type="button"
              className="w-24 items-center capitalize bg-red-600 hover:bg-red-500 text-white p-2 mx-10	font-bold rounded-md"
              onClick={() => handleDeleteLanguage(language.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {show && (
        <div>
          <form onSubmit={handleSubmit(handleForm)}>
            <h1 className="my-4 px-6  text-black font-bold text-3xl">
              Language Skills
            </h1>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Languages Known
                  <span className="text-red-700">*</span>
                </label>
                <input type="hidden" {...register("id")} />
                <input
                  className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("language", {
                    required: {
                      value: true,
                      message: "language is required",
                    },
                  })}
                  placeholder=" Enter the Languages"
                />
                {errors.language && (
                  <p className="text-red-700 text-sm">
                    {errors.language.message}
                  </p>
                )}
              </div>
            </div>

            {/* <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-black font-bold text-sm head mb-2">
              Other language
                <span className="text-red-700">*</span>
              </label>
              <input
                className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
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
          </div> */}

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
    </div>
  );
};

export default Language;
