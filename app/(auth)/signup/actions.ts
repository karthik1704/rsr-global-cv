"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { URLSearchParams } from "url";
import { SERVER_API_URL } from "@/app/constants";

import { z } from "zod";

const schema = z
  .object({
    email: z
      .string()
      .email({
        message: "Email Id is required",
      })
      .trim()
      .transform((email) => {
        const lowercasedEmail = email.toLowerCase();
        console.log("Transformed email:", lowercasedEmail);
        return lowercasedEmail;
      }),
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    referred_by_type: z.string().min(1, "Reffered by is required"),
    referred_by: z.string().min(1, "Reffered user name is required"),
    phone: z.string().min(1, "Phone number is required"),
    // email: z.string().min(1, 'Email Id is Required'),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters"),
    password2: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.password2, {
    path: ["password2"],
    message: "Password does not match",
  });
// .required({ email: true, password: true });

export async function createUser(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  const validatedFields = schema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        first_name: validatedFields.error.flatten().fieldErrors.first_name,
        password: validatedFields.error.flatten().fieldErrors.password,
        password2: validatedFields.error.flatten().fieldErrors.password2,
        last_name: validatedFields.error.flatten().fieldErrors.last_name,
        phone: validatedFields.error.flatten().fieldErrors.phone,
        email: validatedFields.error.flatten().fieldErrors.email,
        referred_by_type: validatedFields.error.flatten().fieldErrors.referred_by_type,
        referred_by:
          validatedFields.error.flatten().fieldErrors.referred_by,
      },
    };
  }

  
  console.log(data);

  const res = await fetch(`${SERVER_API_URL}/auth/signup`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedFields.data),
  });

  if (res.status === 401) {
    const error = await res.json();
    console.log(error);

    return {
      ...prevState,
      message: error?.detail,
      fieldErrors: {
        firstname: null,
        password: null,
      },
    };
  }
  if (res.status === 403) {
    const error = await res.json();
    console.log(error);

    return {
      ...prevState,
      message: error?.detail,
      fieldErrors: {
        firstname: null,
        password: null,
      },
    };
  }

  if (res.status == 422) {
    const resJson = await res.json();

    console.log(resJson);
    console.log(resJson.detail[0].loc);
    console.log(resJson.detail[0].input);
  }

  if (res.status === 201) {
    redirect("/login");
  }
}
