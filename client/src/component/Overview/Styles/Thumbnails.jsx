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
    <div>
      <ThumbnailStyled
        onClick={() => setCurrentStyleIndex(index)}
        imageUrl={style.photos[0].thumbnail_url}
        checkmark={currentStyleIndex === index}
      >
        {renderCheckmark && <StyledIcon />}
      </ThumbnailStyled>
    </div>
  );
};

export default Thumbnails;

const ThumbnailStyled = styled.div`
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 75%;
`;

const StyledIcon = styled(CheckSquare)`
  position: absolute;
  color: green;
  height: 9px;
  width: 9px;
  top: 0;
  right: 0;
`;
