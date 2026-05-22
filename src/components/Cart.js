import { useSelector,useDispatch } from "react-redux";
import ItemCard from "./RestaurantMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
        console.log("Cart cleared");
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex flex-col items-center gap-4 mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded font-medium cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
                {
                    cartItems.length === 0 && <h2 className="text-xl font-semibold text-gray-600">Your cart is empty</h2>
                }
                <ItemCard items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;