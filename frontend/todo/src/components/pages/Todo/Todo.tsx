import { Sidebar, TodoList } from '@/components/organisms';
import React from 'react';
import * as SC from './style';

const Todo = () => {
  return (
    <SC.Container>
      <Sidebar />
      <TodoList />
    </SC.Container>
  );
};

export default Todo;
