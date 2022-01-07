/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import testdata from './testdata/relatedmockdata.js';
import RelatedItemsMenu from '../client/src/component/relateditems/RelatedItemsMenu';
import 'regenerator-runtime/runtime';

const server = setupServer(
  rest.get('/store/63617', (req, res, ctx) => {
    return res(ctx.json(testdata))
  }),
);

// test('renders RelatedItems title', () => {
//   const { container, getByText } = render(<RelatedItemsMenu />);
//   expect(getByText('Related Items'));
// });

test('loads and displays greeting', async () => {
  render(<RelatedItemsMenu />);

  await waitFor(() => screen.getByText('Camo Onesie'));

  expect(screen.getByText('Camo Onesie'));
})