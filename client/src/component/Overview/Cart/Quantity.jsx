import React from 'react';

const styleSelector = {
  margin: '0px 10px 0px 0px',
  background: '#fff',
  border: '1px solid #cfcfcf',
  color: '#000',
  cursor: 'pointer',
};

const Quantity = ({ currentQuantity, selectedSize, changeQuantity }) => {
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
      <select style={styleSelector}>
        <option>-</option>
      </select>
    );
  }
  return (
    <select
      style={styleSelector}
      onChange={(event) => changeQuantity(event.target.value)}
    >
      {quantityOptions.map((number) => (
        <option>{number}</option>
      ))}
    </select>
  );
};

export default Quantity;
