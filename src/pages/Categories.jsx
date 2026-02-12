import { Link } from "react-router-dom";

const categoryData = [
  { 
    name: "Men", 
    path: "/category/men", 
    subCats: ["Shirts", "Jeans", "Jackets", "Suits"],
    img: "https://images.unsplash.com/photo-1490550151193-88c99938c372?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    name: "Women", 
    path: "/category/women", 
    subCats: ["Dresses", "Tops", "Skirts", "Handbags"],
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    name: "Kids", 
    path: "/category/kids", 
    subCats: ["T-Shirts", "Pants", "Toys", "Infants"],
    img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=80" 
  },
];

function Categories() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="py-12 text-center">
        <h2 className="text-xl font-light uppercase tracking-[0.6em] text-gray-900">Departments</h2>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryData.map((cat) => (
          <div key={cat.name} className="relative group overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm shadow-sm">
            {/* Base Image */}
            <img 
              src={cat.img} 
              alt={cat.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Initial Title Overlay (Visible by default) */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-white text-2xl font-light uppercase tracking-widest">{cat.name}</h3>
            </div>

            {/* HOVER CONTENT (Sub-categories list) */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
              <h3 className="text-white text-sm font-bold uppercase tracking-[0.3em] mb-6 border-b border-white/20 pb-2">
                {cat.name} Collection
              </h3>
              
              <ul className="space-y-3 text-center mb-8">
                {cat.subCats.map((sub) => (
                  <li key={sub}>
                    <Link 
                      to={`${cat.path}?type=${sub.toLowerCase()}`}
                      className="text-white/70 text-[11px] uppercase font-bold tracking-[0.2em] hover:text-white hover:tracking-[0.3em] transition-all"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link 
                to={cat.path} 
                className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                View Everything
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;