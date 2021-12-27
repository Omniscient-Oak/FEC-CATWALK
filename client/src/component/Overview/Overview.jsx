import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';

const axios = require('axios');
import key from '/config.js';

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63609

function Overview() {
  const [product, setProduct] = useState('empty');

  useEffect(() => {
    axios
      .get(
        'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63609',
        {
          headers: {
            Authorization: `${key}`,
          },
        }
      )
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  return (
    <div className='overview'>
      <ProductOverview
        name={product.name}
        category={product.category}
        description={product.description}
      />
      <Price price={product.default_price} />
    </div>
  );
}

export default Overview;
