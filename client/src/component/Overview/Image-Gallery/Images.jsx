import React from 'react';
import styled from 'styled-components';

const Images = (props) => {
  // needs to render based off of which style is being used
  const count = 1;
  if (props.product === undefined) {
    return <div>loading...</div>;
  } else {
    {
      console.log(props.product);
    }
    return (
      <GridAssignment>
        <MainImage src={props.product[0].photos[0].thumbnail_url} />
        {props.product[0].photos.slice(1).map((photo) => {
          return <Image src={photo.thumbnail_url} />;
        })}
      </GridAssignment>
    );
  }
};

export default Images;

const Image = styled.img`
  height: 75px;
  grid-column-start: 1;
  padding: 1em;
`;

const MainImage = styled.img`
  grid-row-start: 1;
  grid-row-end: 7;
  grid-column-start: 2;
  align-self: center;
`;

const Wrapper = styled.div`
  padding: 5em;
  background: papayawhip;
`;

const GridAssignment = styled.section`
  display: grid;
  background: blue;
  grid-template-columns: 2fr 4fr 4fr;
  justify-items: center;
`;
