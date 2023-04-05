import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; // Define button variants
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
  const baseClasses = 'rounded-lg py-2 px-4 font-bold';
  let variantClasses = '';

  // Determine which variant to apply
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary hover:bg-primary-600 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-500 hover:bg-gray-600 text-white';
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
    </button>
  );
};

export default Button;
