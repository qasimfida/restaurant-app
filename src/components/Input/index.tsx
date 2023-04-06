import React from 'react';
import { LocationIcon } from '../Icons';

interface IProps {
  className: string;
  icon: boolean;
  placeholder: string;
}

const Input = (props: IProps) => {
  const { className, icon, placeholder, ...rest } = props;
  return (
    <div className="relative flex">
      <input
        className={`${className} border border-grey-500 w-full px-3 h-14 rounded-lg bg-dark`}
        placeholder={placeholder}
        {...rest}
      />
      {icon && <LocationIcon className="absolute right-2 top-4" />}
    </div>
  );
};

export default Input;
