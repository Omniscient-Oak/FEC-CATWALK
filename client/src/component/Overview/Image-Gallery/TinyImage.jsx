import React from 'react';
import styled from 'styled-components';

const TinyImage = (props) => (
  <Wrapper>
    <ImageStyled
      onClick={() => props.setMainImage(props.index)}
      src={props.photo.thumbnail_url}
    />
  </Wrapper>
);

export default TinyImage;

const ImageStyled = styled.img`
  padding: 0.5em;
  object-fit: cover;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: palevioletred;
    color: white;
    opacity: 0.95;
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: right;
`;
