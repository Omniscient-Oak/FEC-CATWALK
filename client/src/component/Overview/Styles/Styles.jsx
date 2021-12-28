import React from 'react';
import styled from 'styled-components';
import Thumbnails from './Thumbnails.jsx';

const Styles = (props) => {
  var index = 0;
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
`;
