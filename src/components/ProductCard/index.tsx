import Image from 'next/image';
import React from 'react';

interface IProps {
  image: string;
  title: string;
  calories: number;
  price: number;
  className: string;
}

const ProductCard = ({ image, title, calories, price, className }: IProps) => {
  return (
    <div
      className={`overflow-hidden border-b py-4 border-border sm:border-b-0 ${className}`}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <div className="tracking-wide text-sm text-light">{title}</div>
          <div className="mt-2">
            <div className="text-grey text-sm">Calories = {calories}</div>
            <div className="mt-2 text-sm text-primary">{price} SAR</div>
          </div>
        </div>
        <div className="shrink-0">
          <div className="w-24 h-24 relative">
            <Image className="rounded-lg" fill src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
