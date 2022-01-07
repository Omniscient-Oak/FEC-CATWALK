/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';
import App from '../client/src/component/App.jsx';

afterEach(cleanup);

test('render the correct content in App', () => {
});
