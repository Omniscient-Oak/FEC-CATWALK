import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RelatedItem from '../client/src/component/relateditems/RelatedItem.jsx';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('it can render related items', () => {
  act(() => {
    render(<RelatedItem />, container);
  });
  expect(container.textContent).not.toBeNull();
});
