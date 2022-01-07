import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductContext from './ProductContext';
import Overview from './Overview/Overview.jsx';
import List from './qa/List.jsx';
import ContentPreview from './ContentPreview.jsx';
import RelatedItemsMenu from './relateditems/RelatedItemsMenu.jsx';

const App = () => {
  const params = useParams();
  const [productId, setProductId] = useState(params.productId);
  useEffect(() => {}, []);
  return (
    <StyledApp>
      <ProductContext.Provider value={{ productId, setProductId }}>
        <Overview />
        <RelatedItemsMenu />
        <List />
        <ContentPreview />
      </ProductContext.Provider>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.section`
  font-family: Verdana;
`;
