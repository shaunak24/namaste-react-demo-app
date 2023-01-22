import { useState, useEffect } from 'react';
import { SWIGGY_FETCH_RESTAURANT_MENU } from '../constants';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${SWIGGY_FETCH_RESTAURANT_MENU}${resId}`);
    const json = await data.json();
    // console.log(json.data.menu.items);
    setRestaurant(json.data);
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurant;
