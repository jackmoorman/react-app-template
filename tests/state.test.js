import React from 'react';
import { Provider } from 'react-redux';
import { userEvent } from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../src/App';
import Home from '../src/pages/Home';

describe('Unit testing React components', () => {
  let localState;
  let globalState;

  beforeAll(() => {
    text = render(<Home />);
  });

  test('Renders the updated State values', () => {
    expect(
      screen
        .getByText('Update State Locally With useState:')
        .nextSibling.nextSibling.toHaveTextContent('0')
    );
    expect(
      screen
        .getByText('Update State Globally With Redux Toolkit:')
        .nextSibling.nextSibling.toHaveTextContent('0')
    );
  });
});
