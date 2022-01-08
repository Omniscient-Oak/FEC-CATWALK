import React from 'react';
import styled from 'styled-components';

const ProductDescription = ({ currentProduct }) => (
  <Paragraph>
    <div>
      <SloganStyled>{currentProduct.slogan}</SloganStyled>
      <DescriptionStyled>{currentProduct.description}</DescriptionStyled>
    </div>
  </Paragraph>
);

export default ProductDescription;

const DescriptionStyled = styled.div`
  font-size: 14px;
  background: white;
  padding: 5px;
`;

const SloganStyled = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-variant: all-petite-caps;

  padding: 10px 5px 0px 5px;
`;

const Paragraph = styled.div`
  padding: 5px;
`;
//
