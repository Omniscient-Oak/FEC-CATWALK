import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

// context
import ProductContext from './ProductContext';

const axios = require('axios');

const ContentPreview = () => {
  const productContext = useContext(ProductContext);
  const [product, setProduct] = useState(63613);
  const [photos, setPhotos] = useState([]);
  const colors = [
    'crimson',
    'firebrick',
    'indianred',
    'lightsalmon',
    'mediumvioletred',
  ];

  const generateColors = (array) =>
    array[Math.floor(Math.random() * colors.length - 1)];

  useEffect(() => {
    axios
      .get('/products/allinfo/', {
        params: { product_id: product },
      })
      .then((response) => {
        // setPhotos(response.data.styles);
        const images = [];
        if (photos.length > 0) {
          photos.forEach((url) => images.push(url));
        }
        response.data.styles.forEach((element) => {
          element.photos.forEach((photo) => {
            images.push(photo.thumbnail_url);
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
      <Text>hello world! welcome to our shop!</Text>
      <ImageWrapper>
        {photos.map((url) => (
          <HomepageBorder>
            <HomepageImages url={url} color={generateColors(colors)} />
          </HomepageBorder>
        ))}
      </ImageWrapper>
      <ButtonAlignment>
        <LoadMoreImagesButton onClick={() => setProduct(product + 1)}>
          load more images
        </LoadMoreImagesButton>
      </ButtonAlignment>
    </PreviewWrapper>
  );
};

export default ContentPreview;

const PreviewWrapper = styled.span``;
const ImageWrapper = styled.div`
  height: 75.5%;
  overflow: auto;
`;
const HomepageBorder = styled.span`
  &:hover {
  }
`;
const HomepageImages = styled.img`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  margin: 20px;
  padding: 5px;
  background-size: cover;
  width: 150;
  height: 150;
  border-radius: 75%;
  border-style: solid;
  border-width: 5px;
  opacity: 80%;
  border-color: ${(props) => props.color};
  background-color: #0000ff;
  transition: transform 2s;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 100%;
    transform: rotate(360deg);
  }
`;

const Text = styled.div`
  font-size: 75px;
  text-align: center;
`;

const LoadMoreImagesButton = styled.button`
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  width: 500px;
  height: 50px;
  opacity: 90%;
  border-radius: 15px;
  background: crimson;
  font-size: 30px;
  color: white;
  font-family: Verdana;
  border: white;
  margin: 15px 0px 10px 0px;
  &:hover {
    background-color: crimson;
    cursor: pointer;
  }
  justify-self: center;
`;

const ButtonAlignment = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #11ffee00;
`;
