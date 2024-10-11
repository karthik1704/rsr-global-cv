import { NextRequest, NextResponse } from 'next/server';
import {SERVER_API_URL} from '@/app/constants';
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const formData = await request.formData()
    const file = formData.get('file') as File;

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }
    

    const access_token = cookies().get("access");
    const response = await fetch(`${SERVER_API_URL}/resumes/upload-image/${id}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token?.value}`,
        },
        body: formData
    });

   if(response.status===222){
    const error = await response.json();
    console.error('Error details:', error.detail);
    console.error('Error details:', error.detail[0].loc);
   }

    const data = await response.json();
    console.log(data)
    if (response.ok) {
        return NextResponse.json(data);
    } else {
        return NextResponse.json({ error: 'Image upload  failed' }, { status: 400 });
    }
}
