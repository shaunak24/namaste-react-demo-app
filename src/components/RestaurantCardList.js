import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';

const RestaurantCardList = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19&lng=72.8&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json?.data.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

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
                setFilteredRestaurants(allRestaurants);
                return;
              }
              // filter data (always on original list)
              const data = allRestaurants.filter((res) =>
                res.data.name.toUpperCase().includes(searchText.toUpperCase())
              );
              // update the state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Match your Filter!</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <RestaurantCard {...res.data} key={res.data.id} />
          ))
        )}
      </div>
    </>
  );
};

export default RestaurantCardList;
