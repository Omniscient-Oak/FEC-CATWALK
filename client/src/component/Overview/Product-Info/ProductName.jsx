import React from 'react';
import styled from 'styled-components';

const ProductName = ({ name }) => (
  <ProductNameStyled>{name.toUpperCase()}</ProductNameStyled>
);

export default ProductName;

const ProductNameStyled = styled.div`
  font-size: 50px;
  margin: 2px 0px 2px 0px;
`;
