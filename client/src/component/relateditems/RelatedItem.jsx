import React from 'react';

const RelatedItem = (props) => {
  return (
    <div className='related-item'><img src={props.item.photo}/>, 
    {props.item.name}, 
    ${props.item.default_price}, 
    Rating: {props.item.rating}
    </div>
  )
}

export default RelatedItem;