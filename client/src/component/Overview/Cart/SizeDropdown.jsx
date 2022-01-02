import React from 'react';
import { useState, useEffect } from 'react';
import Sizes from './Sizes.jsx';
import Quantity from './Quantity.jsx';
import styled from 'styled-components';

/*
  based off of
*/
// const SizeDropdown = (props) => {
//   let inStock = [];

//   if (props.productStyles === undefined) {
//     return <div>loading...</div>;
//   } else {
//     let skus = props.productStyles[props.currentStyleIndex].skus;
//     {
//       for (var key in skus) {
//         if (skus[key].quantity > 0) {
//           inStock.push(skus[key]);
//         } else if (skus[key].quantity === 0) {
//           inStock.push({
//             quantity: 'out of stock',
//             size: skus[key].size,
//           });
//         }
//       }
//     }
//     return (
//       <div>
//         <select name='size' id='size'>
//           <option value='select size'>Size</option>
//           {inStock.map((currentStock) => (
//             <Sizes currentStock={currentStock} />
//           ))}
//         </select>
//         <select name='quantity' id='quantity'>
//           {inStock.map((currentStock) => (
//             <Quantity currentStock={currentStock} />
//           ))}
//         </select>
//       </div>
//     );
//   }
// };

const SizeDropdown = (props) => {
  console.log('props', props);
  const [selectedSize, changeSize] = useState('Size');
  const [currentQuantity, changeQuantity] = useState('-');
  const currentStock = {};
  const sizes = [];

  for (var key in props.skus) {
    currentStock[props.skus[key].size] = {
      quantity: props.skus[key].quantity,
      skus: props.skus[key],
    };
    sizes.push(props.skus[key].size);
  }

  return (
    <div>
      <select
        onChange={(event) => (
          changeSize(event.target.value),
          changeQuantity(currentStock[event.target.value].quantity)
        )}
      >
        <option>Size</option>
        {sizes.map((size) => {
          return <option>{size}</option>;
        })}
      </select>
      <Quantity currentQuantity={currentQuantity} />
    </div>
  );
};

// {
//   xs: { quantity: 8, sku: 2275489},
//   s: 16,
//   m: 17,
// }

export default SizeDropdown;
