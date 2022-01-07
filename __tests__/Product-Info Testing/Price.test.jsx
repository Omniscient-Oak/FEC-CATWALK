/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Price from '../../client/src/component/Overview/Product-Info/Price';

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

it('if the sales price is null it should return the original price', () => {
  const currentStyle = {
    original_price: 100,
    sale_price: null,
  };

  act(() => {
    render(<Price currentStyle={currentStyle} />, container);
  });
  expect(container.textContent).toBe(`$${currentStyle.original_price}`);
});

it('if the sales price is valid, it should return the original price and the sales price', () => {
  const currentStyle = {
    original_price: 100,
    sale_price: 50,
  };

  act(() => {
    render(<Price currentStyle={currentStyle} />, container);
  });
  expect(container.textContent).toBe('$100$50');
});
