import RestaurantCard from './RestaurantCard';
import restaurantsData from '../../resources/restaurants.json';

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantsData.data.map((res) => (
        <RestaurantCard {...res.data} key={res.data.id} />
      ))}
    </div>
  );
};

export default Body;
