import RestaurantCard from './RestaurantCard';
import restaurantsData from '../../resources/restaurants.json';
import { useEffect, useState } from 'react';

const RestaurantCardList = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantsData.data);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19&lng=72.8&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json?.data.cards[2]?.data?.data?.cards);
    setRestaurants(json?.data.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-wrap">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              if (!searchText) {
                setRestaurants(restaurantsData.data);
                return;
              }
              // filter data (always on original list)
              const data = restaurantsData.data.filter((res) =>
                res.data.name.toUpperCase().includes(searchText.toUpperCase())
              );
              // update the state - restaurants
              setRestaurants(data);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {restaurants.map((res) => (
          <RestaurantCard {...res.data} key={res.data.id} />
        ))}
      </div>
    </>
  );
};

export default RestaurantCardList;
