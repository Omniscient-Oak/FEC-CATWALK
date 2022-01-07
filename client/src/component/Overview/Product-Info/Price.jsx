import React from 'react';
import styled from 'styled-components';

const Price = ({ currentStyle }) => {
  if (currentStyle.sale_price === null) {
    return <div>Price: ${currentStyle.original_price}</div>;
  }
  return (
    <div>
      Price: $<OriginalPrice>{currentStyle.original_price}</OriginalPrice>
      <SalePrice>Sale: ${currentStyle.sale_price}</SalePrice>
    </div>
  );
};

export default Price;

const OriginalPrice = styled.span`
  text-decoration-line: line-through;
  margin: 0px 10px 0px 0px;
`;

const SalePrice = styled.span`
  color: red;
`;
