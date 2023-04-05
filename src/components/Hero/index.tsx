import Image from 'next/image';
import React from 'react';

interface IProps {
  className: string;
}

const Hero = ({ className }: IProps) => {
  return (
    <div className="relative mb-12">
      <div className="w-full h-60 relative bg-banner bg-center bg-cover"></div>
      <div className="absolute -bottom-[30px]">
        <div className="flex items-end">
          <Image
            className="rounded-lg"
            width={100}
            height={100}
            src="/logo.png"
            alt="logo"
          />
          <div>
            <h2 className="text-light text-2xl font-semibold mb-3">
              Baba Snfor
            </h2>
            <p className="text-light text-sm">
              We Thank You For Your Trust In Us By Providing The Best Service
              And The Best Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
