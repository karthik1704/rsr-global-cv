import React, { useEffect, useState } from 'react';
import "./stepper.css";
import {
  useFieldArray,
  useForm,
  useWatch,
  Form,
  FieldValues,
} from "react-hook-form";
import { Select } from '@/components/ui/select';

const ExperienceEducation = ({ formData, handleChange, onPrevious, onNext }) => {
  const form = useForm({
    defaultValues: {
      branch_id: "1",
      date_of_received: new Date().toISOString().split("T")[0],
      no_of_samples: 0,
      controlled_quantity: 0,
      mech_params: [],
      micro_params: [],
      samples: [],
    },
  });

  const [filterId, setFilterId] = useState("1");
  const [parameters, setParameters] = useState([]);
    return (
        <>
        <div className="w-9/12 p-8  shadow-2xl border-gray-300 text-justify my-7 mx-auto">
            
            <form>
            <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Work Experience</h1>
          <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
           Describe all your work experience. you can include paid work, volunteering, internship, apprenticeships, freelancing and other activities.
          </p>

          <div className="mb-4  w-2/4 px-6  ">
          <p className='text-gray-700 font-bold text-sm'>New work experience</p>
            <label className="block text-gray-700 font-bold text-sm head">
              Occupation or position held<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="Title of the occupation"
              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              name="position"
                  value={formData.position}
                onChange={handleChange}
                required
            />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              Employer<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="Name of the Employer"
              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
              name="company"
                  value={formData.company}
                onChange={handleChange}
                required
            />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
              <label className="block text-gray-700 font-bold text-sm head">
               Website<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder='e.g: Paris'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="website"
                  value={formData.website}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-gray-700 font-bold text-sm head">
                Location<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder='Select'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="location"
                  value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]  ">
              <label className="block text-gray-700 font-bold text-sm head">
               From<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                placeholder='e.g: Paris'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="from"
                  value={formData.from}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
              <label className="block text-gray-700 font-bold text-sm head">
                To<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                placeholder='Select'
                className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
                name="to"
                  value={formData.to}
                onChange={handleChange}
                required
              />
            </div>
          </div>

<div className="mb-4 w-full lg:w-1/2 md:w-[504px] px-6  ">
      <label className="block text-gray-700 font-bold text-sm head">
        Address Line 1<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        placeholder="eg:Street Name, P.O, Box"
        className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
        name="line1"
                        value={formData.line1}
                      onChange={handleChange}
                      required
      />
    </div>

    <div className="mb-4  w-full lg:w-1/2 md:w-[504px] px-6  ">
      <label className="block text-gray-700 font-bold text-sm head">
        Address Line 2<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        placeholder="Apartment, suite, unit, building, floor, etc"
        className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
        name="line2"
                        value={formData.line2}
                      onChange={handleChange}
                      required
      />
    </div>

    <div className="flex flex-col gap-3 md:flex-row">

    <div className="mb-4 w-full md:w-2/6 px-6">
      <label className="block text-gray-700 font-bold text-sm head">
        Postal code<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        placeholder="eg:6000 01"
        className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
        name="line3"
                        value={formData.line3}
                      onChange={handleChange}
                      required
      />
    </div>

    <div className="mb-4 w-full md:w-2/6 px-6">
      <label className="block text-gray-700 font-bold text-sm head">
        City<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        placeholder="eg:Chennai"
        className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
        name="line4"
                        value={formData.line4}
                      onChange={handleChange}
                      required
      />
    </div>

    <div className="mb-4 w-full md:w-2/6 px-6">
      <label className="block text-gray-700 font-bold text-sm head">
        Country<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        placeholder="eg:India"
        className="border  border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
        name="line5"
                        value={formData.line5}
                      onChange={handleChange}
                      required
      />
    </div>

    </div>

            <div className="mb-4  w-full px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              Main activities and responsibilities
            </label>
            <textarea
              placeholder={`-maintence of computers\n -relations with suppliers\n -coaching a junior ice Hockey team (10 hours/week)`}
              className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full resize-none pl-4"
              rows={5}
              name="responsibilities"
                  value={formData.responsibilities}
                onChange={handleChange}
                required
            ></textarea>
          </div>

          <TestParamsForm
                control={form.control}
                register={form.register}
                data={parameters}
                filterId={filterId}
                arrayFieldName="mech_params"
              />
            </form>
            </div>
            <div className='btn flex justify-around'>
              <button className='btn1 text-white font-semibold'>Exit</button>
<div>
<button onClick={onNext} className='btn1 text-white font-semibold'>Next</button>
<button onClick={onPrevious} className='btn1 text-white font-semibold'>Previous</button>
</div>
</div>
        </>
    )
}

const TestParamsForm = ({
  control,
  register,
  data,
  filterId,
  arrayFieldName,
}: {
  control: any;
  register: any;
  data: FullParametersType[];
  filterId: [] | number | string;
  arrayFieldName: string;
}) => {
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: arrayFieldName,
  });

  const test_watch = useWatch({
    control: control,
    name: arrayFieldName,
  });

  const [testTypesName, setTestTypesName] = useState<string[]>([]);
  const [methods, setMethods] = useState<string[]>([]);

  useEffect(() => {
    if (data.length) {
      replace([]);
      data.forEach((para, idx) =>
        append({
          test_params_id: para.id,
          order: idx + 1,
        }),
      );
    }
  }, [data, append, replace]);

  useEffect(() => {
    const ids =
      test_watch?.map((field: any) => {
        if (field.test_params_id !== "") return field.test_params_id.toString();
      }) ?? [];
    console.log(ids);
    const tests = data.filter((para) => ids.includes(para.id.toString()));

    console.log(tests);

    const test_names: string[] = [];

    ids.forEach((id: string) => {
      const test_name =
        tests?.find((t) => t.id.toString() === id)?.test_type?.name ??
        undefined;
      if (test_name) test_names.push(test_name);
    });

    const methods: string[] = [];
    ids.forEach((id: any) => {
      const method =
        tests?.find((t) => t.id.toString() === id)?.method_or_spec ?? undefined;
      if (method) methods.push(method);
    });
    console.log(test_names);

    setTestTypesName(test_names);
    setMethods(methods);
  }, [data, test_watch]);

  const addAllTestParameters = () => {
    if (data.length) {
      replace([]);
      data.forEach((para, idx) =>
        append({
          test_params_id: para.id,
          order: idx + 1,
        }),
      );
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-2 pb-2.5 pt-2 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-3.5 xl:pb-1">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => replace([])}
          className="hover:text-bule-400 mb-1 flex transform-gpu font-medium text-primary transition-all duration-300 hover:text-blue-400 active:scale-95 disabled:bg-slate-500"
        >
          Reset
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="w-[30px] px-2 py-4 font-medium text-black dark:text-white xl:pl-8">
                S.NO
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Education Details
              </th>
              <th className="w-[100px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Year of Passed
              </th>
              {/* <th className="w-[100px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Test Type
              </th> */}
              {/* <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Method / Spec
              </th> */}
              <th className="w-[100px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Priority Order
              </th>
              <th className="w-[100px] px-2 py-4 font-medium text-black dark:text-white xl:pl-6">
                Remove?
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((item, idx) => (
              <tr key={item.id}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-8">
                  <h5 className="font-medium text-black dark:text-white">
                    {idx + 1}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">

                <input
                    type="text"
                    {...register(`${arrayFieldName}.${idx}.quantity`)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 pl-1 pr-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {/* <Select
                    name={`${arrayFieldName}.${idx}.test_params_id`}
                    register={register}
                  >
                    <option value="">------------</option>
                    {data?.map((parameter) => (
                      <option value={parameter.id} key={parameter.id}>
                        {parameter.testing_parameters}
                      </option>
                    ))}
                  </Select> */}
                </td>
                <td className="border-b border-[#eee] px-1 py-3 pl-9 dark:border-strokedark xl:pl-11">
                  <input
                    type="text"
                    {...register(`${arrayFieldName}.${idx}.quantity`)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 pl-1 pr-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {testTypesName[idx]}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {methods[idx]}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <input
                    type="text"
                    {...register(`${arrayFieldName}.${idx}.order`)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="border-b border-[#eee] px-2 py-5 pl-6 dark:border-strokedark xl:pl-6">
                  <button type="button" onClick={() => remove(idx)}>delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4">
          <button
            type="button"
            className="mt-2 flex w-1/5 transform-gpu items-center justify-center rounded border-2 border-primary p-3 font-medium text-black transition-all duration-300 hover:bg-primary hover:text-white active:scale-95 disabled:bg-slate-500"
            onClick={() =>
              append({
                test_params_id: "",
                order: fields.length + 1,
              })
            }
          >
            Add Test
          </button>
          <button
            type="button"
            className="mt-2 flex w-1/5 transform-gpu items-center justify-center rounded border-2 border-primary p-3 font-medium text-black transition-all duration-300 hover:bg-primary hover:text-white active:scale-95 disabled:bg-slate-500"
            onClick={addAllTestParameters}
          >
            Add All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation