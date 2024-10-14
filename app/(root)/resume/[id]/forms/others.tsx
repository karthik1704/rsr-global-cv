import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Other } from "../typings";
import { useParams } from "next/navigation";
import { updateOthers } from "../../action";
import { set } from "zod";
import { toast } from "sonner";

type OthersProps = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  others: Other[];
  selectedSection: string[];
  setSelectedSection: React.Dispatch<React.SetStateAction<string[]>>;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  sectionTitle: string;
  setSectionTitle: React.Dispatch<React.SetStateAction<string>>;
  otherId?: null | number;
  setOtherId: React.Dispatch<React.SetStateAction<number | null>>;
};

type FormValues = {
  sectiontitle: string;
  title: string;
  description: string;
  id?: number;
};

const Others = ({
  setData,
  others,
  selectedSection,
  setSelectedSection,
  setShowPreview,
  sectionTitle,
  setSectionTitle,
  otherId,
  setOtherId,
}: OthersProps) => {
  console.log(otherId);
  const existOther = others.find((other) => other.id === otherId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: otherId
      ? {
          id: existOther?.id,
          sectiontitle: existOther?.sectiontitle,
          title: existOther?.title,
          description: existOther?.description,
        }
      : {
          id: undefined,
          sectiontitle: sectionTitle,
          title: "",
          description: "",
        },
  });

  console.log(others.find((other) => other.sectiontitle === sectionTitle));

  const [show, setShowForm] = useState(true);

  const { id } = useParams<{ id: string }>();

  const updateOthersWithId = updateOthers.bind(null, id);

  useEffect(() => {
    if (!sectionTitle) {
      setShowForm(false);
      return;
    }
    setShowForm(true);
    setValue("sectiontitle", sectionTitle);
  }, [sectionTitle, setValue]);

  useEffect(() => {
    if (otherId) {
      setValue("sectiontitle", existOther?.sectiontitle || "");
      setValue("title", existOther?.title || "");
      setValue("description", existOther?.description || "");
      setValue("id", existOther?.id);
      return;
    }
    reset();
    setValue("sectiontitle", sectionTitle);
  }, [
    existOther?.description,
    existOther?.id,
    existOther?.sectiontitle,
    existOther?.title,
    otherId,
    reset,
    sectionTitle,
    setValue,
  ]);

  const handleForm = async (othersData: FormValues) => {
    console.log(othersData);

    const res = await updateOthersWithId(othersData);

    if (res.type === "Success") {
      toast.success("Others added successfully", {
        duration: 10000,
        closeButton: true,
      });
      if (otherId) {
        setOtherId(null);
      }
      setSectionTitle("");
      setShowPreview(true);
      setShowForm(false);
    } else {
      toast.error("Error adding others", {
        duration: 10000,
        closeButton: true,
      });
    }
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "others"
    );
    setSelectedSection(newSelectoptions);
    setSectionTitle("");
    setShowPreview(true);
    setShowForm(false);
    if (otherId) {
      setOtherId(null);
    }
  };
  console.log(others);

  return (
    <>
      {show && (
        <div>
          <form onSubmit={handleSubmit(handleForm)}>
            <h1 className="my-4 px-6  text-black font-bold text-3xl">
              {sectionTitle}
            </h1>
            {otherId ? (
              <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
                <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                  <label className="block text-black font-bold text-sm head mb-2">
                    Section Title
                    <span className="text-red-700">*</span>
                  </label>
                  <input
                    className="pl-4 block w-full capitalize rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    {...register("sectiontitle", {
                      required: {
                        value: true,
                        message: "section title is required",
                      },
                    })}
                    placeholder="Section Title"
                  />
                  {errors.title && (
                    <p className="text-red-700 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <input
                type="hidden"
                {...register("sectiontitle")}
                value={sectionTitle}
              />
            )}

            <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
              <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
                <label className="block text-black font-bold text-sm head mb-2">
                  Title
                  <span className="text-red-700">*</span>
                </label>
                <input type="hidden" {...register("id")} />

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
                  <p className="text-red-700 text-sm">{errors.title.message}</p>
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
                className="w-24 items-center capitalize bg-white border border-gray-300 hover:bg-green-600 hover:text-white text-black p-2 font-bold rounded-md"
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
