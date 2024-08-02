"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function logout(){
    cookies().delete('access');
    redirect('/login')
    revalidateTag('User')
}