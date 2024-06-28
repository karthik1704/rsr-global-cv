   "use client"
import React, { useState } from 'react';
import PersonalInformation from './step1';
// import ExperienceEducation from './step2';
import ExperienceEducation from './step2';
import Skills from './step3';
import Preview from './preview';
import "./stepper.css";
import { TiTick } from "react-icons/ti";


const Cv =()=>{
    const steps = ["Personal information", "Work Experience", "Personal Skills",'Completed']; //form
    const [step, setStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(1); //form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gen:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        alert('CV Submitted!');
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInformation formData={formData} handleChange={handleChange} onNext={handleNext} />;
            case 2:
                return <ExperienceEducation formData={formData} handleChange={handleChange} onNext={handleNext} onPrevious={handlePrevious} />;
            case 3:
                return <Skills formData={formData} handleChange={handleChange} onNext={handleNext} onPrevious={handlePrevious} />;
            case 4:
                return <Preview formData={formData} onPrevious={handlePrevious} onSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div> */}
      {/* <div className="flex justify-between w-2/4 mx-auto">
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev - 1);
          }}
          style={{ display: currentStep === steps.length ? "none" : "block" }}
          disabled={currentStep === 1}
        >
           Prev
        </button>
)}

{!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
)}
</div> */}

            {renderStep()}
        </div>
    );
};


export default Cv