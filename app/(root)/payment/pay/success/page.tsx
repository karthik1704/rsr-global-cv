import Link from "next/link";



const SuccessPage = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const paymentIntentId = searchParams["payment_intent"];
  const paymentIntentClientSecret = searchParams["payment_intent_client_secret"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <svg className="w-24 h-24 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        {/* <img src="/payment-success.jpg" alt="Payment Success" className="w-64 h-auto mx-auto mb-6" /> */}
        <div className="space-x-4">
          <Link href="/" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200">
            Back to Home
          </Link>
          <Link href="/resume" className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
            Create CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;