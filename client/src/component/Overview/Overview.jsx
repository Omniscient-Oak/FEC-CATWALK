import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Image from './Image.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import SelectStyles from './SelectStyles.jsx';

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
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className='overview'>
      <ProductOverview product={product} />
      <Price product={product} />
      <SelectStyles styles={product.styles} />
    </div>
  );
}

export default Overview;
