import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer'; 
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryProducts from './pages/CategoryProducts';
import Cart from './pages/Cart';
import StripeProvider from './components/StripeProvider';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart updated:", product.name); // Check karne ke liye
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} />

      <div className="flex-grow">
        <Routes>
          {/* ✅ FIXED: Yahan addToCart={addToCart} add kar diya hai */}
          <Route path="/" element={<Home addToCart={addToCart} />} />
          
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/men" element={<CategoryProducts category="men" addToCart={addToCart} />} />
          <Route path="/category/women" element={<CategoryProducts category="women" addToCart={addToCart} />} />
          <Route path="/category/kids" element={<CategoryProducts category="kids" addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/checkout"
            element={
              <StripeProvider>
                <Checkout amount={totalAmount > 0 ? totalAmount : 10} />
              </StripeProvider>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;