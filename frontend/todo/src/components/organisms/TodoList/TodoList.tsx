import React from 'react';
import { TaskList } from '@/components/organisms';
import { type TaskTypes } from '@/types';
import * as SC from './style';
import { SharedComponentHandler } from '@/hocs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SearchInput = React.lazy(async () => await import('core/SearchInput'));

const mock: TaskTypes.Task[] = [
  {
    id: 0,
    isCompleted: false,
    title: 'task 1',
  },
  {
    id: 1,
    isCompleted: true,
    title: 'task 2',
  },
  {
    id: 2,
    isCompleted: false,
    title: 'task 3',
  },
];

const TodoList = () => {
  return (
    <SC.Container>
      <SC.H1>To-Do</SC.H1>
      <SharedComponentHandler>
        <SearchInput placeholder="New Task" />
      </SharedComponentHandler>
      <TaskList tasks={mock} />
    </SC.Container>
  );
};

export default TodoList;
