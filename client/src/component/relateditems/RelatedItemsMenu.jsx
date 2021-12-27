import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx'
const RelatedItemsMenu = () => {
  const [relatedList, changeRelated] = useState([]);
  useEffect(()=>{
    axios.get('/related', {
      params: {
        product_id: 63609
      }
    }).then((related)=>changeRelated(related.data))
  }, [])
  return (
    <div className='relatedmenu'>
      <h3>Related Items:</h3>
      {relatedList.map((item) => {return <RelatedItem item={item} key={item.name}/>})}
    </div>
  )
}

export default RelatedItemsMenu;