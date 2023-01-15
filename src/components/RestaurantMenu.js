import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SWIGGY_IMAGE_CDN_URL } from '../constants';

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=18.54049434254868&lng=73.94665578842162&menuId=${resId}`
    );
    const json = await data.json();
    // console.log(json.data.menu.items);
    setRestaurant(json.data);
  }

  if (!restaurant) return <Shimmer />;

  const {
    name,
    locality,
    area,
    cuisines,
    costForTwoMsg,
    avgRating,
    cloudinaryImageId,
  } = restaurant;

  return (
    <div className="restaurant-info-detail">
      <img
        src={`${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant Logo"
        style={{ width: '300px', height: '300px' }}
      />
      <h1>{name}</h1>
      <h3>
        {locality}, {area}
      </h3>
      <h3>
        {cuisines.join(', ')} | {costForTwoMsg}
      </h3>
      {avgRating > 0 && <h3>{avgRating} ⭐️</h3>}
      <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li key={item.id}>
            <p>
              <strong>{item?.name}</strong>{' '}
              {item.description && `- ${item.description}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
