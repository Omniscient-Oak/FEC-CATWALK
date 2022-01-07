import React from 'react';
import styled from 'styled-components';

const ProductDescription = ({ currentProduct }) => (
  <div>
    <SloganStyled>{currentProduct.slogan}</SloganStyled>
    <DescriptionStyled>{currentProduct.description}</DescriptionStyled>
  </div>
);

export default ProductDescription;

const DescriptionStyled = styled.div`
  font-size: 12px;
`;

const SloganStyled = styled.div`
  font-size: 20px;

  font-weight: bold;
  font-variant: all-petite-caps;
  margin: 5px 0px 5px 0px;
`;
