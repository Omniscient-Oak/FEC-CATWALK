import React, { useEffect } from 'react';
import Quantity from './Quantity.jsx';
import AddToCart from './AddToCart.jsx';

const styleSelector = {
  margin: '0px 10px 0px 0px',
  background: '#fff',
  border: '1px solid #cfcfcf',
  color: '#000',
  cursor: 'pointer',
};

const styleOption = {
  color: '#000000',
  padding: '0 10px',
  'font-size': '14px',
  'line-height': '25',
  'letter-spacing': '0.5px',
  'vertical-align': 'middle',
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
        <option>Select Size</option>
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
