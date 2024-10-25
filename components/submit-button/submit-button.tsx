"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  name = "Submit",
  loading = "Loading...",
  width="w-full",
}: {
  name?: string;
  loading?: React.ReactNode | string;
  width?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${width} cursor-pointer rounded-lg  bg-green-600 p-1 text-white transition ${pending ? 'opacity-50 cursor-wait' : 'hover:bg-green-500'}`}
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? loading : name}
    </button>
  );
};

export default SubmitButton;
