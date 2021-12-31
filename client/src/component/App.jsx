import React from 'react';
import Overview from './Overview/Overview.jsx';
import List from './qa/List.jsx';
import RelatedItemsMenu from './relateditems/RelatedItemsMenu.jsx';

const App = () => (
  <div>
    <Overview />
    <RelatedItemsMenu />
    <List />
  </div>
);

export default App;
