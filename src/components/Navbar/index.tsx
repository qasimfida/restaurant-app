import React from 'react';
import Button from '../Button';
import { LanguageIcon, UserIcon } from '../Icons';

interface IProps {
  className: string;
  handleOpen: () => void;
}

const Navbar = ({ className, handleOpen }: IProps) => {
  return (
    <header
      className={`py-[10px] px-[25px] flex justify-between items-center bg-full-dark ${className}`}
    >
      <Button className="" onClick={handleOpen}>
        Ash Shara'i
      </Button>
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
