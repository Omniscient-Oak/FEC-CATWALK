import React from 'react';
import styled from 'styled-components';
import Image from './Image.jsx';

const ProductOverview = (props) => {
  return (
    <div>
      <Wrapper>
        <Image2 src='thumbnail.png' />
        <Category>{props.product.category}</Category>
        <Name>{props.product.name}</Name>
        <Description>{props.product.description}</Description>
      </Wrapper>
    </div>
  );
};

export default ProductOverview;

// Create a Title component that'll render an <h1> tag with some styles
const Category = styled.div`
  font-size: 1.25em;
  grid-column: 3;
`;

const Name = styled.div`
  font-size: 1.5em;
  grid-column: 3;
`;

const Description = styled.div`
  font-size: 1em;
  grid-column: 2;
  grid-row: 5;
`;

const Image2 = styled.img`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  display: inline-grid;
  grid-template-columns: 20% 65% 15%;
  grid-template-rows: 3% 5% 80% 2% 10%;
`;
