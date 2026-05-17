import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const ItemCard = ({ item }) => {
  const { id, isVeg, emoji, name, price, defaultPrice, description, ratings } =
    item?.card?.info || {};

  const displayPrice = ((price || defaultPrice) / 100).toFixed(0);
  const rating = ratings?.aggregatedRating?.rating;

  return (
    <div className="flex justify-between items-start py-6 border-b border-gray-200 gap-4">
      {/* Left */}
      <div className="flex-1">
        {/* Veg / Non-veg dot */}
        <span className={`border-2 p-0.5 inline-block mb-2 ${isVeg ? "border-green-600" : "border-red-600"}`}>
          <span className={`block w-2 h-2 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`}></span>
        </span>

        <p className="font-bold text-gray-900 text-base">{name}</p>
        <p className="font-bold text-gray-800 mt-1">₹{displayPrice}</p>
        {rating && (
          <p className="text-green-600 text-sm font-semibold mt-1">⭐ {rating}</p>
        )}
        {description && (
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
        )}
      </div>

      {/* Right — emoji box + ADD button */}
      <div className="relative w-32 h-28 shrink-0">
        <div className="w-full h-full bg-orange-50 rounded-xl flex items-center justify-center text-6xl">
          {emoji || "🍽️"}
        </div>
        {/* ADD button overlapping bottom — exactly like Swiggy */}
        <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold text-sm px-6 py-1.5 rounded-lg shadow-md border border-gray-200 hover:bg-green-50 transition-all w-24 tracking-widest">
          ADD
        </button>
      </div>
    </div>
  );
};

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="bg-white my-4 px-4 rounded-lg shadow-sm">
      <div
        className="flex justify-between items-center py-5 cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-500">{showItems ? "▲" : "▼"}</span>
      </div>
      {showItems && (
        <div className="pb-6">
          {data.itemCards.map((item, i) => (
            <ItemCard key={item?.card?.info?.id || i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  // cards[2] = restaurant info (matches mockMenuData structure)
  const { name, cuisines, avgRating, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // cards[4] = menu categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="w-7/12 mx-auto my-8">
      {/* Restaurant Info */}
      <div className="border-b pb-6 mb-2">
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-500 text-sm mt-1">{cuisines?.join(", ")}</p>
        <div className="flex gap-4 mt-3 text-sm font-medium">
          <span className="text-green-600 font-bold">⭐ {avgRating}</span>
          <span className="text-gray-600">🕐 {sla?.slaString}</span>
          <span className="text-gray-600">{costForTwoMessage}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Menu</h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;