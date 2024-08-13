"use client";
import { Stepper, Step } from "react-form-stepper";

const Steppers = ({ step }: { step: number }) => {
  return (
    <Stepper
      activeStep={step}
      styleConfig={{
        activeBgColor: "#16a34a",
        completedBgColor: "#166534",
        activeColor: "#4ade80",
        completedColor: "#14532d",
        fontWeight:'700'
      }}
    >
        <Step label="Personal Information" />
        <Step label="Work Experience" />
        <Step label="Education" />
        <Step label="Additional Information" />
        <Step label="Preview" />
        <Step label="PDF" />
    </Stepper>
  );
};

export default Steppers