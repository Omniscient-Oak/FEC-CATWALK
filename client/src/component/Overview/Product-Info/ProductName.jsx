import React from 'react';
import styled from 'styled-components';

const ProductName = ({ name }) => <ProductNameStyled>{name}</ProductNameStyled>;

export default ProductName;

const ProductNameStyled = styled.div`
  font-size: 40px;
`;
