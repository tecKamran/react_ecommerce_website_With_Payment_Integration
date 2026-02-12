import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Checkout({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("http://localhost/react_backend/api/create-payment-intent.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then(async (res) => {
        const text = await res.text();
        try {
          return JSON.parse(text);
        } catch {
          console.error("Backend returned invalid JSON:", text);
          throw new Error("Invalid JSON from backend");
        }
      })
      .then((data) => setClientSecret(data.clientSecret || ""))
      .catch((err) => console.error(err));
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (result.error) {
      alert("Payment failed: " + result.error.message);
      setLoading(false);
    } else if (result.paymentIntent.status === "succeeded") {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 bg-green-100 text-green-800 rounded max-w-md mx-auto mt-10 text-center shadow-lg">
        <h2 className="text-xl font-bold mb-2">✅ Payment Successful</h2>
        <p>Thank you for your order.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow max-w-md mx-auto mt-10"
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Total Amount: Rs {amount}</h2>
      <CardElement
        options={{ hidePostalCode: true }}
        className="mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 block mx-auto disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
