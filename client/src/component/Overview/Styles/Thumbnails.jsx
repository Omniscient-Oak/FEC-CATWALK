import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/fa-solid';

const Thumbnails = (props) => {
  const renderCheckmark = props.currentStyleIndex === props.index;
  if (props.style === undefined) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <ThumbnailStyled
        onClick={() => props.setCurrentStyleIndex(props.index)}
        imageUrl={props.style.photos[0].thumbnail_url}
        checkmark={props.currentStyleIndex === props.index}
      >
        {renderCheckmark && <StyledIcon />}
      </ThumbnailStyled>
    </div>
  );
};
// {product.styles && (
//   <SizeDropdown skus={product.styles[currentStyleIndex].skus} />
// )}

export default Thumbnails;

const Wrapper = styled.div`
  width: 60px
  height: 60px;

`;

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
