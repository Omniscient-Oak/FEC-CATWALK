import React from 'react';
import styled from 'styled-components';

const SelectedStyle = ({ currentStyleName }) => {
  return <StyledSelector>Selected Style > {currentStyleName}</StyledSelector>;
};
export default SelectedStyle;

const StyledSelector = styled.div`
  font-size: 12px;
  margin: 5px 0px 5px 0px;
  font-style: italic;
`;
