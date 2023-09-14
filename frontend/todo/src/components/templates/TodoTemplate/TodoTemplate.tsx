import React, { type FC, type PropsWithChildren } from 'react';
import * as SC from './style';

const TodoTemplate: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <SC.Container>{children}</SC.Container>;
};

export default TodoTemplate;
