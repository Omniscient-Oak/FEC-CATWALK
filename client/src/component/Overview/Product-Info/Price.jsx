import React from 'react';
import styled from 'styled-components';

const Price = ({ currentStyle }) => {
  if (currentStyle.sale_price === null) {
    return <div>${currentStyle.original_price}</div>;
  }
  return (
    <div>
      <OriginalPrice>${currentStyle.original_price}</OriginalPrice>
      <SalePrice>${currentStyle.sale_price}</SalePrice>
    </div>
  );
};

export default Price;

const OriginalPrice = styled.div`
  text-decoration-line: line-through;
`;

const SalePrice = styled.div`
  color: red;
`;
