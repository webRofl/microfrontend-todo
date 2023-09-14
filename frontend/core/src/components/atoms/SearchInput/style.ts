import { Input } from 'antd';
import styled from 'styled-components';

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
