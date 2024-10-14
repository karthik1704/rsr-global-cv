import { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata:Metadata = {
  title: "Login | RSR Academy",
  description: "Login page",
};

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};
export default Login;
