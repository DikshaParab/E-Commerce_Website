"use client";

import Button from "./Button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  const handleViewDetails = () => {
    console.log(`Viewing details for product ${id}`);
  }

  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-3">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-3"/>
      <h2 className="text-md font-semibold text-teal-800">{name}</h2>
      <p className="text-teal-600">${price}</p>
      <div className="flex gap-2 mt-auto">
        <Button label="View Details" onClick={handleViewDetails} variant="secondary" />
        <Button label="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;