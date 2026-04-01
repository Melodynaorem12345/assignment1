import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f1f1f1" }}>
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;