import { useState } from "react";
import {useForm, useFieldArray, Controller} from 'react-hook-form';

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

  const handleCheckboxChange = (index,checked) => {
    const updatedCheckboxes = [...isChecked];
    updatedCheckboxes[index].checked = checked;
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
            name={`checkboxes.${index}.checked`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={value}
                onChange={(e) =>{
                  onChange(e.target.checked)
                  handleCheckboxChange(index,e.target.checked)}}
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
          
          <div className="flex mx-6">
              <button
              onClick={()=>setShowForm(true)}
                type="button"
                className="w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md"
              >
                Edit
              </button>
             
            </div>
      </div>
    )}
    </div>
  )
  
};

export default License;

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


