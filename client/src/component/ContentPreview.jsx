import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

// context
import ProductContext from './ProductContext';

const axios = require('axios');

const ContentPreview = () => {
  const productContext = useContext(ProductContext);
  const [product, setProduct] = useState(63613);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('/products/allinfo/', {
        params: { product_id: product },
      })
      .then((response) => {
        // setPhotos(response.data.styles);
        const images = [];
        response.data.styles.forEach((element) => {
          element.photos.forEach((photo) => {
            images.push(photo.url);
          });
        });
        setPhotos(images);
      })
      .catch((err) => {
        throw err;
      });
    return function () {
      setPhotos([]);
    };
  }, [product]);

  return (
    <PreviewWrapper>
      <Text>hello world!</Text>
      <ImageWrapper>
        {photos.map((url) => (
          <HomepageImages url={url} />
        ))}
      </ImageWrapper>
      <button onClick={() => setProduct(product + 1)}>load more images</button>
    </PreviewWrapper>
  );
};

export default ContentPreview;

const PreviewWrapper = styled.span``;
const ImageWrapper = styled.div`
  height: 100%;
  overflow: scroll;
`;

const HomepageImages = styled.img`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  margin: 10px;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 75%;
  padding: 15px;
  &:hover {
    opacity: 0.75;
    color: red;
    background-color: palevioletred;
  }
`;

const Text = styled.div`
  font-size: 100px;
  text-align: center;
`;
