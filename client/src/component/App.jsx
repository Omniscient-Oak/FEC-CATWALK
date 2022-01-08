import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import ProductContext from './ProductContext';
import Overview from './Overview/Overview.jsx';
import List from './qa/List.jsx';
import RelatedItemsMenu from './relateditems/RelatedItemsMenu.jsx';

const App = () => {
  const params = useParams();
  const [productId, setProductId] = useState(params.productId);
  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    axios
      .get('/products/allinfo/', {
        params: { product_id: productId },
      })
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
