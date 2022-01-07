/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, fireEvent, cleanup, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../client/src/component/App.jsx';
import Overview from '../client/src/component/Overview/Overview.jsx';
import List from '../client/src/component/qa/List.jsx';
import RelatedItemsMenu from '../client/src/component/relateditems/RelatedItemsMenu.jsx';

afterEach(cleanup);

test('render the correct content in App', () => {
  const { getByText } = render(<App>
    <Overview />
    <RelatedItemsMenu />
    <List />
    </App>);
  screen.debug();

  expect(getByText('Related Items'));
  expect(getByText('QUESTIONS & ANSWERS'));
  expect(screen.getByText('Add A Question')).toBeInTheDocument();

});

// test('allow user to report', () => {
//   const { getByText } = render(<Question />);
//   fireEvent.click(getByText('Report'));
//   expect(getByText('Reported')).not.toBeNull();
// });


//const mockServer = (api.get = jest.fn());
// test('renders a message', () => {
//   const { container, getByText } = render(<App />);
//   expect(getByText('hello world!'));
// });
