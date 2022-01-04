import React from 'react';
import styled from 'styled-components';
import Thumbnails from './Thumbnails.jsx';

const Styles = ({ productStyles, setCurrentStyleIndex, currentStyleIndex }) => {
  let index = 0;

  return (
    <div>
      <ThumbnailGrid>
        {productStyles.map((style) => (
          <Thumbnails
            style={style}
            index={index++}
            setCurrentStyleIndex={setCurrentStyleIndex}
            currentStyleIndex={currentStyleIndex}
          />
        ))}
      </ThumbnailGrid>
    </div>
  );
};

export default Styles;

const ThumbnailGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1em 10em 1em 0em;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
