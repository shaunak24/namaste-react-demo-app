import { SWIGGY_IMAGE_CDN_URL } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravel,
  costForTwoString,
  address,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={`${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h2>{name.toUpperCase()}</h2>
      <h4>{area}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <div className="restaurant-info">
        <p>{`${avgRating === '--' ? 0 : avgRating} ⭐️`}</p>
        <p>.</p>
        <p>{`${Math.round(lastMileTravel)} Kms`}</p>
        <p>.</p>
        <p>{costForTwoString}</p>
      </div>
      <p>{`📭 ${address}`}</p>
    </div>
  );
};

export default RestaurantCard;
