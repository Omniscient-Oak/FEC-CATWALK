import React from 'react';
import styled from 'styled-components';

const Category = (props) => {
  if (props.category === undefined) {
    return <div>loading...</div>;
  } else {
    return <ProductCategory>{props.category}</ProductCategory>;
  }
};

export default Category;

const ProductCategory = styled.div`
  font-size: 20px;
  display: grid;
  align-self: end;
`;
