import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = {
  hero1: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  hero2: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
  men: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=600&q=80",
  women: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
  kids: "https://images.unsplash.com/photo-1514091912796-a49e293b9ada?auto=format&fit=crop&w=600&q=80",
};

const featuredProducts = [
  { id: 1, name: "Premium Tee", price: 2000, category: "Men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Floral Dress", price: 3500, category: "Women", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Kids Jacket", price: 2500, category: "Kids", image: "https://images.unsplash.com/photo-1519235106638-30cc49b5dafe?auto=format&fit=crop&w=400&q=80" },
];

function Home({ addToCart }) {
  const handleAddToCart = (p) => {
    if (typeof addToCart === 'function') {
      addToCart(p);
     
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* 1. HERO SLIDER (RE-ACTIVATED) */}
      <section className="h-[45vh] md:h-[60vh] w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="h-full w-full bg-cover bg-center flex items-center px-10 md:px-24" style={{ backgroundImage: `url(${images.hero1})` }}>
              <div className="bg-black/20 absolute inset-0"></div>
              <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter">New Arrivals</h1>
                <Link to="/categories" className="bg-blue-600 px-6 py-2 rounded-sm font-bold text-xs uppercase">Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-cover bg-center flex items-center px-10 md:px-24" style={{ backgroundImage: `url(${images.hero2})` }}>
              <div className="bg-black/20 absolute inset-0"></div>
              <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Season Sale</h1>
                <Link to="/categories" className="bg-white text-black px-6 py-2 rounded-sm font-bold text-xs uppercase">Get 50% Off</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. CATEGORIES - Compact & Neat */}
      <section className="py-12 px-6 container mx-auto">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-center">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Men", img: images.men, link: "/category/men" },
            { name: "Women", img: images.women, link: "/category/women" },
            { name: "Kids", img: images.kids, link: "/category/kids" }
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative h-64 overflow-hidden rounded-lg">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED - Pro-Sizing */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-10 text-center text-slate-800">Featured Essentials</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-48 md:h-64 overflow-hidden bg-gray-200">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">{p.category}</p>
                  <h4 className="text-sm font-bold mb-2 h-10 overflow-hidden">{p.name}</h4>
                  <p className="text-sm font-black mb-4">Rs {p.price}</p>
                  <button 
                    onClick={() => handleAddToCart(p)}
                    className="w-full bg-slate-900 text-white py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors active:scale-95"
                  >
                    Add to Cart +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER - Compact */}
      <section className="py-12 px-6 border-t">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-lg font-bold mb-2 uppercase">Stay Updated</h2>
          <div className="flex gap-2">
            <input type="email" placeholder="Email Address" className="flex-grow px-4 py-2 border text-sm rounded-sm" />
            <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase">Join</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;