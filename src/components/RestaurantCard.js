import { SWIGGY_IMAGE_CDN_URL } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravel,
  costForTwoString,
  costForTwoMsg,
  address,
  avgRating,
  sla,
}) => {
  const ratingBackgroundStyle = getRatingBackgroundStyle(avgRating);

  function getRatingBackgroundStyle(rating) {
    if (rating >= 4) return 'bg-green-600';
    else if (rating >= 3 && rating < 4) return 'bg-orange-300';
    else return 'bg-red-600';
  }

  return (
    <div className="w-56 h-72 m-2 p-2 shadow-lg bg-cyan-200 rounded-lg">
      <img
        src={`${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h4 className="font-bold">{name.toUpperCase()}</h4>
      <h4>{area}</h4>
      <h4 className="text-xs my-2">{cuisines.join(', ')}</h4>
      <div className="flex text-xs">
        <div className={`mx-2 w-16 h-4 rounded-md ${ratingBackgroundStyle}`}>
          <p className="text-center">{`${
            avgRating === '--' ? 0 : avgRating
          } ⭐️`}</p>
        </div>
        <p>|</p>
        <p className="px-2">
          {lastMileTravel
            ? `${Math.round(lastMileTravel)} Kms`
            : `${Math.round(sla?.lastMileTravel)} Kms`}
        </p>
        <p>|</p>
        <p className="px-2">{costForTwoString || costForTwoMsg}</p>
      </div>
      {/* <p>{`📭 ${address}`}</p> */}
    </div>
  );
};

export default RestaurantCard;
