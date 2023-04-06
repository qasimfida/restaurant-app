import React, { ButtonHTMLAttributes } from 'react';
import { RightArrowIcon } from '../Icons';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // Define button variants
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  className,
  onClick,
  ...rest
}: IProps) => {
  const baseClasses = 'rounded-lg py-3 px-4 font-normal';
  let variantClasses = '';

  // Determine which variant to apply
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary hover:bg-primary-600 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-white hover:bg-gray-200 text-dark';
      break;
    case 'danger':
      variantClasses =
        'bg-red hover:bg-red-600 text-white w-full flex justify-between';
      break;
    default:
      variantClasses = 'bg-blue-500 hover:bg-blue-600 text-white';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
      {variant === 'danger' ? <RightArrowIcon /> : ''}
    </button>
  );
};

export default Button;
