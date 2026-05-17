import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { API_URL } from "../utils/constants";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {loggedInUser,setUserName} = useContext(UserContext);

  //console.log("Body Rendered", restaurantList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    // console.log(json)
    //optional chaining
    setrestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  if (onlineStatus === false)
    return <h1>Offline, Please check your internet connection!!</h1>;

  //conditional rendering
  // if(restaurantList.length === 0){
  //     return <h1>No restaurant found</h1>
  // }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body w-11/12 h-auto flex flex-col gap-9 mx-auto">
      <div className="wrapper flex items-center justify-between">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-80 mr-4"
          />

          <button
            className="filter-btn custom px-4 py-2 rounded bg-emerald-200"
            onClick={() => {
              let filteredName = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredList(filteredName);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn  px-4 py-2 rounded bg-emerald-700 text-white font-normal"
            onClick={() => {
              let filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4,
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="input-wrapper flex flex-wrap items-center gap-4">
          <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
          <input className="border border-gray-300 rounded px-4 py-2" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>

      <div className="restaurant-container flex items-center justify-start gap-7 flex-wrap">
        {/* Restaurant Card */}
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/**if a restaurant is promoted then add a promoted label to it **/}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
