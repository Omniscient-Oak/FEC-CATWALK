import React from 'react';
import styled from 'styled-components';

const ProductName = (props) => {
  if (props.name === undefined) {
    return <div>loading...</div>;
  }
  return <ProductNameStyled>{props.name}</ProductNameStyled>;
};

export default ProductName;

const ProductNameStyled = styled.div`
  font-size: 40px;
`;
