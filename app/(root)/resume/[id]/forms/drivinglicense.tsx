import { useState } from "react";
import {
  Activity,
  ChevronLeft,
  Layers,
  PersonStanding,
  Ruler,
  SquareChartGantt,
} from "lucide-react";

type DrivingLicenseProps = {
  selectedSection: string[];
  setSelectedSection: any;
  setShowPreview: any;
};

const DrivingLicense = ({
  selectedSection,
  setSelectedSection,
  setShowPreview,
}: DrivingLicenseProps) => {
  const [show, setShowForm] = useState(true);

  // const handleForm = (workexpData) => {
  //     console.log(workexpData);
  //     ((prevState) => ({
  //       ...prevState,
  //       jobappliedfor:workexpData.jobappliedfor,
  //       workExperience: workexpData.experiences,
  //     }));
  //     setShowForm(false);
  //     setShowPreview(true);
  //   };

  const cancel = () => {
    const newSelectoptions = selectedSection.filter(
      (selected) => selected !== "drivinglicense"
    );
    setSelectedSection(newSelectoptions);
    setShowPreview(true);
    setShowForm(false);
  };

  const [isChecked, setIsChecked] = useState([]);

  //handle checkbox

  const handleCheckboxChange = (index) => {
    setIsChecked((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item != index);
      } else {
        return [...prevState, index];
      }
    });
  };

  return (
    <div className="my-8">

      {show && (
        <div>
          <p className="text-2xl text-black text-center font-bold py-3 uppercase">
            Driving License
          </p>
          <form>
            {/* <div className="flex"> 
      <input type="checkbox" className="mr-2" />
      <div className="text-black flex">
        AM <Ruler /> 50 cm³ 45km/h 4kW 16+
      </div>
    </div> */}

            <p className="text-black">Motorbikes</p>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(0)}
                onChange={() => handleCheckboxChange(0)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                AM <Ruler /> {"<"} 50 cm³ {"<"} <Activity /> {"<"} 45km/h {"<"}{" "}
                4kW 16+
                {isChecked.includes(0) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(1)}
                onChange={() => handleCheckboxChange(1)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                A1 <Ruler /> {"<"} 125 cm³ {"<"} <Activity /> {"<"} 11kW -
                0.1kW/kg 16+
                {isChecked.includes(1) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(2)}
                onChange={() => handleCheckboxChange(2)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                A2 <Ruler /> {"<"} 35 kW - 0.2 kW/kg {"<"} <Activity /> {"<"}{" "}
                18+
                {isChecked.includes(2) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(3)}
                onChange={() => handleCheckboxChange(3)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                A <Ruler /> {"<"} 35 kW - 0.2 kW/kg {"<"} <Activity /> {"<"}{" "}
                20/24+
                {isChecked.includes(3) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-black">Cars</p>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(4)}
                onChange={() => handleCheckboxChange(4)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                B1 <Ruler /> {"<"} 15 kW {"<"} <Activity /> {"<"} 400/500 kg{" "}
                {"<"} 16+
                {isChecked.includes(4) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(5)}
                onChange={() => handleCheckboxChange(5)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                B <Ruler /> {"<"} 3500 kg <PersonStanding /> max. 8+1 <Layers />{" "}
                {"<"} 750 kg <SquareChartGantt /> 18+
                {isChecked.includes(5) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(6)}
                onChange={() => handleCheckboxChange(6)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                BE <Ruler /> {"<"} 3500 kg <PersonStanding /> max. 8+1{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 18+
                {isChecked.includes(6) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-black">Trucks</p>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(7)}
                onChange={() => handleCheckboxChange(7)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                C1 <Ruler /> {"<"} 7500 kg <PersonStanding /> max. 8+1{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 18+
                {isChecked.includes(7) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(8)}
                onChange={() => handleCheckboxChange(8)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                C1E <Ruler /> {"<"} 12000 kg <PersonStanding /> max. 8+1{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 18+
                {isChecked.includes(8) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(9)}
                onChange={() => handleCheckboxChange(9)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                C <Ruler /> {"<"} 3500 kg <PersonStanding /> max. 8+1 <Layers />{" "}
                {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(9) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(10)}
                onChange={() => handleCheckboxChange(10)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                CE <Ruler /> {"<"} 3500 kg <PersonStanding /> max. 8+1{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(10) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-black">Others</p>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(11)}
                onChange={() => handleCheckboxChange(11)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                D1 <Ruler /> {"<"} max. 16+1 <PersonStanding /> max. 8m{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(11) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(12)}
                onChange={() => handleCheckboxChange(12)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                D1E <Ruler /> {"<"} max. 16+1 <PersonStanding /> max. 8m{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(12) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(13)}
                onChange={() => handleCheckboxChange(13)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                D <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(13) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(14)}
                onChange={() => handleCheckboxChange(14)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                DE <Ruler /> <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(14) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="custom-checkbox mr-2"
                checked={isChecked.includes(15)}
                onChange={() => handleCheckboxChange(15)}
              />
              <div className="text-black flex bg-slate-200 p-4 text-2xl">
                CE <Ruler /> {"<"} 3500 kg <PersonStanding /> max. 8+1{" "}
                <Layers /> {"<"} 750 kg <SquareChartGantt /> 21+
                {isChecked.includes(15) && (
                  <div className="ml-4 text-lg text-blue-600">
                    <label>From </label>
                    <input type="date" />
                    <label>To </label>
                    <input type="date" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex mx-6 my-4">
              <button
                type="button"
                className="w-24 items-center capitalize hover:bg-green-500 hover:text-white text-black p-2 font-bold rounded-md"
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

export default DrivingLicense;

// const CheckboxForm = () => {
//   const { control, handleSubmit, watch } = useForm({
//     defaultValues: {
//       checkboxes: [
//         { license: 'a1', checked: false, daterange: { datefrom: '', dateto: '' } },
//         { license: 'a2', checked: false, daterange: { datefrom: '', dateto: '' } }
//       ]
//     }
//   });

//   const { fields: checkboxFields, update } = useFieldArray({
//     control,
//     name: 'checkboxes'
//   });

//   const isChecked = watch('checkboxes');

//   const handleCheckboxChange = (index) => {
//     const updatedCheckboxes = [...isChecked];
//     updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
//     update(index, updatedCheckboxes[index]);
//   };

//   const onSubmit = (data) => {
//     const formattedData = data.checkboxes
//       .filter(item => item.checked)
//       .map(item => ({
//         license: item.license,
//         daterange: {
//           datefrom: item.daterange.datefrom,
//           dateto: item.daterange.dateto
//         }
//       }));

//     console.log(formattedData);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       {checkboxFields.map((checkbox, index) => (
//         <div key={index} className="flex items-center">
//           <Controller
//             name={`checkboxes[${index}].checked`}
//             control={control}
//             render={({ field: { onChange, value } }) => (
//               <input
//                 type="checkbox"
//                 className="custom-checkbox mr-2"
//                 checked={value}
//                 onChange={() => handleCheckboxChange(index)}
//               />
//             )}
//           />
//           <div className="text-black flex bg-slate-200 p-4 text-2xl">
//             {checkbox.license} <span>Details here</span>
//             {checkbox.checked && (
//               <div className="ml-4 text-lg text-blue-600">
//                 <Controller
//                   name={`checkboxes[${index}].daterange.datefrom`}
//                   control={control}
//                   render={({ field }) => (
//                     <div className="flex gap-2 mb-2">
//                       <label>From </label>
//                       <input type="date" {...field} />
//                     </div>
//                   )}
//                 />
//                 <Controller
//                   name={`checkboxes[${index}].daterange.dateto`}
//                   control={control}
//                   render={({ field }) => (
//                     <div className="flex gap-2 mb-2">
//                       <label>To </label>
//                       <input type="date" {...field} />
//                     </div>
//                   )}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//       <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">Submit</button>
//     </form>
//   );
// };

// export default CheckboxForm;
