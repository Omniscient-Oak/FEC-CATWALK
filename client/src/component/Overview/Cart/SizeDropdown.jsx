import React, { useState } from 'react';
import Quantity from './Quantity.jsx';
import AddToCart from './AddToCart.jsx';

const SizeDropdown = ({ skus }) => {
  const [selectedSize, changeSize] = useState('Size');
  const [currentQuantity, changeQuantity] = useState('-');

  const currentStock = {};
  const sizes = [];

  for (const key in skus) {
    currentStock[skus[key].size] = {
      quantity: skus[key].quantity,
      skus: skus[key],
    };
    sizes.push(skus[key].size);
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
        {sizes.map((size) => (
          <option>{size}</option>
        ))}
      </select>
      <Quantity currentQuantity={currentQuantity} selectedSize={selectedSize} />
      <div>
        <AddToCart />
      </div>
    </div>
  );
};

export default SizeDropdown;
