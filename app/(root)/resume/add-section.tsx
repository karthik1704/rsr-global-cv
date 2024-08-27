import { useState } from "react";

const options = [
    { value: "", label: "Select an option" },
    // { value: "personal", label: "Personal information" },
    { value: "work", label: "Work Experience" },
    { value: "education", label: "Education and Training" },
    {label:'Language Skills'},
    {label:'Driving License'},
    { value: "additional", label: "Honors and Awards" },
    // {label: 'Honors and Awards'},
    {label:'Others'},
  ];

  

const AddSection =({addSections,setShowPreview,showPreview,selectedSection}) =>{

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const [selected, setSelected]= useState('');

    const handleDropdownChange = (event) => {
        setSelected(event.target.value);
      };

      const addToSection = () =>{
addSections(selected)
setIsPopupVisible(false)
setShowPreview(false)

      }

      const handleButtonClick = () => {
        setShowPreview(!showPreview)
      }

    return(
        <>
        {isPopupVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-md shadow-lg w-1/2">
              <button
                className="absolute top-2 right-2 text-base text-black hover:text-gray-900 hover:bg-gray-200 py-2 px-4 rounded-full"
                onClick={() => setIsPopupVisible(false)}
              >
               X
              </button>
                    <div className="mb-4 px-6 py-4">
                      <label className="block text-black font-bold text-sm mb-2">
                        select section
                      </label>
                      <select
                        // value={selectedSection}
                        onChange={handleDropdownChange}
                        className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        
                      >
                        {options
                          .filter((option) => !selectedSection.includes(option.value))
                          .map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="flex justify-center mx-auto my-2">
                        <button
                        className="w-28 items-center capitalize bg-white hover:bg-green-600 text-black p-2 hover:text-slate-100 font-bold rounded-md"
                        onClick={()=>setIsPopupVisible(false)}
                        >
                          Cancel
                        </button>
                        <button
                        onClick={addToSection}
                        className="w-28 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2  mx-10 font-bold rounded-md"
                        >
                          Add Section
                        </button>
                       </div>
                    </div>
                    </div>
          )}
          
                    <div className="flex justify-center items-center">
                      <button
                      className="w-11/12 my-2 outline-1 outline outline-offset-1 outline-black items-center capitalize bg-white hover:bg-green-600 hover:outline-none text-black p-2 hover:text-slate-100 font-bold rounded-md"
                       type="button"
                       onClick={()=>setIsPopupVisible(true)}>Add Section</button>
                    </div>
                    </>
    )
}

export default AddSection

