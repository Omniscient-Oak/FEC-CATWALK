import React from 'react';
import styled from 'styled-components';

const ProductDescription = ({ currentProduct }) => (
  <Wrapper>
    <SloganStyled>{currentProduct.slogan}</SloganStyled>
    <DescriptionStyled>{currentProduct.description}</DescriptionStyled>
  </Wrapper>
);

export default ProductDescription;

const DescriptionStyled = styled.div`
  font-size: 15px;
  font-type: bold;
`;

const SloganStyled = styled.div`
  font-size: 20px;
`;

const Wrapper = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
`;
