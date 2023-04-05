import { ShareIcon } from '@/components/Icons';
import Input from '@/components/Input';
import Image from 'next/image';
import React from 'react';

const ProductDetails = () => {
  return (
    <div className="sm:container sm:mx-auto">
      <div className="relative w-full h-64">
        <Image
          className="bg-center bg-cover"
          fill
          src="/banner.jpg"
          alt="logo"
        />
      </div>
      <div className="px-5 pt-10 bg-full-dark">
        <div className="flex justify-between py-5">
          <h2 className="text-light text-2xl font-semibold mb-3">
            Labneh With Cheese
          </h2>
          <p className="text-xl text-primary">9.00 SAR</p>
        </div>
        <div className="flex items-center">
          <h3 className="text-xl font-semibold text-white mr-2">Share</h3>
          <ShareIcon />
        </div>
        <div className="text-grey text-sm mt-8">Calories = 192</div>
        <div className="pt-6 pb-8 px-2 my-10 border-y border-dark">
          <h3 className="text-md mb-3 font-semibold text-white mr-2">Notes</h3>
          <Input className="" />
        </div>
        <div className="flex items-center">
          <h3 className="text-md font-semibold text-white mr-2">Quantity</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
