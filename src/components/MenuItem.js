import React from 'react';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { SWIGGY_IMAGE_CDN_URL } from '../constants';

const MenuItem = ({ item }) => {
  const { name, description, price, cloudinaryImageId, attributes } = item;
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(item);

  return (
    <>
      <div className="flex border bg-cyan-200 m-2 rounded-lg shadow-lg">
        <img
          className="m-2 w-24 h-24"
          src={`${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`}
          alt="Restaurant Logo"
        />
        <div>
          <h3 className="font-bold text-md">{name}</h3>
          <p className="text-sm">{description}</p>
          <p className="text-sm italic font-semibold">
            ₹ {Math.round(price / 100)}
          </p>
          <p>{attributes?.vegClassifier}</p>
        </div>
      </div>
      <button
        className="m-2 bg-green-500 rounded-full"
        onClick={() => addFoodItem(item)}
      >
        <i className="fa fa-plus"></i>
      </button>
      <button
        className="m-2 bg-red-500 rounded-full"
        onClick={() => addFoodItem(item)}
      >
        <i className="fa fa-minus"></i>
      </button>
    </>
  );
};

export default MenuItem;
