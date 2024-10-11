import { Metadata } from "next";
import SignUp from "./signup-form";

export const metadata:Metadata = {
  title: "Create Account | RSR Academy",
  description: "Login page",
};

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
