import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SWIGGY_IMAGE_CDN_URL } from '../constants';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();

  if (!restaurant) return <Shimmer />;

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

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
    <div className="flex">
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
          <div className="flex" key={item.id}>
            <li>
              <p>
                <strong>{item?.name}</strong>{' '}
                <button
                  className="m-2 bg-cyan-200 rounded-sm"
                  onClick={() => addFoodItem(item)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
