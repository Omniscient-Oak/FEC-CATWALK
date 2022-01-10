import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductContext from './ProductContext';
import Overview from './Overview/Overview';
import List from './qa/List';
import RelatedItemsMenu from './relateditems/RelatedItemsMenu';
import { getProductAllInfo } from '../serverCalls'

const App = () => {
  const params = useParams();
  const [productId, setProductId] = useState(params.productId);
  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
      getProductAllInfo(productId)
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);
  return (
    <StyledApp>
      <ProductContext.Provider value={{ productId, setProductId, productInfo }}>
        <Overview />
        <RelatedItemsMenu />
        <List />
      </ProductContext.Provider>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.section`
  font-family: Verdana;
`;
