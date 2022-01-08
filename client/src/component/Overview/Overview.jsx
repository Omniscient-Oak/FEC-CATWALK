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

const Overview = () => {
  const productContext = useContext(ProductContext);
  const [product, setProduct] = useState([]);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [mainImage, setMainImage] = useState(0);
  const [selectedSize, changeSize] = useState('Select Size');
  const [currentQuantity, changeQuantity] = useState('-');
  const [sku, addSkuNumber] = useState(0);

  useEffect(() => {
    setProduct(productContext.productInfo);

    return function cleanup() {
      setCurrentStyleIndex(0);
      setMainImage(0);
      changeSize('Select Size');
      changeQuantity('-');
      addSkuNumber(0);
    };
  }, [productContext.productInfo]);

  return (
    <div className='overview'>
      <WrapperStyled>
        <ProductCategoryWrapper>
          {product.category && <Category category={product.category} />}
        </ProductCategoryWrapper>
        {product.name && <ProductName name={product.name} />}

        <ImageWrapperStyled>
          {product.styles && (
            <CurrentImage
              productStyles={product.styles}
              currentStyleIndex={currentStyleIndex}
              mainImage={mainImage}
            />
          )}
          {product.styles && (
            <Sidebar
              images={product.styles[currentStyleIndex].photos}
              setMainImage={setMainImage}
            />
          )}
        </ImageWrapperStyled>
        <ProductDescriptionWrapper>
          {product.styles && <ProductDescription currentProduct={product} />}
        </ProductDescriptionWrapper>

        <ProductStylesWrapper>
          {product.styles && (
            <Styles
              productStyles={product.styles}
              setCurrentStyleIndex={setCurrentStyleIndex}
              currentStyleIndex={currentStyleIndex}
            />
          )}
        </ProductStylesWrapper>

        <SelectedStyleWrapper>
          {product.styles && (
            <SelectedStyle
              currentStyleName={product.styles[currentStyleIndex].name}
            />
          )}
        </SelectedStyleWrapper>

        <PriceStyledWrapper>
          {product.styles && (
            <Price currentStyle={product.styles[currentStyleIndex]} />
          )}
        </PriceStyledWrapper>

        <SizeDropdownWrapper>
          {product.styles && (
            <SizeDropdown
              skus={product.styles[currentStyleIndex].skus}
              changeSize={changeSize}
              changeQuantity={changeQuantity}
              addSkuNumber={addSkuNumber}
              selectedSize={selectedSize}
              currentQuantity={currentQuantity}
              sku={sku}
            />
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
  height: 650px;
  object-fit: cover;
  margin: 0px 10px 0px 0px;
`;

const WrapperStyled = styled.section`
  padding: 0.5% 7% 5% 13%;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 10px;
  font-family: sans-serif;
`;

const PriceStyledWrapper = styled.section`
  grid-row-start: 2;
  margin: 10px 0px 0px 0px;
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

const ProductDescriptionWrapper = styled.section`
  grid-row-start: 5;
  width: 300px;
`;

const ProductCategoryWrapper = styled.section`
  align-self: end;
  grid-row-start: 3;
  font-size: 12px;
  font-style: italic;
  margin: 10px 0px 0px 0px;
`;
