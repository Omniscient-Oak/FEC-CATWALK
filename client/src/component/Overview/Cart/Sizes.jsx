import React from 'react';

const Sizes = (props) => {
  return (
    <option value={props.currentStock.size}>{props.currentStock.size}</option>
  );
};

export default Sizes;
