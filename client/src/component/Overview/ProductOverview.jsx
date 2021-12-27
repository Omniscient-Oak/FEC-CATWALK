import React from 'react';
import styled from 'styled-components';
import Image from './Image.jsx';

const ProductOverview = (props) => {
  return (
    <div>
      <Wrapper>
        <Image />
        <Category>{props.category}</Category>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Wrapper>
    </div>
  );
};

export default ProductOverview;

// Create a Title component that'll render an <h1> tag with some styles
const Category = styled.div`
  font-size: 1.25em;
  text-align: left;
  grid-column: 2;
`;

const Name = styled.div`
  font-size: 1.5em;
  text-align: left;
  grid-column: 2;
`;

const Description = styled.div`
  font-size: 1em;
  text-align: left;
  grid-column: 2;
`;

// const Image = styled.div`
//   grid-column: 1;
// `;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2em;
  display: inline-grid;
  grid-template-columns: 70% 30%;
`;
