import React from 'react';
import styled from 'styled-components';

const Category = ({ category }) => (
  <ProductCategory>{category}</ProductCategory>
);

export default Category;

const ProductCategory = styled.div`
  font-size: 20px;
  display: grid;
  align-self: end;
`;
