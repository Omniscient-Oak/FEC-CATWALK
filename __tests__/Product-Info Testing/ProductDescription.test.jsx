/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProductDescription from '../../client/src/component/Overview/Product-Info/ProductDescription';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  const currentProduct = {
    slogan: 'i love lasagna',
    description: 'lasagna should be the national food',
  };

  act(() => {
    render(<ProductDescription currentProduct={currentProduct} />, container);
  });
  expect(container.textContent).toBe(
    currentProduct.slogan + currentProduct.description
  );
});
