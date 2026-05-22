import React, { Suspense,lazy } from "react";
import { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//chunking
//code splitting
//Dynamic Loading
//Lazy loading(when required load the code  instead of loading everything at once in the beginning)
//on demand loading
//dynamic import


const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
  const[userName, setUserName] = useState();
useEffect(()=>{
  //API call to get the data of the currently logged in user
  const data ={
    name: "Melody Naorem"
  }
  setUserName(data.name);
},[])
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col h-screen gap-10">
      <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },{
        path: "/contact",
        element: <Contact />
      },{
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },{
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },{
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
