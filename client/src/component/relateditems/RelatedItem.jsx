import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import ProductContext from '../ProductContext';
import styled from 'styled-components';

const ItemStyle = styled.section`
  object-fit: cover;
`;

const RelatedItem = (props) => {
  const { setProductId } = useContext(ProductContext);
  return (

    <Link to={`/store/${props.item.id}`}>
      <ItemStyle>
      <div className='related-item' onClick={()=>setProductId(props.item.id)}>

      <img src={props.item.photo} width="auto" height="300" />
      {props.item.name},
      ${props.item.default_price},
      Rating: {props.item.rating}

      </div>
      </ItemStyle>

    </Link>

  )
}

export default RelatedItem;