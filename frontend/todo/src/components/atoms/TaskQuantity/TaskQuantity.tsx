import React, { type FC } from 'react';
import * as SC from './style';

interface Props {
  name: string;
  quantity: number;
}

const TaskQuantity: FC<Props> = ({ name, quantity }) => {
  return (
    <SC.Container>
      <span>{name}</span>
      <span>{quantity}</span>
    </SC.Container>
  );
};

export default TaskQuantity;
