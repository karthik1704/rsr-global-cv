"use client";

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('');  // Your Stripe public key

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // Create PaymentIntent when the component mounts
        fetch('/api/stripe-payments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret));
    }, []);
console.log(clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) return; // Stripe.js not loaded

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'https://your-website.com/order-complete',  // Optional: Redirect URL after payment
            }
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {clientSecret && (
                <PaymentElement />
            )}
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

const CheckoutPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default CheckoutPage;