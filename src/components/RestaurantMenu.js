import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
  if(resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Dish 1</li>
        <li>Dish 2</li>
        <li>Dish 3</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
