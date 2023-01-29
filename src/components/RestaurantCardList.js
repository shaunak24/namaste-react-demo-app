import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const RestaurantCardList = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.54049434254868&lng=73.94665578842162&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json?.data.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data.cards[2]?.data?.data?.cards);
  }

  if (!isOnline)
    return <h1>🟥 Offline, Please check your internet connection</h1>;

  if (!allRestaurants) return null;

  return (
    <>
      <div className="p-5 bg-cyan-200 my-5">
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 m-2 bg-black hover:bg-gray-600 text-white rounded-md"
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
      <div className="flex flex-wrap">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Match your Filter!</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <Link to={`/restaurants/${res.data.id}`} key={res.data.id}>
              <RestaurantCard {...res.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default RestaurantCardList;
