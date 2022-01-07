import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const AddToCart = ({ selectedSize, currentQuantity, sku }) => (
  <StyledAddToCartButton
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
  </StyledAddToCartButton>
);

export default AddToCart;

const StyledAddToCartButton = styled.button`
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  width: 250px;
  height: 50px;
  background: #dc143c;
  opacity: 90%;
  border-radius: 15px;
  background: crimson;
  font-size: large;
  color: white;
  font-family: Verdana;
  border: white;
  margin: 10px 0px 10px 0px;
  &:hover {
    background-color: crimson;
    cursor: pointer;
  }
`;
