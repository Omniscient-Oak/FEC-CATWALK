import React from 'react';
import styled from 'styled-components';

const ProductDescription = (props) => {
  if (props.description === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <Wrapper>
        <SloganStyled>{props.slogan}</SloganStyled>
        <DescriptionStyled>{props.description}</DescriptionStyled>
      </Wrapper>
    );
  }
};

export default ProductDescription;

const DescriptionStyled = styled.div`
  font-size: 20px;
  font-type: bold;
`;

const SloganStyled = styled.div`
  font-size: 30px;
`;

const Wrapper = styled.div`
  grid-column-start: 2;
`;
