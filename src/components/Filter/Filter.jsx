import React from 'react';
import { FilterWrap } from './Filter.styled';

export const Filter = ({onChangeInput}) => {
  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" name='filter' onChange={e => onChangeInput(e.target)} />
    </FilterWrap>
  );
};
