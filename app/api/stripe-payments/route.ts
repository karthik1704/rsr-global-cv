import { NextResponse } from 'next/server';
import {SERVER_API_URL} from '@/app/constants';
import { cookies } from "next/headers";

export async function POST(request: Request) {
    // const { amount } = await request.json();
    const access_token = cookies().get("access");
    const response = await fetch(`${SERVER_API_URL}/stripe-payments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token?.value}`,
        },
        body: JSON.stringify({
            amount: 1000,
            currency: 'gbp'
          })
    });

   

    const data = await response.json();
    console.log(data)
    if (response.ok) {
        return NextResponse.json(data);
    } else {
        return NextResponse.json({ error: 'Payment intent creation failed' }, { status: 400 });
    }
}
