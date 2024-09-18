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
        fontWeight:'700',
        inactiveTextColor:'#000',
        // activeTextColor:'#000',
        // completedTextColor: '#000',
      }}
    >
        <Step label="Edit" />
        <Step label="Preview" />
        <Step label="Payment" />
        <Step label="Save" />
        {/* <Step label="PDF" /> */}
    </Stepper>
  );
};

export default Steppers