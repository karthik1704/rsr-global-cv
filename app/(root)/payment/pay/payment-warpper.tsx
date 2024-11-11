"use client";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout-from";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); // Your Stripe public key

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 1000,
  currency: "gbp",

  // Fully customizable with appearance API.
  // appearance: {
  // },
};

const PaymentWarpper = ({ user }:{user:User}) => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm user={user} />
    </Elements>
  );
};

export default PaymentWarpper;
