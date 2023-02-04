import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import {
  IMAGE_NOT_AVAILABLE_THUMBNAIL,
  SWIGGY_IMAGE_CDN_URL,
} from '../constants';

const FoodItem = ({ item }) => {
  const { id, name, category, cloudinaryImageId, price } = item;
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemCount = cartItems[id] ? cartItems[id].count : 0;
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-56 h-72 m-2 p-2 shadow-lg bg-cyan-200 rounded-lg">
      <img
        className="w-56 h-3/5 shadow-lg rounded-lg mb-2"
        src={
          cloudinaryImageId !== ''
            ? `${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`
            : IMAGE_NOT_AVAILABLE_THUMBNAIL
        }
        alt="Menu Item Image"
      />
      <h4 className="font-bold text-xs">
        {name.length > 31
          ? `${name.toUpperCase().slice(31)}...`
          : name.toUpperCase()}
      </h4>
      <h4 className="text-xs">{category}</h4>
      <h4 className="text-xs my-2 font-bold">₹ {Math.round(price / 100)}</h4>
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
    </div>
  );
};

export default FoodItem;
