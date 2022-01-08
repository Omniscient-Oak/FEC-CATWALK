import React from 'react';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/fa-solid';

const Thumbnails = ({
  style,
  index,
  setCurrentStyleIndex,
  currentStyleIndex,
}) => {
  const renderCheckmark = currentStyleIndex === index;
  return (
    <Wrapper>
      <ThumbnailStyled
        onClick={() => setCurrentStyleIndex(index)}
        imageUrl={style.photos[0].thumbnail_url}
        checkmark={currentStyleIndex === index}
      >
        {renderCheckmark && <StyledIcon />}
      </ThumbnailStyled>
      <ThumbnailText>{style.name}</ThumbnailText>
    </Wrapper>
  );
};

export default Thumbnails;

const ThumbnailStyled = styled.div`
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 80%;
  padding: 15px;
  border: 3px solid transparent;
  object-fit: cover;
  &:hover {
    color: red;
    background-color: palevioletred;
    cursor: pointer;
    border-style: solid;
    border-width: 3px;
    border-color: red;
    opacity: 90%;
  }
`;

const StyledIcon = styled(CheckSquare)`
  position: absolute;
  color: green;
  height: 10px;
  width: 10px;
  top: 0;
  right: 0;
`;

const ThumbnailText = styled.div`
  font-size: 10px;
  text-align: center;
  margin: 5px;
`;

const Wrapper = styled.section`
  text-align: center;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in;
    transform: translateY(-5px);
  }
`;
