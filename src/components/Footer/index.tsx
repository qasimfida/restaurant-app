import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  className: string;
}

const Footer = ({ className }: IProps) => {
  return (
    <div className={`${className}`}>
      <p className="text-grey text-center mb-5">
        Mecca, Rashidiya District, Engineer Omar Qazi Stree
      </p>
      <div className="flex items-center gap-5 justify-center mb-5">
        <div className="w-20 h-10 relative">
          <Image alt="Footer logo" src="/f1.png" fill />
        </div>
        <div className="w-20 h-10 relative">
          <Image alt="Footer logo" src="/f2.svg" fill />
        </div>
        <div className="w-14 h-6 relative">
          <Image alt="Footer logo" src="/f3.png" fill />
        </div>
        <div className="w-10 h-6 relative">
          <Image alt="Footer logo" src="/f4.png" fill />
        </div>
        <div className="w-16 h-6 relative">
          <Image alt="Footer logo" src="/f5.png" fill />
        </div>
        <div className="w-16 h-6 relative">
          <Image alt="Footer logo" src="/f6.png" fill />
        </div>
        <div className="w-16 h-6 relative">
          <Image alt="Footer logo" src="/f7.png" fill />
        </div>
        <div className="w-16 h-6 relative">
          <Image alt="Footer logo" src="/f8.png" fill />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <Link href="/" className="text-light hover:text-grey">
          Terms & Conditions
        </Link>
        <Link href="/" className="text-light hover:text-grey">
          Privacy Policy
        </Link>
        <Link href="/" className="text-light hover:text-grey">
          Cancelation & Refund Policy
        </Link>
        <Link href="/" className="text-light hover:text-grey">
          Shipping & Delivery Policy
        </Link>
        <Link href="/" className="text-light hover:text-grey">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
