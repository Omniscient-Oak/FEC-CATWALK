/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {
  fireEvent, cleanup, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import List from '../client/src/component/qa/List.jsx';
import Answer from '../client/src/component/qa/Answer.jsx';
import AddAnswer from '../client/src/component/qa/AddAnswer.jsx';
import Question from '../client/src/component/qa/Question.jsx';

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
    answerer_name: 'Seller',
    helpfulness: 8,
    photos: [],
  };
  act(() => {
    render(<Answer answer={fakeAnswer} />, container);
  });
  expect(container.textContent).not.toBeNull();
  expect(container.textContent).toContain('Seller');
});

it('it can render question', () => {
  const fakeQuestion = {
    question_id: 563342,
    question_body: 'is it cloudy??',
    question_date: '2022-01-04T00:00:00.000Z',
    asker_name: 'test',
    question_helpfulness: 0,
    reported: false,
    answers: {
      5181618: {
        id: 5181618,
        body: 'Its a rubber sole',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'n00bgamer',
        helpfulness: 9,
        photos: [],
      },
      5181619: {
        id: 5181619,
        body: 'Some kind of recycled rubber, works great!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'n00bgamer',
        helpfulness: 10,
        photos: [],
      },
      5181620: {
        id: 5181620,
        body: 'The rubber on the bottom wears thin quickly',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 7,
        photos: [],
      },
    },
  };
  act(() => {
    render(<Question question={fakeQuestion} productId={63617} />, container);
  });
  expect(container.textContent).not.toBeNull();
});
