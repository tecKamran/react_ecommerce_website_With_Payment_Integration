import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-5 bg-gray-900 text-white shadow-lg">
      <h2 className="text-2xl font-bold hover:text-blue-400 transition-colors">Kamran'Shop</h2>
      <div className="flex gap-6 text-lg">
        <Link className="hover:text-blue-400 transition-colors" to="/">Home</Link>
        <Link className="hover:text-blue-400 transition-colors" to="/categories">Categories</Link>
        <Link className="relative hover:text-blue-400 transition-colors" to="/cart">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
