import React from 'react';

const ProductOverview = (props) => {
  return (
    <div className='product-overview'>
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
      <h3>{props.description}</h3>
    </div>
  );
};

export default ProductOverview;
