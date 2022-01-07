/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import App from '../client/src/component/App';

xtest('renders a message', () => {
  const { container, getByText } = render(<App />);
  expect(getByText('hello world!'));
});
