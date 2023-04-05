import Image from 'next/image';
import React from 'react';

interface IProps {
  image: string;
  title: string;
  calories: number;
  price: number;
}

const ProductCard = ({ image, title, calories, price }: IProps) => {
  return (
    <div className="overflow-hidden">
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
