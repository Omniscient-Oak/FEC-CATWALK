import React, { useEffect } from 'react';
import styled from 'styled-components';
import Quantity from './Quantity.jsx';
import AddToCart from './AddToCart.jsx';

const styleSelector = {
  color: 'blue',
};

const SizeDropdown = ({
  skus,
  changeSize,
  changeQuantity,
  addSkuNumber,
  selectedSize,
  currentQuantity,
  sku,
}) => {
  const currentStock = {};
  const sizes = [];

  useEffect(() => {
    if (currentStock[selectedSize] !== undefined) {
      addSkuNumber(currentStock[selectedSize].skus);
      changeQuantity(currentStock[selectedSize].quantity);
    }
  }, [selectedSize]);

  for (const key in skus) {
    currentStock[skus[key].size] = {
      quantity: skus[key].quantity,
      skus: key,
    };
    sizes.push(skus[key].size);
  }

  return (
    <div>
      <select
        style={styleSelector}
        onChange={(event) => changeSize(event.target.value)}
      >
        <option>{selectedSize}</option>
        {sizes.map((size) => (
          <option>{size}</option>
        ))}
      </select>
      <Quantity
        currentQuantity={currentQuantity}
        selectedSize={selectedSize}
        changeQuantity={changeQuantity}
      />
      <div>
        <AddToCart
          selectedSize={selectedSize}
          currentQuantity={currentQuantity}
          sku={sku}
        />
      </div>
    </div>
  );
};

export default SizeDropdown;
