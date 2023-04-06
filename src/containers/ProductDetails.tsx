import Button from '@/components/Button';
import { ShareIcon } from '@/components/Icons';
import Input from '@/components/Input';
import Image from 'next/image';
import React from 'react';

const ProductDetailsContainer = () => {
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
          <h2 className="mb-3 text-2xl font-semibold text-light">
            Labneh With Cheese
          </h2>
          <p className="text-xl text-primary">9.00 SAR</p>
        </div>
        <div className="flex items-center">
          <h3 className="mr-2 text-xl font-semibold text-white">Share</h3>
          <ShareIcon />
        </div>
        <div className="mt-8 text-sm text-grey">Calories = 192</div>
        <div className="px-2 pt-6 pb-8 my-10 border-y border-dark">
          <h3 className="mb-3 mr-2 font-semibold text-white text-md">Notes</h3>
          <Input className="" />
        </div>
        <div className="flex items-center">
          <h3 className="mr-2 font-semibold text-white text-md">Quantity</h3>
        </div>
        <div className='flex items-center h-20' >
          <Button variant='danger' icon={false} className='max-w-[400px] mx-auto !justify-center' >Add to basked</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
