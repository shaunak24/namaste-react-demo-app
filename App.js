import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

// Functional component
const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const Body = () => {
  return <h4>Body</h4>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<AppLayout />);
