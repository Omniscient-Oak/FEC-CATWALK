import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

// product-info
import Category from './Product-Info/Category.jsx';
import ProductName from './Product-Info/ProductName.jsx';
import Price from './Product-Info/Price.jsx';
import ProductDescription from './Product-Info/ProductDescription.jsx';

// images
import CurrentImage from './Image-Gallery/CurrentImage.jsx';
import Sidebar from './Image-Gallery/Sidebar.jsx';

// styles
import Styles from './Styles/Styles.jsx';
import SelectedStyle from './Styles/SelectedStyle.jsx';

// cart
import SizeDropdown from './Cart/SizeDropdown.jsx';

// context
import ProductContext from '../ProductContext';

const axios = require('axios');

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/63609
// const queryString = window.location.search;

const Overview = () => {
  const productContext = useContext(ProductContext);
  const [product, setProduct] = useState([]);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    axios
      .get('/products/allinfo/', {
        params: { product_id: productContext.productId },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [productContext.productId]);

  return (
    <div className='overview'>
      <WrapperStyled>
        <ImageWrapperStyled>
          <CurrentImage
            productStyles={product.styles}
            currentStyleIndex={currentStyleIndex}
            mainImage={mainImage}
          />
          <Sidebar
            images={product.styles}
            currentStyleIndex={currentStyleIndex}
            setMainImage={setMainImage}
          />
          {product.styles && <ProductDescription currentProduct={product} />}
        </ImageWrapperStyled>

        <ProductStylesWrapper>
          <Styles
            productStyles={product.styles}
            setCurrentStyleIndex={setCurrentStyleIndex}
            currentStyleIndex={currentStyleIndex}
          />
        </ProductStylesWrapper>

        <SelectedStyleWrapper>
          <SelectedStyle
            productStyles={product.styles}
            currentStyleIndex={currentStyleIndex}
          />
        </SelectedStyleWrapper>
        {product.category && <Category category={product.category} />}
        <ProductName name={product.name} />

        <PriceStyledWrapper>
          {product.styles && (
            <Price currentStyle={product.styles[currentStyleIndex]} />
          )}
        </PriceStyledWrapper>

        <SizeDropdownWrapper>
          {product.styles && (
            <SizeDropdown skus={product.styles[currentStyleIndex].skus} />
          )}
        </SizeDropdownWrapper>
      </WrapperStyled>
    </div>
  );
};

export default Overview;

const ImageWrapperStyled = styled.section`
  grid-template-columns: 3fr 7fr;
  grid-column-start: 1;
  grid-row: 1 / span 10;
  display: grid;
  height: 500px;
  width: 750px;
`;

const WrapperStyled = styled.section`
  padding: 2% 15% 2% 15%;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 10px;
  grid-template-rows: 0.05fr 0.1fr 0.05fr 0.1fr 0.15fr 0.05fr 1fr 1fr 1fr 0.2fr;
  font-family: Helvetica;
`;

const PriceStyledWrapper = styled.section`
  display: grid;
  grid-row-start: 5;
`;

const ProductStylesWrapper = styled.section`
  display: grid;
  grid-row-start: 6;
`;

const SelectedStyleWrapper = styled.section`
  grid-row-start: 4;
`;

const SizeDropdownWrapper = styled.section`
  grid-row-start: 7;
`;
