const productsData = {
  men: [
    { id: 1, name: "Men T-Shirt", price: 2000 },
    { id: 2, name: "Men Shoes", price: 4500 },
  ],
  women: [
    { id: 3, name: "Women Dress", price: 3500 },
    { id: 4, name: "Women Heels", price: 3000 },
  ],
  kids: [
    { id: 5, name: "Kids Shirt", price: 1500 },
    { id: 6, name: "Kids Shoes", price: 2000 },
  ],
};

function CategoryProducts({ category, addToCart }) {
  const products = productsData[category] || [];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">{category.toUpperCase()} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-xl shadow hover:shadow-2xl transition-shadow p-6 flex flex-col items-center"
          >
            <div className="bg-gray-100 w-full h-40 mb-4 rounded-lg flex items-center justify-center text-gray-400">
              Image
            </div>
            <h4 className="text-lg font-semibold mb-2">{p.name}</h4>
            <p className="mb-4 font-medium">Rs {p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
