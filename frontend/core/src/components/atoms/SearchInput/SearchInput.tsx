import React, { type FC } from 'react';
import * as SC from './style';

type Props = Parameters<typeof SC.SearchInput>;

const SearchInput: FC<Props> = (props) => {
  return <SC.SearchInput {...props} />;
};

export default SearchInput;
