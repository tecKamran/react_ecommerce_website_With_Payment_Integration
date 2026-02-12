import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Kamran'Shop</h3>
          <p className="text-gray-300 text-sm">
            Your one-stop shop for Men, Women, and Kids products. Quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-400 transition">Categories</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-400 transition">Cart</Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-blue-400 transition">Checkout</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service / Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: kamranalijatoi400@mail.com</li>
            <li>Phone: +92 3172191489</li>
            <li>Address: Karachi, Pakistan</li>
            <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-sky-400 transition text-white">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-pink-500 transition text-white">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-700 transition text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ShopX. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
