import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SearchIcon from '@/assets/icons/search.svg';
import { Button, Divider, Input } from 'antd';

export const Container = styled.aside`
  width: 25vw;
  height: 100vh;
  border-right: 1px solid silver;
  padding: 1rem;
  background-color: #212122;
  position: relative;
`;

export const SearchInput = styled(Input)`
  height: 2.8rem;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: #353536;
  box-shadow: none;
  font-size: 1.5rem;
  color: #bcbcbc;

  svg {
    fill: #e1e1e2;
  }

  input {
    background: #353536;
    color: #bcbcbc;
    margin-left: 0.3rem;
  }
`;

export const SearchPrefix = styled(SearchIcon)`
  width: 24px;
  height: 24px;
`;

export const CustomDivider = styled(Divider)`
  width: calc(100% + 2rem);
  background-color: #353536;
  margin-left: -1rem;
  height: 2px;
`;

export const AddButton = styled(Button)`
  position: absolute;
  bottom: 1.5rem;
  background-color: transparent;
  color: #bcbcbc;
  width: 100%;
  margin-left: -1rem;
  border: none;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  border-radius: 0;
  display: flex;
  align-items: center;
`;

export const FloatingDivider = styled(Divider)`
  position: absolute;
  bottom: 3rem;
  background-color: #353536;
  margin-left: -1rem;
  height: 2px;
`;

export const Plus = styled.span`
  margin-right: 1rem;
  font-size: 3rem;
  font-weight: 400;
  color: white;
`;
