const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: "€15",
      image: "/images/chocolate-cake.jpg",
      description: "Rich and moist chocolate cake with creamy frosting.",
    },
    {
      id: 2,
      name: "Strawberry Tart",
      price: "€12",
      image: "/images/strawberry-tart.jpg",
      description: "Fresh strawberries on a buttery crust with vanilla cream.",
    },
    {
      id: 3,
      name: "Macarons",
      price: "€8",
      image: "/images/macarons.jpg",
      description: "Assorted delicate and flavorful macarons.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
