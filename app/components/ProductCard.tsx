"use client";

import Button from "./Button";

interface ProductCardProps {
  name: string;
  price: number;
}

const ProductCard = ({ name, price }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">₹{price}</p>
      <Button label="Add to Cart" onClick={handleAddToCart} />
    </div>
  );
};

export default ProductCard;