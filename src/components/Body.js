import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
const Body = () => {
    const[restaurantList, setrestaurantList]= useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async() =>{
        const data = await fetch("");
        const json = await data.json();
        //optional chaining
        setrestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    }

    //conditional rendering
    // if(restaurantList.length === 0){
    //     return <h1>No restaurant found</h1>
    // }
    return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      {/* <div className="search">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
            setrestaurantList(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* Restaurant Card */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
