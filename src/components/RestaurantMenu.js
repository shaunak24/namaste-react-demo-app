import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SWIGGY_IMAGE_CDN_URL } from '../constants';
import useRestaurant from '../utils/useRestaurant';
import MenuItem from './MenuItem';
import RestaurantCard from './RestaurantCard';

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const restaurant = useRestaurant(resId);

  if (!restaurant) return <Shimmer />;

  console.log('Restaurant: ', restaurant);
  console.log(restaurant?.menu?.items);

  return (
    <div className="m-2 flex">
      <RestaurantCard {...restaurant} />
      <div className="m-2">
        {Object.values(restaurant?.menu?.items).map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
