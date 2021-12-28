import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Images = (props) => {
  // needs to render based off of which style is being used
  // want to render the image based off of the click url
  const [currentImage, setImage] = useState('empty');

  useEffect(() => {
    if (props.productStyles === undefined) {
      setImage(<div>loading</div>);
    } else {
      setImage(props.productStyles[0].photos[0].url);
    }
  }, []);

  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <GridAssignmentStyled>
        <MainImageStyled src={currentImage} />
        {props.productStyles[0].photos.map((photo) => {
          return (
            <ImageStyled
              onClick={(event) => setImage(photo.url)}
              src={photo.thumbnail_url}
            />
          );
        })}
      </GridAssignmentStyled>
    );
  }
};

export default Images;

const ImageStyled = styled.img`
  grid-column-start: 2;
  padding: 0.5em;
  min-height: 30%;
  min-width: 30%;
  max-width: 30%;
  align-self: center;
  justify-self: right;
  &:hover {
    background-color: palevioletred;
    color: white;
    opacity: 0.95;
  }
`;

const MainImageStyled = styled.img`
  grid-row-start: 1;
  grid-row-end: 8;
  grid-column-start: 3;
  align-self: top;
  max-width: 85%;
  min-height: 85%;
  min-width: 85%;
  max-width: 85%;
  object-fit: cover;
  align-self: center;
  justify-self: right;
`;

const GridAssignmentStyled = styled.section`
  display: grid;
  // background: blue;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 0.25fr 2.5fr 6fr 0.25fr;
  justify-items: center;
`;
