import React from 'react';

// Example products data
const products = [
  {
    name: "Hair Growth Serum",
    price: "$29.99",
    image: "https://ik.imagekit.io/ytissbwn8/th.jpg?updatedAt=1732383128470",
    description: "A powerful serum to stimulate hair growth and nourish your scalp."
  },
  {
    name: "Rejuvenating Shampoo",
    price: "$19.99",
    image: "https://ik.imagekit.io/ytissbwn8/s-l500.jpg?updatedAt=1732383128530",
    description: "Gentle shampoo that restores shine and promotes scalp health."
  },
  {
    name: "Scalp Massage Oil",
    price: "$15.99",
    image: "https://ik.imagekit.io/ytissbwn8/lllll.jpg?updatedAt=1732383128464",
    description: "A soothing oil for scalp massages that helps reduce hair fall."
  }
];

const ProductSuggestionPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Recommended Products for You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestionPage;
