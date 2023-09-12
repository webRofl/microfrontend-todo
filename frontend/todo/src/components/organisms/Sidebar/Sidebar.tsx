import { TaskQuantityFromKeys } from '@/components/molecules';
import React from 'react';
import * as SC from './style';

const mockDataForDays: Record<string, number> = {
  today: 1,
  tomorrow: 1,
  'after tomorrow': 1,
  past: 1,
  all: 1,
};

const mockDataForHobbies: Record<string, number> = {
  'to-do': 8,
  hobby: 6,
  study: 2,
};

const Sidebar = () => {
  return (
    <SC.Container>
      <SC.SearchInput prefix={<SC.SearchPrefix />} placeholder="Search" />
      <TaskQuantityFromKeys data={mockDataForDays} />
      <SC.CustomDivider />
      <TaskQuantityFromKeys data={mockDataForHobbies} />
      <SC.FloatingDivider />
      <SC.AddButton>
        <SC.Plus>+</SC.Plus> Create new list
      </SC.AddButton>
    </SC.Container>
  );
};

export default Sidebar;
