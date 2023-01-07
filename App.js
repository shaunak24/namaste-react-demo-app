import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurantsData from './resources/restaurants.json';

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

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravel,
  costForTwoString,
  address,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h2>{name.toUpperCase()}</h2>
      <h4>{area}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <div className="restaurant-info">
        <p>{`${avgRating === '--' ? 0 : avgRating} ⭐️`}</p>
        <p>.</p>
        <p>{`${Math.round(lastMileTravel)} Kms`}</p>
        <p>.</p>
        <p>{costForTwoString}</p>
      </div>
      <p>{`📭 ${address}`}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantsData.data.map((res) => (
        <RestaurantCard {...res.data} key={res.data.id} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<AppLayout />);
