import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';

const CurrentImage = (props) => {
  // needs to render based off of which style is being used
  // want to render the image based off of the click url
  const [currentImage, setImage] = useState('empty');

  useEffect(() => {
    if (props.productStyles === undefined) {
      return <div>loading...</div>;
    } else {
      setImage(
        props.productStyles[props.currentStyleIndex].photos[props.mainImage].url
      ); // this 0 needs to use context to use style
    }
  }, [props]);

  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <MainImageStyled
        onClick={() => console.log('hello world!')}
        src={currentImage}
      />
    );
  }
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

// const GridAssignmentStyled = styled.section`
//   display: grid;
//   // background: blue;
//   grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-template-columns: 0.25fr 2.5fr 6fr 0.25fr;
//   justify-items: center;
// `;
