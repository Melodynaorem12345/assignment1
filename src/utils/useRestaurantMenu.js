import {useEffect, useState} from "react";
import MOCK_MENU_DATA from "./mockMenuData";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        // const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId);
        // const json = await data.json();
        // setResInfo(json.data);
        setResInfo(MOCK_MENU_DATA.data);
    }
    return resInfo;
}
export default useRestaurantMenu;