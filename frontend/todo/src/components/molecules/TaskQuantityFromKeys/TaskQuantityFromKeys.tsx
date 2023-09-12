import { TaskQuantity } from '@/components/atoms';
import React, { type FC } from 'react';

interface Props {
  data: Record<string, number>;
}

const TaskQuantityFromKeys: FC<Props> = ({ data }) => {
  return Object.entries(data).map(([key, value], idx) => {
    return <TaskQuantity name={key} quantity={value} key={idx} />;
  });
};

export default TaskQuantityFromKeys;
