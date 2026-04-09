import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="restaurant-card w-xs h-6/12" style={{ backgroundColor: "#f1f1f1" }}>
      <img
        className="restaurant-image h-52 w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <div className="restaurant-info p-4">
        <h3 className="text-lg font-bold mb-4">{name}</h3>
        <h4 className="font-semibold mb-1">{cuisines.join(", ")}</h4>
        <h4 className="mb-1">{costForTwo}</h4>
        <h4 className="mb-1">{avgRating} stars</h4>
        <h4 className="mb-1">{sla?.slaString}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;