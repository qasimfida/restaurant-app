import React from 'react';

interface IProps {
  className: string;
}

const Input = (props: IProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={`${className} border-2 border-grey-500 placeholder-grey contrast-more:border-slate-400 contrast-more:placeholder-slate-500 w-full h-14 rounded-lg bg-dark`}
      {...rest}
    />
  );
};

export default Input;
