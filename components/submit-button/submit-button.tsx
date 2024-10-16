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
      className={`${width} cursor-pointer rounded-lg border border-primary bg-green-600 p-1 text-white transition hover:bg-green-700`}
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? loading : name}
    </button>
  );
};

export default SubmitButton;
