import Link from "next/link";



const PaymentPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
        <div className="text-4xl font-bold text-center mb-6">£20</div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc list-inside">
            <li>1 Resume Count</li>
            <li>3 Months Expiry</li>
            <li>Unlimited Edits</li>
            <li>Unlimited Downloads</li>
          </ul>
        </div>
        <Link href="/payment/pay" className="block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center">
          Pay £20
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;