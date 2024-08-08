"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { URLSearchParams } from "url";
import { SERVER_API_URL } from "@/app/constants";

import { z } from "zod";

const schema = z
  .object({
    username: z
      .string()
      .email({
        message: "Invalid Email",
      })
      .trim(),
    password: z.string().trim().min(1, "Password Required"),
  })
  .required({ username: true, password: true });


export async function signinJwt(prevState: any, formData: any) {
  const username = formData.get("username");
  const password = formData.get("password");

  const validatedFields = schema.safeParse({
    username: username,
    password: password,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: null,
      fieldErrors: {
        username: validatedFields.error.flatten().fieldErrors.username,
        password: validatedFields.error.flatten().fieldErrors.password,
      },
    };
  }

  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);
  params.append("grant_type", "");
  params.append("client_id", "");
  params.append("client_secret", "");


    const res = await fetch(`${SERVER_API_URL}/auth/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
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

    if(res.status ===200){
    const resJson = await res.json();
    cookies().set("access", resJson.access_token);
    }
  

  redirect("/resume");
}
