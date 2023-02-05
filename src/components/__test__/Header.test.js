import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import Header from '../Header';
import { StaticRouter } from 'react-router-dom/server';
import { APP_LOGO } from '../../constants';

test('logo should load', () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId('logo');
  expect(logo.src).toBe(APP_LOGO);
});

test('online status should be green', () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId('online-status');
  expect(onlineStatus.innerHTML).toBe('Hi, Dummy ✅');
});

test('cart should have 0 items', () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId('cart');
  expect(cart.innerHTML).toBe('Cart - 0');
});
