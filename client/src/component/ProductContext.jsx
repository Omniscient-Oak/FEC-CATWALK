import React from 'react';

const ProductContext = React.createContext({
  productId: '',
  setProductId: (id) => {},
});
ProductContext.displayName = 'ProductId';
export default ProductContext;
