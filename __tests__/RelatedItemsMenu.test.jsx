/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import testdata from '../relatedmockdata.js';
import RelatedItemsMenu from '../client/src/component/relateditems/RelatedItemsMenu';
import 'regenerator-runtime/runtime';
