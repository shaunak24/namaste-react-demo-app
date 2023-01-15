import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
