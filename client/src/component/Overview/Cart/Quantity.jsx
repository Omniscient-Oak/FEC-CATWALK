import React from 'react';

const Quantity = ({ currentQuantity, selectedSize }) => {
  const quantityOptions = [];

  if (currentQuantity > 0 && currentQuantity >= 15) {
    for (let x = 1; x < 16; x += 1) {
      quantityOptions.push(x);
    }
  } else {
    for (let x = 1; x < currentQuantity + 1; x += 1) {
      quantityOptions.push(x);
    }
  }

  if (currentQuantity === '-' || selectedSize === 'Select Size') {
    return (
      <select>
        <option>-</option>
      </select>
    );
  }
  return (
    <select>
      {quantityOptions.map((number) => (
        <option>{number}</option>
      ))}
    </select>
  );
};

export default Quantity;
