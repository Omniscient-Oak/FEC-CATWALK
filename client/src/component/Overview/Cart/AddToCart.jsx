import React from 'react';
import styled from 'styled-components';
import { postCart } from '../../../serverCalls';

const AddToCart = ({ selectedSize, currentQuantity, sku }) => (
  <ButtonAlign>
    <StyledAddToCartButton
      onClick={() =>
        postCart({
          sku_id: sku,
          size: selectedSize,
          quantity: currentQuantity,
        })
        .then(() => console.log(selectedSize, currentQuantity, sku))}
    >
      Add to Cart
    </StyledAddToCartButton>
  </ButtonAlign>
);

export default AddToCart;

const StyledAddToCartButton = styled.button`
  padding: 10px;
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  width: 150px;
  height: 50px;
  background: #dc143c;
  opacity: 85%;
  border-radius: 15px;
  background: crimson;
  font-size: 14px;
  color: white;
  font-family: Verdana;
  border: white;
  margin: 10px 0px 10px 0px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
    opacity: 100%;
  }
`;

const ButtonAlign = styled.div`
  display: grid;
  margin: 10px;
`;
