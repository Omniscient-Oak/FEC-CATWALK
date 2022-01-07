import React from 'react';
import styled from 'styled-components';

const TinyImage = ({ photo, index, setMainImage }) => (
  <Wrapper>
    <ImageStyled
      onClick={() => setMainImage(index)}
      src={photo.thumbnail_url}
    />
  </Wrapper>
);

export default TinyImage;

const ImageStyled = styled.img`
  margin: 5px;
  padding: 5px;
  object-fit: cover;
  width: 90px;
  height: 90px;
  opacity: 0.7;
  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
    border-bottom: 6px solid red;
    transition: all 0.2s ease-in-out;
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: right;
`;
