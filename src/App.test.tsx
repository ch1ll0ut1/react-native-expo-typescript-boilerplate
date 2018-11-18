import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './app';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
