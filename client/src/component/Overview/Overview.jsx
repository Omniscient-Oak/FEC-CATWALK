import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// product-info
import Category from './Product-Info/Category.jsx';
import ProductDescription from './Product-Info/ProductDescription.jsx';
import ProductName from './Product-Info/ProductName.jsx';
import ProductSlogan from './Product-Info/ProductSlogan.jsx';
import Price from './Product-Info/Price.jsx';
import StarRating from './Product-Info/StarRating.jsx';

//images
import Images from './Image-Gallery/Images.jsx';

const axios = require('axios');

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63609
// const queryString = window.location.search;

function Overview() {
  const [product, setProduct] = useState('empty');

  useEffect(() => {
    axios
      .get('/products/allinfo/', { params: { product_id: 63609 } })
      .then((response) => {
        setProduct(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className='overview'>
      <Wrapper>
        <Images product={product.styles} />
        <Category />
        <ProductDescription />
        <ProductName />
        <ProductSlogan />
        <Price />
        <StarRating />
      </Wrapper>
    </div>
  );
}

export default Overview;

const Wrapper = styled.section`
  padding: 5em;
  background: grey;
`;
