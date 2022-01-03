import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import ProductContext from '../ProductContext';

const RelatedItem = (props) => {
  const { setProductId } = useContext(ProductContext);
  return (
    <div className='related-item' onClick={()=>setProductId(props.item.id)}><Link to={`/store/${props.item.id}`}>Load Store Page</Link>
    <img src={props.item.photo}/>,
    {props.item.name},
    ${props.item.default_price},
    Rating: {props.item.rating}
    </div>
  )
}

export default RelatedItem;