import React, { useState } from 'react';
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  title: string;
  calories: number;
  price: number;
}

interface IProps {
  title: string;
  quantity: number;
  index: number;
  products: Product[];
  openIndex?: number;
  onOpen?: (index: number) => void;
}

const Collapse = ({
  title,
  quantity,
  index,
  openIndex,
  onOpen,
  products,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(openIndex === index);

  const handleToggle = () => {
    if (onOpen) {
      onOpen(index);
    }
  };

  return (
    <div className="mb-4">
      <div
        className={`flex justify-between items-center py-4 px-4 cursor-pointer border border-white rounded-lg ${
          isOpen ? '!border-primary' : ''
        }`}
        onClick={handleToggle}
      >
        <h3
          className={`text-[22px] text-white font-semibold flex items-center ${
            isOpen && '!text-primary'
          }`}
        >
          {title}
          <span className="ml-1 text-sm font-normal text-white">
            ({quantity})
          </span>
        </h3>
        <svg
          className={`w-6 h-6 transition-transform transform fill-white ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15.5a.5.5 0 01-.354-.146l-5-5a.5.5 0 01.708-.708L10 14.293l4.646-4.647a.5.5 0 11.708.708l-5 5a.5.5 0 01-.354.146z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4">
          <div className="columns-1 sm:columns-2 border-b-0 border-border sm:border-b gap-10">
            {products.map((product) => (
              <ProductCard
                className="w-full"
                image="/1.jpg"
                title={product.title}
                calories={product.calories}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
