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
        message: "Invalid Email",
      })
      .trim(),
    password: z.string().trim().min(1, "Password Required"),
  })
  .required({ email: true, password: true });


export async function createUser(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  console.log(data)

//   const validatedFields = schema.safeParse({
//     username: username,
//     password: password,
//   });

//   // Return early if the form data is invalid
//   if (!validatedFields.success) {
//     console.log(validatedFields.error.flatten().fieldErrors);
//     return {
//       message: null,
//       fieldErrors: {
//         username: validatedFields.error.flatten().fieldErrors.email,
//         password: validatedFields.error.flatten().fieldErrors.password,
//       },
//     };

    const res = await fetch(`${SERVER_API_URL}/auth/signup`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if( res.status===401){
      const error = await res.json();
      console.log(error);

      return{
        ...prevState,
        message: error?.detail,
        fieldErrors: {
          username: null,
          password: null,
        },
      }
    }

    if (res.status == 422) {
        const resJson = await res.json();
    
        console.log(resJson);
        console.log(resJson.detail[0].loc);
        console.log(resJson.detail[0].input);
      }

    if(res.status ===201){
        redirect("/login");
    }


 
}
