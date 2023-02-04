import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-xl m-2">Cart Items</h1>
      {cartItems.length > 0 && (
        <button className="bg-green-400 m-2" onClick={() => handleClearCart()}>
          <i className="fa fa-minus" />
        </button>
      )}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
