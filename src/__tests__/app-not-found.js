import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { App } from '../app';

describe('App::not-found', () => {
  afterEach(cleanup);

  it('should show the "Not found" page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/some-random-page']}>
        <App />
      </MemoryRouter>
    );
    const link = getByText('Back to the startpage');

    expect(getByText('Nothing available here…')).toBeTruthy();
    expect(link).toHaveAttribute('href', '/');
  });
});
