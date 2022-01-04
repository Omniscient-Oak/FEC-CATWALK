import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import ProductContext from '../ProductContext';
import RelatedItem from './RelatedItem';

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const RelatedItemWrapperStyle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 2em 15em 5em 15em;
  font-family: Helvetica;
  display: flex;
  height: 18vw;
  min-height: 350px;
  width: auto;

`;
const MaxWidthStyle = styled.div`
  width: 70%
`;
const RelatedTitleStyle = styled.section`
padding: 2em 10em 0em 10em;
`;

const CarouselButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  background: #EEEEEE;
  text-transform: uppercase;
  color: grey;
  box-shadow: 1px 1px 2px #D3D3D3;
  border: 0;
  animation-name: ${fadeIn};
  transition: all 0.1s;
  animation-duration: .5s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
  &:hover ${CarouselButton} {
    box-shadow: 4px 4px 5px #D3D3D3;
    background: #E8E8E8;
  }
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
    console.log(productId);
    axios.get('/related', {
      params: {
        product_id: productId,
      },
    }).then((related) => {
      changeToShow(related.data.slice(0, 5));
      changeUpperBound(related.data.length);
      changeRelated(related.data);
    });
  }, [productId]);
  return (
    <div className="relatedmenu">
      <RelatedTitleStyle>
        <h3>Related Items</h3>
      </RelatedTitleStyle>
      <RelatedItemWrapperStyle>
        {toShow.length > 0 && <CarouselButton onClick={handleCarouselLeft}>&lt;</CarouselButton>}
        {toShow.map((item) => <RelatedItem item={item} key={item.name} />)}
        {toShow.length > 0 && <CarouselButton onClick={handleCarouselRight}>&gt;</CarouselButton>}
      </RelatedItemWrapperStyle>
    </div>
  );
};

export default RelatedItemsMenu;
