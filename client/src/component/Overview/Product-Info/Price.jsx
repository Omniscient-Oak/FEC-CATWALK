import React from 'react';
import styled from 'styled-components';

// you would need to pass down the specific style to know what the price is
// you also need to check the sale price
const Price = (props) => {
  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    // console.log(props.productStyles[props.currentStyleIndex].original_price);
    if (props.productStyles[props.currentStyleIndex].sale_price === null) {
      return (
        <div>
          ${props.productStyles[props.currentStyleIndex].original_price}
        </div>
      );
    } else {
      return (
        <div>
          <OriginalPrice>
            Original: $
            {props.productStyles[props.currentStyleIndex].original_price}{' '}
          </OriginalPrice>
          <SalePrice>
            Sale: ${props.productStyles[props.currentStyleIndex].sale_price}
          </SalePrice>
        </div>
      );
    }
    return <div>insert price here</div>;

    // return <div>{props.productStyles}</div>;
  }
};

export default Price;

const OriginalPrice = styled.div`
  text-decoration-line: line-through;
`;

const SalePrice = styled.div`
  color: red;
`;
