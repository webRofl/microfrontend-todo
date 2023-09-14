import { type TaskTypes } from '@/types';
import React, { type FC, useState } from 'react';
import * as SC from './style';

const Task: FC<TaskTypes.Task> = ({ id, isCompleted, title }) => {
  const [isCheck, setIsCheck] = useState(isCompleted);

  const checkboxHandler = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    <SC.Container>
      <input type="checkbox" checked={isCheck} onChange={checkboxHandler} />
      <span>{title}</span>
    </SC.Container>
  );
};

export default Task;
