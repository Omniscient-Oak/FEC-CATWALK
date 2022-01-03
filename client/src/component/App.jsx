import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from './ProductContext';
import Overview from './Overview/Overview.jsx';
import List from './qa/List.jsx';
import RelatedItemsMenu from './relateditems/RelatedItemsMenu.jsx';

const App = () => {
  const params = useParams();
  const [productId, setProductId] = useState(params.productId);
  useEffect(() => {}, []);
  return (
    <div>
      <ProductContext.Provider value={{productId, setProductId}}>
        <Overview />
        <RelatedItemsMenu />
        <List />
      </ProductContext.Provider>
    </div>
  );
};

export default App;