import React from 'react';
// you would need to pass down the specific style to know what the price is
// you also need to check the sale price
const Price = (props) => {
  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    {
      console.log(props.productStyles[0]);
    }
    return <div>insert price here</div>;
    // return <div>{props.productStyles}</div>;
  }
};

export default Price;
