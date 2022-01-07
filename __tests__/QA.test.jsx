/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AddAnswer from '../client/src/component/qa/AddAnswer.jsx';
import Answer from '../client/src/component/qa/Answer.jsx';

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

it('it can post new answer', () => {
  act(() => {
    render(<AddAnswer />, container);
  });
  expect(container.textContent).not.toBeNull();
});

it('it can handle updating answer', () => {
  const fakeAnswer = {
    id: 5181618,
    body: 'Its a rubber sole',
    date: '2019-11-28T00:00:00.000Z',
    answerer_name: 'n00bgamer',
    helpfulness: 8,
    photos: [],
  };
  act(() => {
    render(<Answer answer={fakeAnswer} />, container);
  });
  expect(container.textContent).not.toBeNull();
});
