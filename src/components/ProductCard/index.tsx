import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  image: string;
  title: string;
  calories: number;
  price: number;
  className: string;
  id: string
}

const ProductCard = ({ image, title, calories, price, className, id }: IProps) => {
  return (
    <Link href={`/products/${id}`}
      className={`overflow-hidden border-b py-4 border-border sm:border-b-0 block ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="">
          <div className="text-sm tracking-wide text-light">{title}</div>
          <div className="mt-2">
            <div className="text-sm text-grey">Calories = {calories}</div>
            <div className="mt-2 text-sm text-primary">{price} SAR</div>
          </div>
        </div>
        <div className="shrink-0">
          <div className="relative w-24 h-24">
            <Image className="rounded-lg" fill src={image} alt={title} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
