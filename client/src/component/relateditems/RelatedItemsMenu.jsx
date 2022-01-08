<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
=======
import React, {
  useState, useEffect, useContext, lazy, Suspense,
} from 'react';
>>>>>>> master
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import {
  Tshirt,
  Socks,
  HatWizard,
  Heart,
  LaughSquint,
} from '@styled-icons/fa-solid';
import ProductContext from '../ProductContext';
// import RelatedItem from './RelatedItem';

import RelatedItem from './RelatedItem';

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const RelatedItemWrapperStyle = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 2em 0em 5em 0em;
  font-family: Helvetica;
  display: flex;
  height: 18vw;
  min-height: 300px;
  width: auto;
  justify-content: center;
`;
const MaxWidthStyle = styled.div`
  width: 70%;
`;

const CarouselButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  background: #eeeeee;
  text-transform: uppercase;
  color: grey;
  box-shadow: 1px 1px 2px #d3d3d3;
  border: 0;
  animation-name: ${fadeIn};
  transition: all 0.1s;
  animation-duration: 0.5s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
  &:hover ${CarouselButton} {
    box-shadow: 4px 4px 5px #d3d3d3;
    background: #e8e8e8;
  }
`;

const Title = styled.div`
  padding: 10px 30px 10px 510px;
  background: crimson;
  width: max;
  color: white;
  font-size: 40px;
  font-variant: all-small-caps;
  font-family: sans-serif;
`;

const RelatedItemsMenu = () => {
  const [relatedList, changeRelated] = useState([]);
  const { productId } = useContext(ProductContext);
  const [toShow, changeToShow] = useState([]);
  const [upperBound, changeUpperBound] = useState(5);
  const [currentRange, changeCurrentRange] = useState([0, 5]);

  const handleCarouselRight = () => {
    if (currentRange[1] >= upperBound) {
      if (upperBound < 5) {
        changeCurrentRange([0, upperBound]);
      } else {
        changeCurrentRange([0, 5]);
      }
    } else {
      changeCurrentRange([currentRange[0] + 1, currentRange[1] + 1]);
    }
    changeToShow(relatedList.slice(currentRange[0], currentRange[1]));
  };

  const handleCarouselLeft = () => {
    if (currentRange[0] === 0) {
      if (upperBound < 5) {
        changeCurrentRange([0, upperBound]);
      } else {
        changeCurrentRange([upperBound - 5, upperBound]);
      }
    } else {
      changeCurrentRange([currentRange[0] - 1, currentRange[1] - 1]);
    }
    changeToShow(relatedList.slice(currentRange[0], currentRange[1]));
  };
  useEffect(() => {
    axios
      .get('/related', {
        params: {
          product_id: productId,
        },
      })
      .then((related) => {
        changeToShow(related.data.slice(0, 5));
        changeUpperBound(related.data.length);
        changeRelated(related.data);
      });
  }, [productId]);
  return (
    <div className="relatedmenu">
      <RelatedGrid>
        <Title>
          You may also like
          <IconGrid>
            <IconWrapper>
              <IconDisplay>
                <LaughSquint />
              </IconDisplay>
              <IconDisplay>
                <Heart />
              </IconDisplay>
              <IconDisplay>
                <Heart />
              </IconDisplay>
              <IconDisplay>
                <Heart />
              </IconDisplay>
              <IconDisplay>
                <HatWizard />
              </IconDisplay>
              <IconDisplay>
                <Tshirt />
              </IconDisplay>
              <IconDisplay>
                <Socks />
              </IconDisplay>
              <IconDisplay>
                <tShirt />
              </IconDisplay>
            </IconWrapper>
          </IconGrid>
        </Title>
      </RelatedGrid>
      <RelatedItemWrapperStyle
        onWheel={(e) => {
          scrollHandler(e);
        }}
      >
        {toShow.length > 0 && (
          <CarouselButton onClick={handleCarouselLeft}>&lt;</CarouselButton>
        )}
        {toShow.map((item) => (
          <RelatedItem item={item} key={item.name} />
        ))}
        {toShow.length > 0 && (
          <CarouselButton onClick={handleCarouselRight}>&gt;</CarouselButton>
        )}
      </RelatedItemWrapperStyle>
    </div>
  );
};

export default RelatedItemsMenu;

const IconWrapper = styled.section`
  color: white;
  margin: 0px 0px 0px 30px;
`;

const IconDisplay = styled.div`
  display: inline-grid;
  height: 22px;
  width: 22px;
  margin: 0px 5px 0px 5px;
  &:hover {
    color: teal;
  }
`;

const IconGrid = styled.div`
  display: inline-grid;
  grid-column-start: 2;
`;

const RelatedGrid = styled.div`
  opacity: 90%;
`;
