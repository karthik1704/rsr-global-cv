"use client";

import { useEffect, useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
); // Your Stripe public key

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) return; // Stripe.js not loaded
    console.log("Here");

    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: undefined,
    
    });
    console.log("Here1");

    if (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Handle successful payment
      setErrorMessage(null);
      console.log("Payment successful:", paymentIntent);
      // You can display a success message or update the UI accordingly
    } else {
      setErrorMessage("success");
      console.log("success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 20000,
  currency: "gbp",

  // Fully customizable with appearance API.
  // appearance: {
  // },
};

const CheckoutPage = ({ handleNext }: { handleNext: () => void }) => {
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    // Create PaymentIntent when the component mounts
    fetch("api/stripe-payments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, []);
  console.log(clientSecret);
  if (clientSecret === "") {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center p-10 w-full">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
