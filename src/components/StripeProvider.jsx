import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// 🔹 Put your Stripe publishable key here
const stripePromise = loadStripe("pk_test_51SatdWRWP9dcfn32m83yrMJo1HBhBw68Q1EcyI6osbanuLOagG42e5Ix8z4nJpJpkaC9WhjNYsbOeAkvA3vmKoNz004aaeT7lc"); // Replace with your key

export default function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
