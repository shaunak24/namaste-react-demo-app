import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/restaurants';
import store from '../../utils/store';
import Body from '../Body';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test('search results on homepage', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId('shimmer');
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(15);
});
