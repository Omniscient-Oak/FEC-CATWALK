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

//styles
import Styles from './Styles/Styles.jsx';

const axios = require('axios');

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63609
// const queryString = window.location.search;

function Overview() {
  const [product, setProduct] = useState('empty');
  const [productId, setProductId] = useState(63612);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  useEffect(() => {
    axios
      .get('/products/allinfo/', { params: { product_id: productId } })
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
      <WrapperStyled>
        <ImageWrapperStyled>
          <Images
            productStyles={product.styles}
            currentImage={product.styles}
            currentStyleIndex={currentStyleIndex}
          />
        </ImageWrapperStyled>
        <Category category={product.category} />
        <ProductName name={product.name} />
        <Styles
          productStyles={product.styles}
          setCurrentStyleIndex={setCurrentStyleIndex}
        />
        <Price productStyles={product.styles} />
        <StarRating />
        <ProductDescriptionStyled>
          <ProductDescription
            description={product.description}
            slogan={product.slogan}
          />
        </ProductDescriptionStyled>
      </WrapperStyled>
    </div>
  );
}

export default Overview;

const ImageWrapperStyled = styled.div`
  grid-row-start: 1;
  grid-row-end: 6;
`;

const ProductDescriptionStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 6.2fr 0.75fr;
  grid-column-start: 1;
  grid-row-start: 7;
`;

const WrapperStyled = styled.section`
  padding: 2em 5em 5em 5em;
  background: grey;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 0.05fr 1fr;
`;
