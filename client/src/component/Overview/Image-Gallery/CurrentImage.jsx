import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentImage = (props) => {
  // needs to render based off of which style is being used
  // want to render the image based off of the click url
  const [currentImage, setImage] = useState('empty');

  useEffect(() => {
    if (props.productStyles === undefined) {
      return <div>loading...</div>;
    }
    setImage(
      props.productStyles[props.currentStyleIndex].photos[props.mainImage].url
    ); // this 0 needs to use context to use style
  }, [props]);

  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  }
  return (
    <MainImageStyled
      onClick={() => console.log('hello world!')}
      src={currentImage}
    />
  );
};

export default CurrentImage;

const MainImageStyled = styled.img`
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: center;
  object-fit: cover;
  justify-self: left;
  height: 100%;
  width: 100%;
`;
