import React from 'react';
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  IMAGE_NOT_AVAILABLE_THUMBNAIL,
  SWIGGY_IMAGE_CDN_URL,
} from '../constants';

const MenuItem = ({ item }) => {
  const { id, name, description, price, cloudinaryImageId, attributes } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemCount = cartItems[id] ? cartItems[id].count : 0;

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="flex border bg-cyan-200 m-2 rounded-lg shadow-lg">
        <img
          className="m-2 w-24 h-24"
          src={
            cloudinaryImageId
              ? `${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`
              : IMAGE_NOT_AVAILABLE_THUMBNAIL
          }
          alt="Menu Item Logo"
        />
        <div>
          <h3 className="font-bold text-md">{name}</h3>
          <p className="text-sm">{description}</p>
          <p className="text-sm italic font-semibold">
            ₹ {Math.round(price / 100)}
          </p>
          {attributes?.vegClassifier === 'NONVEG' ? (
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/material/48/FA5252/vegetarian-food-symbol.png"
            />
          ) : (
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png"
            />
          )}
        </div>
      </div>
      <div className="flex">
        <button
          className="m-2 bg-green-500 rounded-full"
          onClick={() => addFoodItem(item)}
        >
          <i className="fa fa-plus"></i>
        </button>
        <p className="w-6 h-6 text-center rounded-full bg-yellow-400">
          {cartItemCount}
        </p>
        <button
          className="m-2 bg-red-500 rounded-full"
          onClick={() => removeFoodItem(id)}
        >
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default MenuItem;
