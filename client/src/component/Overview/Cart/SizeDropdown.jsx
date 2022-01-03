import React, { useState } from 'react';
import Sizes from './Sizes.jsx';
import Quantity from './Quantity.jsx';
import AddToCart from './AddToCart.jsx';
import styled from 'styled-components';

const SizeDropdown = (props) => {
  const [selectedSize, changeSize] = useState('Size');
  const [currentQuantity, changeQuantity] = useState('-');

  const currentStock = {};
  const sizes = [];

  for (var key in props.skus) {
    currentStock[props.skus[key].size] = {
      quantity: props.skus[key].quantity,
      skus: props.skus[key],
    };
    sizes.push(props.skus[key].size);
  }

  return (
    <div>
      <select
        onChange={(event) => (
          changeSize(event.target.value),
          changeQuantity(currentStock[event.target.value].quantity)
        )}
      >
        <option>Select Size</option>
        {sizes.map((size) => {
          return <option>{size}</option>;
        })}
      </select>
      <Quantity currentQuantity={currentQuantity} selectedSize={selectedSize} />
      <div>
        <AddToCart />
      </div>
    </div>
  );
};

export default SizeDropdown;
