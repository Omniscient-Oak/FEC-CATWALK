import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ProductContext from '../ProductContext';
import RelatedItem from './RelatedItem';

const RelatedItemWrapperStyle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 2em 15em 5em 15em;
  font-family: Helvetica;
  display: flex;
  height: 20vw;
  width: auto;
  scrollbar-color: transparent transparent;
  overflow: auto;
  box-sizing: border-box;
`;
const MaxWidthStyle = styled.div`
  width: 70%
`
const RelatedTitleStyle = styled.section`
padding: 2em 10em 0em 10em;
`;

const RelatedItemsMenu = () => {
  const [relatedList, changeRelated] = useState([]);
  const [toShow, changeToShow] = useState([]);
  const {productId} = useContext(ProductContext);

  const handleCarouselRight = () => {
    changeToShow
  }

  useEffect(() => {
    console.log(productId);
    axios.get('/related', {
      params: {
        product_id: productId,
      },
    }).then((related) => {
      changeToShow(related.data.slice(0,4));
      changeRelated(related.data)
    });
  }, [productId]);
  return (

      <div className="relatedmenu">
        <RelatedTitleStyle>
          <h3>Related Items</h3>
        </RelatedTitleStyle>
        <RelatedItemWrapperStyle>
        {relatedList.map((item) => <RelatedItem item={item} key={item.name}/>)}
        </RelatedItemWrapperStyle>
      </div>
  );
};

export default RelatedItemsMenu;
