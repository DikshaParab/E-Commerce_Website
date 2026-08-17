"use client";

import Button from "./Button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-3">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-3"/>
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">${price}</p>
      <div>
        <Button label="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;