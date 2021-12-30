import React from 'react';
import styled from 'styled-components';

const Thumbnails = (props) => {
  if (props.style === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <ThumbnailStyled
        onClick={() => props.setCurrentStyleIndex(props.index)}
        src={props.style.photos[0].thumbnail_url}
      />
    );
  }
};

export default Thumbnails;

const ThumbnailStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
