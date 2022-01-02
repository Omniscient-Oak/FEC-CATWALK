import React from 'react';

const Quantity = (props) => {
  let quantityOptions = [];

  if (props.currentQuantity !== '-') {
    if (props.currentQuantity >= 15) {
      for (let x = 1; x < 16; x++) {
        quantityOptions.push(x);
      }
    } else {
      for (let x = 1; x < props.currentQuantity + 1; x++) {
        quantityOptions.push(x);
      }
    }
  }

  if (props.currentQuantity === '-') {
    return <select> </select>;
  } else {
    return (
      <select>
        {quantityOptions.map((number) => (
          <option>{number}</option>
        ))}
      </select>
    );
  }
};

export default Quantity;