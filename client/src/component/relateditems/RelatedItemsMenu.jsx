import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ProductContext from '../ProductContext';
import RelatedItem from './RelatedItem';

const RelatedItemsMenu = () => {
  const [relatedList, changeRelated] = useState([]);
  const {productId} = useContext(ProductContext);
  useEffect(() => {
    console.log(productId);
    axios.get('/related', {
      params: {
        product_id: productId,
      },
    }).then((related) => changeRelated(related.data));
  }, [productId]);
  return (
    <div className="relatedmenu">
      <h3>Related Items:</h3>
      {relatedList.map((item) => <RelatedItem item={item} key={item.name}/>)}
    </div>
  );
};

export default RelatedItemsMenu;
