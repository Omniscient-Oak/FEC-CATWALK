/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TinyImage from '../../client/src/component/Overview/Image-Gallery/TinyImage';

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

it('should render the image given an image url', () => {
  const photo = {
    thumbnail_url: 'potato.jpeg',
  };
  act(() => {
    render(<TinyImage photo={photo} />, container);
  });
});

// it('should increment the index by one for each image returned', () => {
//   const photo = {
//     thumbnail_url: 'potato.jpeg',
//   };
//   const actualIndexArray = [];
//   const expectedIndexArray = [0, 1, 2, 3, 4];
//   const index = 0;

//   act(() => {
//     for (let x = 0; x < 5; x++) {
//       render(<TinyImage photo={photo.thumbnail_url} />, container);
//       actualIndexArray.push(index);
//     }
//   });

//   expect(actualIndexArray).toBe(expectedIndexArray);
// });

// import {render, screen} from '@testing-library/react'

// render(<MyComponent />)
// const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
