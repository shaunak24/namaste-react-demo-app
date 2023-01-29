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
    <div className="w-56 m-2 p-2 shadow-lg bg-cyan-200">
      <img
        src={`${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h2 className="font-bold text-xl">{name.toUpperCase()}</h2>
      <h4>{area}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <div className="flex">
        <p className="text-sm px-2">{`${
          avgRating === '--' ? 0 : avgRating
        } ⭐️`}</p>
        <p>|</p>
        <p className="text-sm px-2">{`${Math.round(lastMileTravel)} Kms`}</p>
        <p>|</p>
        <p className="text-sm px-2">{costForTwoString}</p>
      </div>
      <p>{`📭 ${address}`}</p>
    </div>
  );
};

export default RestaurantCard;
