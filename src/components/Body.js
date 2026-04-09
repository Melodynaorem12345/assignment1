import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState,useEffect, use } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    //console.log("Body Rendered");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        //console.log(json)
        //optional chaining
        setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(onlineStatus === false) return <h1>Offline, Please check your internet connection!!</h1>

    //conditional rendering
    // if(restaurantList.length === 0){
    //     return <h1>No restaurant found</h1>
    // }
    return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="wrapper">
        <div className="search">
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            
            <button className="filter-btn custom" onClick={() => {
              let filteredName = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredList(filteredName);
            }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
              setFilteredList(filteredList);
            }}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
     
      <div className="restaurant-container">
        {/* Restaurant Card */}
        {filteredList.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
