"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PAYMENT_SUCCESS_URL } from "@/app/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set");
}


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY 
); // Your Stripe public key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [clientSecret, setClientSecret] = useState<string>("");
  const router = useRouter();

    const getClientSecret = async () => {
        const res = await fetch("/api/stripe-payments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
    };

    useEffect(() => {
        getClientSecret();
    }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Stripe.js not loaded
    console.log("Here");


    if (!stripe || !elements || !clientSecret) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: PAYMENT_SUCCESS_URL,
      },
      redirect: "if_required",
    });

    console.log("Here1");

    if (result.error) {
      setErrorMessage(result.error.message ?? "An unknown error occurred");
      console.log(result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
      // Handle successful payment
      setErrorMessage(null);
      console.log("Payment successful:", result.paymentIntent);
      router.push(PAYMENT_SUCCESS_URL);
      // You can display a success message or update the UI accordingly
    } else {
      setErrorMessage("Payment status unknown");
      console.log("Payment status unknown");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 p-12 rounded-md space-y-2 w-full">
  <p className="w-full mt-4 py-2 px-4 text-xl text-center text-white font-semibold rounded-md transition duration-300 bg-blue-500">
    Payment Information
  </p>
  <p className="w-full mt-4 py-2 px-4 text-2xl text-center font-semibold rounded-md transition duration-300">Amount Total: 10 £</p>
  <PaymentElement />
  <div className="flex space-x-4 mt-4">
    <Link href={'/'}
      className={'w-full py-2 px-4 text-center text-white font-semibold rounded-md transition duration-300 bg-gray-600 hover:bg-blue-600'}
    >
     Close
    </Link>
    <button 
      type="submit" 
      disabled={!stripe} 
      className={`w-full py-2 px-4 text-white font-semibold rounded-md transition duration-300 ${
        !stripe 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      Pay Now
    </button>
  </div>
</div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;

