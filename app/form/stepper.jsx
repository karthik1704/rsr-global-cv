"use client"

import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import Form from "./form";
import Step2 from "./step2";
import Step3 from "./step3";
import WorkExp from "./step2";
import Personal from "./step3";


const Stepper = () => {
  const steps = ["Personal information", "Work Experience", "Personal Skills",'Completed'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [ activeStep, setActiveStep ] = useState(0);

  // const steps = [
  //   { title: 'Personal information' },
  //   { title: 'Work Experience' },
  //   { title: 'Personal Skills' },
  // ];

  // const handleNext = () => {
  //   if (currentStep === steps.length) {
  //     setComplete(true);
  //   } else {
  //     setCurrentStep((prev) => prev + 1);
  //   }
  // };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <Form />;
      case 2:
        return <WorkExp />
      case 3  :
        return <Personal />;
      // case 4:
      //   return <Form4 />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className="flex justify-between">
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
      </div>
      <div className="flex justify-between w-2/4 mx-auto">
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
          {/* {currentStep === steps.length ? null : "prev"} */}
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
</div>
 {renderForm()}
    </>
  );

  
};

export default Stepper;
