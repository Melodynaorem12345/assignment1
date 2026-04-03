import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9106725&lng=77.62354130000001&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
    // console.log(data.status);
    // console.log(data.ok);
    const json = await data.json();
    console.log(json)
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  }
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
