import { useState } from "react";
import { useForm } from "react-hook-form";
import { Other } from "../typings";


type OthersProps = {
  setData: any;
  others: Other[];
  selectedSection: string[];
  setSelectedSection: any;
  setShowPreview: any;
  selected: string;
  sectionTitle: string;
}

type FormValues = {
  sectiontitle: string;
  title: string;
  description: string;
  id?: number;
}


const Others = ({
  setData,
  others,
  selectedSection,
  setSelectedSection,
  setShowPreview,
  selected,
  sectionTitle,
}:OthersProps) => {
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
    defaultValues: {},
  });

  const [show, setShowForm] = useState(true);

  const handleForm = (othersData:FormValues) => {
    console.log(othersData);
  
    // Perform operations
    const newothers = others.filter(
      (other) => other.title.toLowerCase() !== sectionTitle.toLowerCase()
    );
    const existingother = others.find(
      (other) => other.title.toLowerCase() === sectionTitle.toLowerCase()
    );
  
    const updatedData = existingother
      ? {
          ...newothers,
          others: [
            ...newothers,
            { ...existingother, othersData },
          ],
        }
      : {
          ...newothers,
          others: [
            ...newothers,
            {
              sectionTitle,
              ...othersData,
            },
          ],
        };
  
    // Use functional update form for setData
    setData(prevState => ({
      ...prevState,
      ...updatedData,
    }));
  
    setShowForm(false);
    setShowPreview(true);
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "others"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
    setShowForm(false);
  };
  console.log(others)

  return (
    <>


      {show && (
        <div>
          <form onSubmit={handleSubmit(handleForm)}>
            <h1 className="my-4 px-6  text-black font-bold text-3xl">
              {sectionTitle}
            </h1>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Title
                  <span className="text-red-700">*</span>
                </label>
                <input
                  className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                  placeholder=" Title"
                />
                {errors.title && (
                  <p className="text-red-700 text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Description
                  <span className="text-red-700">*</span>
                </label>
                <input
                  className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "description is required",
                    },
                  })}
                  placeholder=" Description"
                />
                {errors.description && (
                  <p className="text-red-700 text-sm">
                    {errors.description.message}
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
  );
};

export default Others;
