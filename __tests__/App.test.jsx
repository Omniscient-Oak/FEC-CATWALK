/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, fireEvent, cleanup, screen,
} from '@testing-library/react';
import App from '../client/src/component/App.jsx';
import Overview from '../client/src/component/Overview/Overview.jsx';
import List from '../client/src/component/qa/List.jsx';
import RelatedItemsMenu from '../client/src/component/relateditems/RelatedItemsMenu.jsx';

afterEach(cleanup);

test('render the correct content in App', () => {
  const { getByText } = render(
    <App>
      <Overview />
      <RelatedItemsMenu />
      <List />
    </App>,
  );
});
