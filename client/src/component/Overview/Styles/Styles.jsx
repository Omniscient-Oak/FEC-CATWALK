import React from 'react';
import styled from 'styled-components';
import Thumbnails from './Thumbnails.jsx';

const Styles = (props) => {
  let index = 0;

  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <ThumbnailGrid>
        {props.productStyles.map((style) => {
          return (
            <Thumbnails
              style={style}
              index={index++}
              setCurrentStyleIndex={props.setCurrentStyleIndex}
              currentStyleIndex={props.currentStyleIndex}
            />
          );
        })}
      </ThumbnailGrid>
    );
  }
};

export default Styles;

const ButtonStyled = styled.button`
  background: blue;
`;

const ThumbnailGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1em 10em 1em 0em;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
