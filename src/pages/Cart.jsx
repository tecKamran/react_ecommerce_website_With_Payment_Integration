import { useNavigate } from "react-router-dom";

export default function Cart({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4 divide-y divide-gray-300">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>Rs {item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 font-bold text-lg text-right">Total: Rs {total}</p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition transform hover:scale-105 block mx-auto"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
