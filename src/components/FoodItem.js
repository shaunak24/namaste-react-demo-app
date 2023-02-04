import { SWIGGY_IMAGE_CDN_URL } from '../constants';

const FoodItem = ({ name, category, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 h-72 m-2 p-2 shadow-lg bg-cyan-200 rounded-lg">
      <img
        className="w-56 h-3/5 shadow-lg rounded-lg mb-2"
        src={
          cloudinaryImageId
            ? `${SWIGGY_IMAGE_CDN_URL}${cloudinaryImageId}`
            : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
        }
        alt="Menu Item Image"
      />
      <h4 className="font-bold text-xs">
        {name.length > 31
          ? `${name.toUpperCase().slice(31)}...`
          : name.toUpperCase()}
      </h4>
      <h4 className="text-xs">{category}</h4>
      <h4 className="text-xs my-2 font-bold">₹ {price}</h4>
    </div>
  );
};

export default FoodItem;
