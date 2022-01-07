import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentImage = ({ productStyles, currentStyleIndex, mainImage }) => {
  const [currentImage, setImage] = useState(0);

  useEffect(() => {
    if (mainImage === undefined) {
      setImage(productStyles[currentStyleIndex].photos[0].url);
    } else {
      setImage(productStyles[currentStyleIndex].photos[mainImage].url);
    }
  }, [productStyles, currentStyleIndex, mainImage]);

  return <MainImageStyled src={currentImage} />;
};

export default CurrentImage;

const MainImageStyled = styled.img`
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: center;
  object-fit: cover;
  justify-self: left;
  height: 700px;
  width: 490px;
`;
