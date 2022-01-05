import React from 'react';

const axios = require('axios');

const AddToCart = ({ selectedSize, currentQuantity, sku }) => (
  <button
    onClick={() =>
      axios
        .post('/cart', {
          sku_id: sku,
          size: selectedSize,
          quantity: currentQuantity,
        })
        .then(() => console.log(selectedSize, currentQuantity, sku))
    }
  >
    Add to Cart
  </button>
);

export default AddToCart;
