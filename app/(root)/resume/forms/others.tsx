import { useState } from "react";

const Others = ({selectedSection,setSelectedSection,setShowPreview,selected}) =>{

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

    const cancel =() =>{
        const newSelectoptions = selectedSection.filter(selected=>selected!=='additional');
        setSelectedSection(newSelectoptions);
                setShowPreview(true);
                setShowForm(false);
      }


    return(
        <>
        {show && (
        <div>
            <p className="text-2xl text-black text-center py-3 font-bold uppercase">Others</p>
            <p className="text-2xl text-black text-center">Be patient we are working on it.</p>
<form>

<div className="flex mx-6 my-4">
              <button
                type="button"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md"
                onClick={cancel}
              >
                Cancel
              </button>
              {/* <button
                type="submit"
                className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md"
              >
                Save
              </button> */}
            </div>

    </form>
    </div>
     )}
</>
)
}

export default Others