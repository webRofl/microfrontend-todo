import React, { type FC, type PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
