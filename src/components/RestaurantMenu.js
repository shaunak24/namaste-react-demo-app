import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SWIGGY_IMAGE_CDN_URL } from '../constants';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const restaurant = useRestaurant(resId);

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
