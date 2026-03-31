import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        setrestaurantList(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredList(json?.data?.cards[2]?.data?.data?.cards);
    }

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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
