import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

// old way
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', test: 'Shaunak' },
//   'Hello from Shaunak'
// );

// JSX
// const nums = [1, 2, 3];

// const heading = (
//   <div id="container">
//     <h1 id="title" key="h1">
//       Hello from Shaunak
//     </h1>
//     <ul>
//       {nums.map((num) => (
//         <li key={`key-${num}`}>Element {num}</li>
//       ))}
//     </ul>
//   </div>
// );

// Chunking/Code Splitting/Lazy Loading/Dynamic Bundling/On Demand Loading/Dynamic Import
const Instamart = lazy(() => import('./components/Instamart')); // returns a Promise

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Shaunak',
    email: 'shaunak241997@gmail.com',
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
