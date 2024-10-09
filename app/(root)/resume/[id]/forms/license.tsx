import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { DrivingLicense } from "../typings";
import { useParams } from "next/navigation";
import { updateLicense } from "../../action";

type Props = {
  selectedSection: string[];
  setSelectedSection: React.Dispatch<React.SetStateAction<string[]>>;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  lic: DrivingLicense[];
};

type FormValues = {
  driving_licenses: {
    license_type: string;
    checked: boolean;

    license_issued_date: string;
    license_expiry_date: string;

    id?: number;
  }[];
};

const LicenseData = [
  {
    license_type: "Two Wheeler",
    checked: false,
    license_issued_date: "",
    license_expiry_date: "",
  },
  {
    license_type: "Four Wheeler",
    checked: false,
    license_issued_date: "",
    license_expiry_date: "",
  },
];

const LicenseForm = ({
  selectedSection,
  setSelectedSection,
  setShowPreview,
  setData,
  lic,
}: Props) => {
  const [showForm, setShowForm] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);

 

  
  const { control, handleSubmit, watch, register } = useForm<FormValues>({
    defaultValues: {
      driving_licenses: lic.length
        ?[
          // Check if "Two Wheeler" license exists in lic, if not add the default
          lic.find(license => license.license_type === "Two Wheeler")
          ? { ...lic.find(license => license.license_type === "Two Wheeler"), checked: true }:  {
            license_type: "Two Wheeler",
            checked: false,
            license_issued_date: "",
            license_expiry_date: "",
          },
          // Check if "Four Wheeler" license exists in lic, if not add the default
          lic.find(license => license.license_type === "Four Wheeler")
          ? { ...lic.find(license => license.license_type === "Four Wheeler"), checked: true }
          : {
              license_type: "Four Wheeler",
              checked: false,
              license_issued_date: "",
              license_expiry_date: "",
            }
        ]
        : [
            {
              license_type: "Two Wheeler",
              checked: false,
              license_issued_date: "",
              license_expiry_date: "",
            },
            {
              license_type: "Four Wheeler",
              checked: false,
              license_issued_date: "",
              license_expiry_date: "",
            },
          ],
    },
  });

  const { fields: checkboxFields, update } = useFieldArray({
    control,
    name: "driving_licenses",
  });

  const {id} = useParams<{id:string}>();
  const updateLicenseWithId = updateLicense.bind(null, id);
  
  const isChecked = watch("driving_licenses");

  useEffect(() => {
    if(lic.length){
      setShowForm(false);
    }
  }, [lic.length]);


  const handleCheckboxChange = (index: number, checked: boolean) => {
    const updatedCheckboxes = [...isChecked];
    updatedCheckboxes[index].checked = checked;
    update(index, updatedCheckboxes[index]);
  };

  const handleForm = async (licenseData: FormValues) => {
    // const formattedData = licenseData.checkboxes
    //   .filter((item) => item.checked)
    //   .map((item) => ({
    //     license: item.license,
    //     daterange: {
    //       datefrom: item.daterange.datefrom,
    //       dateto: item.daterange.dateto,
    //     },
    //   }));
    // setData((prevState) => ({
    //   ...prevState,
    //   license: formattedData,
    // }));
    // setSubmittedData(formattedData);
    console.log(licenseData);
    const drivingLicense = licenseData.driving_licenses.filter((item) => item.checked);
    const data = {driving_licenses: drivingLicense};
    console.log(data)
    const res = await updateLicenseWithId(data);
    setShowForm(false);
    setShowPreview(true);
  };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "drivinglicense"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
    setShowForm(false);
  };

  return (
    <div>
      {" "}
      {showForm ? (
        <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
          <p className="block text-black font-bold text-2xl head mt-2">
            Driving License
          </p>
          {checkboxFields.map((checkbox, index) => (
            <div key={checkbox.id} className="flex items-center">
              <input type={"hidden"} {...register(`driving_licenses.${index}.id`)} />
              <Controller
                name={`driving_licenses.${index}.checked`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    type="checkbox"
                    className="custom-checkbox mr-2"
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      handleCheckboxChange(index, e.target.checked);
                    }}
                  />
                )}
              />

              <div className="text-black flex bg-slate-200 p-4 text-2xl w-full">
                {checkbox.license_type}
                {checkbox.checked && (
                  <div className="ml-4 text-lg text-black">
                    <div className="flex gap-4 mb-2">
                      <div className="flex flex-col ">
                        <label className="block text-black font-bold text-sm head mb-2">
                          Issued Date<span className="text-red-700">*</span>
                        </label>
                        <input
                         type="date"
                          {...register(
                            `driving_licenses.${index}.license_issued_date`,
                            {
                              required: {
                                value: true,
                                message: "Issued Date Website is required",
                              },
                            }
                          )}
                          placeholder="Issued Date"
                          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label className="block text-black font-bold text-sm head mb-2">
                          Expiry Date<span className="text-red-700">*</span>
                        </label>
                        <input type="date"
                          {...register(
                            `driving_licenses.${index}.license_expiry_date`,
                            {
                              required: {
                                value: true,
                                message: "Expiry Date is required",
                              },
                            }
                          )}
                          placeholder="Expiry Date website"
                          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        />
                      </div>

                     
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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
              {" "}
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-black text-2xl font-bold uppercase">
            Driving License
          </h2>
          <ul>
            {lic.map((item, index) => (
              <li key={index}>
                <strong className="text-black">License:</strong>{" "}
                <p className="text-black">{item.license_type}</p>
                <strong className="text-black">Date Validation:</strong>{" "}
                <p className="text-black">
                  {" "}
                  {item.license_issued_date} to {item.license_expiry_date}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-6">
            <button
              onClick={() => setShowForm(true)}
              type="button"
              className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LicenseForm;

// import React, { useState } from 'react';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';

// const License = ({ selectedSection, setSelectedSection, setShowPreview, setData }) => {
//   const [showForm, setShowForm] = useState(true);
//   const [submittedData, setSubmittedData] = useState([]);
//   const { control, handleSubmit, watch } = useForm({
//     defaultValues: {
//       checkboxes: [
//         { license: 'Two Wheeler', checked: false, daterange: { datefrom: '', dateto: '' } },
//         { license: 'Four Wheeler', checked: false, daterange: { datefrom: '', dateto: '' } }
//       ]
//     }
//   });

//   const { fields: checkboxFields, update } = useFieldArray({
//     control,
//     name: 'checkboxes'
//   });

//   const handleCheckboxChange = (index) => {
//     const updatedCheckboxes = [...watch('checkboxes')];
//     updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
//     update(index, updatedCheckboxes[index]);
//   };

//   const handleForm = (licenseData) => {
//     const formattedData = licenseData.checkboxes
//       .filter(item => item.checked)
//       .map(item => ({
//         license: item.license,
//         daterange: {
//           datefrom: item.daterange.datefrom,
//           dateto: item.daterange.dateto
//         }
//       }));
//     setData(prevState => ({
//       ...prevState,
//       license: formattedData,
//     }));
//     setSubmittedData(formattedData);
//     setShowForm(false);
//     setShowPreview(true);
//   };

//   const cancel = () => {
//     const newSelectOptions = selectedSection.filter(selected => selected !== 'drivinglicense');
//     setSelectedSection(newSelectOptions);
//     setShowPreview(true);
//     setShowForm(false);
//   };

//   return (
//     <div>
//       {showForm ? (
//         <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
//           <p className="block text-black font-bold text-2xl head mt-2">Driving License</p>
//           {checkboxFields.map((checkbox, index) => (
//             <div key={index} className="flex items-center">
//               <Controller
//                 name={`checkboxes.${index}.checked`}
//                 control={control}
//                 render={({ field: { onChange, value } }) => (
//                   <label style={{ display: 'flex', alignItems: 'center' }}>
//                     <input
//                       type="checkbox"
//                       style={{
//                         appearance: 'none',
//                         WebkitAppearance: 'none',
//                         width: '24px',
//                         height: '24px',
//                         border: '2px solid #007bff',
//                         borderRadius: '4px',
//                         position: 'relative',
//                         cursor: 'pointer',
//                         backgroundColor: value ? '#e7f0ff' : '#fff',
//                         outline: 'none'
//                       }}
//                       checked={value}
//                       onChange={() => handleCheckboxChange(index)}
//                     />
//                     {value && (
//                       <span style={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         fontSize: '16px',
//                         color: '#fff'
//                       }}>
//                         &#10003;
//                       </span>
//                     )}
//                     {checkbox.license}
//                   </label>
//                 )}
//               />
//               {checkbox.checked && (
//                 <div className="ml-4 text-lg text-black">
//                   <div className="flex gap-4 mb-2">
//                     <Controller
//                       name={`checkboxes.${index}.daterange.datefrom`}
//                       control={control}
//                       render={({ field }) => (
//                         <div className="flex gap-2 mb-2">
//                           <label>From </label>
//                           <input type="date" {...field} />
//                         </div>
//                       )}
//                     />
//                     <Controller
//                       name={`checkboxes.${index}.daterange.dateto`}
//                       control={control}
//                       render={({ field }) => (
//                         <div className="flex gap-2 mb-2">
//                           <label>To </label>
//                           <input type="date" {...field} />
//                         </div>
//                       )}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//           <div className="flex mx-6 my-4">
//             <button
//               type="button"
//               className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md"
//               onClick={cancel}
//             >
//               Cancel
//             </button>
//             <button type="submit" className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"> Save</button>
//           </div>
//         </form>
//       ) : (
//         <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
//           <h2 className="text-black text-2xl font-bold uppercase">Driving License</h2>
//           <ul>
//             {submittedData.map((item, index) => (
//               <li key={index}>
//                 <strong className="text-black">License:</strong> <p className="text-black">{item.license}</p>
//                 <strong className="text-black">Date Validation:</strong> <p className="text-black"> {item.daterange.datefrom} to {item.daterange.dateto}</p>
//               </li>
//             ))}
//           </ul>
//           <div className="flex mx-6">
//             <button
//               onClick={() => setShowForm(true)}
//               type="button"
//               className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default License;
