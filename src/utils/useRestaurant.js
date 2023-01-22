import { useState, useEffect } from 'react';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=18.54049434254868&lng=73.94665578842162&menuId=${resId}`
    );
    const json = await data.json();
    // console.log(json.data.menu.items);
    setRestaurant(json.data);
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurant;
