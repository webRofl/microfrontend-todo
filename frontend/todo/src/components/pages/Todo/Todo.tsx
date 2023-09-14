import { Sidebar, TodoList } from '@/components/organisms';
import { TodoTemplate } from '@/components/templates';
import React from 'react';

const Todo = () => {
  return (
    <TodoTemplate>
      <Sidebar />
      <TodoList />
    </TodoTemplate>
  );
};

export default Todo;
