import React from 'react';
import Button from '../Button';
import { LanguageIcon, UserIcon } from '../Icons';

interface IProps {
  className: string;
}

const Navbar = ({ className }: IProps) => {
  return (
    <header
      className={`py-[10px] px-[25px] flex justify-between items-center ${className}`}
    >
      <Button className="">Ash Shara'i</Button>
      <div className="flex items-center">
        <a href="#" className="flex items-center text-white mr-4">
          <LanguageIcon className="mr-2" />
          عربي
        </a>
        <a href="#" className="flex items-center text-white">
          <UserIcon className="mr-2" />
          Login
        </a>
      </div>
    </header>
  );
};

export default Navbar;
