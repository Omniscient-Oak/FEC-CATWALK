import React from 'react';

const ProductContext = React.createContext({
  productId: '',
  setProductId: (id) => {},
  productInfo: {},
});
ProductContext.displayName = 'ProductId';
export default ProductContext;
