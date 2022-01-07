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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 75%;
  padding: 15px;
  &:hover {
    opacity: 0.75;
    color: red;
    background-color: palevioletred;
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
`;
