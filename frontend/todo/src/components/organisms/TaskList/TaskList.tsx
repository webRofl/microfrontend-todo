import { Task } from '@/components/molecules';
import { type TaskTypes } from '@/types';
import React, { type FC } from 'react';
import * as SC from './style';

interface Props {
  tasks: TaskTypes.Task[];
}

const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <SC.Container>
      {tasks.map((task) => {
        return <Task {...task} key={task.id} />;
      })}
    </SC.Container>
  );
};

export default TaskList;
