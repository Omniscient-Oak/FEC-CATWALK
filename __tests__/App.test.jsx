/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
<<<<<<< HEAD
//import renderer from 'react-test-renderer';
=======
<<<<<<<< HEAD:__tests__/App.test.jsx
========
//import renderer from 'react-test-renderer';
>>>>>>>> master:__tests__/App.test.js
>>>>>>> master
import App from '../client/src/component/App';

test('renders a message', () => {
  const { container, getByText } = render(<App />);
  expect(getByText('hello world!'));
});
