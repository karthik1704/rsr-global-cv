import { useState } from "react";
import {useForm, useFieldArray, Controller} from 'react-hook-form';

// const License = ({ selectedSection, setSelectedSection, setShowPreview }) => {
//   // Initialize form with default values for `type` only
//   const { control, handleSubmit, getValues, setValue, reset } = useForm({
//     defaultValues: {
//       licenses: [
//         { type: 'AM', from: '', to: '' },
//         { type: 'A1', from: '', to: '' },
//         { type: 'A2', from: '', to: '' },
//         { type: 'A', from: '', to: '' },
//         { type: 'B1', from: '', to: '' },
//         { type: 'B', from: '', to: '' },
//         { type: 'BE', from: '', to: '' },
//         { type: 'C1', from: '', to: '' },
//         { type: 'C1E', from: '', to: '' },
//         { type: 'C', from: '', to: '' },
//         { type: 'CE', from: '', to: '' },
//         { type: 'D1', from: '', to: '' },
//         { type: 'D1E', from: '', to: '' },
//         { type: 'D', from: '', to: '' },
//         { type: 'DE', from: '', to: '' },
//         { type: 'CE', from: '', to: '' }
//       ],
//     },
//   });

//   const { fields, update, remove } = useFieldArray({
//     control,
//     name: 'licenses',
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     setShowPreview(true);
//   };

//   const cancel = () => {
//     const newSelectOptions = selectedSection.filter(
//       (section) => section !== 'drivinglicense'
//     );
//     setSelectedSection(newSelectOptions);
//     setShowPreview(true);
//   };

//   const handleCheckboxChange = (index) => {
//     const currentValue = getValues(`licenses.${index}.type`);
//     const isChecked = !currentValue;
//     setValue(`licenses.${index}.type`, isChecked);
//     if (!isChecked) {
//         setValue(`licenses.${index}.from`, ''); // Clear 'from' date
//         setValue(`licenses.${index}.to`, '');   // Clear 'to' date
//     } else {
//         setValue(`licenses.${index}.from`, new Date().toISOString().split('T')[0]); // Set default 'from' date
//         setValue(`licenses.${index}.to`, new Date().toISOString().split('T')[0]);   // Set default 'to' date
//     }
// };

// return (
//   <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//           <p className="text-2xl text-black text-center font-bold py-3 uppercase">Driving License</p>

//           <p className="text-black">Motorbikes</p>
//           {fields.map((field, index) => {
//               const isChecked = !!field.from; // Determine if checkbox is checked based on 'from' date

//               return (
//                   <div key={field.id} className="flex items-center">
//                       <input
//                           type="checkbox"
//                           className="custom-checkbox mr-2"
//                           checked={isChecked} // Checkbox state based on 'from'
//                           onChange={() => handleCheckboxChange(index)}
//                       />
//                       <div className="text-black flex bg-slate-200 p-4 text-2xl">
//                           {field.type} {"<"} {field.type === 'A1' ? '125 cm³' : '35 kW'} {"<"} {field.type === 'B' ? '3500 kg' : '45km/h'} max. 8+1 {"<"} 750 kg {field.type === 'A' ? '20/24+' : '18+'}
//                           {isChecked && (
//                               <div className="ml-4 text-lg text-blue-600">
//                                   <label>From </label>
//                                   <input
//                                       type="date"
//                                       value={field.from || ''}
//                                       onChange={e => update(index, { ...field, from: e.target.value })}
//                                   />
//                                   <label>To </label>
//                                   <input
//                                       type="date"
//                                       value={field.to || ''}
//                                       onChange={e => update(index, { ...field, to: e.target.value })}
//                                   />
//                               </div>
//                           )}
//                       </div>
//                   </div>
//               );
//           })}

//         {/* Add similar blocks for other sections, such as Cars, Trucks, Others */}

//         <div className="flex mx-6 my-4">
//           <button
//             type="button"
//             className="w-24 items-center capitalize hover:bg-green-500 hover:text-white text-black p-2 font-bold rounded-md"
//             onClick={cancel}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default License;

const License = ({ selectedSection, setSelectedSection, setShowPreview,setData,lic }) => {

  const [showForm, setShowForm] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      checkboxes: [
        { license: 'Two Wheeler', checked: false, Valid: { datefrom: '', dateto: '' } },
        { license: 'Four Wheeler', checked: false, Valid: { datefrom: '', dateto: '' } }
      ]
    }
  });

  const { fields: checkboxFields, update } = useFieldArray({
    control,
    name: 'checkboxes'
  });

  const isChecked = watch('checkboxes');

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...isChecked];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    update(index, updatedCheckboxes[index]);
  };

  const handleForm = (licenseData) => {
    const formattedData = licenseData.checkboxes
      .filter(item => item.checked)
      .map(item => ({
        license: item.license,
        daterange: {
          datefrom: item.daterange.datefrom,
          dateto: item.daterange.dateto
        }
      }));
      setData((prevState)=>({
        ...prevState,
        license: formattedData,
      }))
    setSubmittedData(formattedData);
    setShowForm(false);
    setShowPreview(true);
  };

  const cancel =() =>{
    const newSelectoptions = selectedSection.filter(selected=>selected!=='drivinglicense');
    setSelectedSection(newSelectoptions);
            setShowPreview(true);
            setShowForm(false);
  }

  return (
    <div> {showForm ? (
    <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
      <p className="block text-black font-bold text-2xl head mt-2">Driving License</p>
      {checkboxFields.map((checkbox, index) => (
        <div key={index} className="flex items-center">
          <Controller
            name={`checkboxes.${index}.license`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={value}
                onChange={() => handleCheckboxChange(index)}
              />
            )}
          />
          <div className="text-black flex bg-slate-200 p-4 text-2xl w-full">
            {checkbox.license} 
            {checkbox.checked && (
              <div className="ml-4 text-lg text-black">
                <div className="flex gap-4 mb-2">
                <Controller
                  name={`checkboxes.${index}.daterange.datefrom`}
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-2 mb-2">
                      <label>From </label>
                      <input type="date" {...field} />
                    </div>
                  )}
                />
                <Controller
                  name={`checkboxes.${index}.daterange.dateto`}
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-2 mb-2">
                      <label>To </label>
                      <input type="date" {...field} />
                    </div>
                  )}
                />
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
      <button type="submit" className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"> Save</button>
      </div>
    </form>
    ) : (
      <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-black text-2xl font-bold uppercase">Driving License</h2>
          <ul>
            {submittedData.map((item, index) => (
              <li key={index}>
                <strong className="text-black">License:</strong> <p className="text-black">{item.license}</p>
                <strong className="text-black">Date Validation:</strong> <p className="text-black"> {item.daterange.datefrom} to {item.daterange.dateto}</p>
              </li>
            ))}
          </ul>
          {/* <button
            onClick={() => {
              setShowForm(true);
              setSubmittedData([]);
            }}
            className="mt-4 p-2 bg-gray-500 text-white"
          >
            Back to Form
          </button> */}
          <div className="flex mx-6">
              <button
              onClick={()=>setShowForm(true)}
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
    )}
    </div>
  )
  
};

export default License;