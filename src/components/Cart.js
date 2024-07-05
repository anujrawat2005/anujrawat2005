import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
        const cartItems= useSelector((store)=>store?.cart?.items)
    

const dispatch = useDispatch();

const handleclearcart = () =>{
    dispatch(clearCart());
}





    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="m-2 p-2 bg-black text-white rounded-lg"  onClick={handleclearcart}>Clear cart</button>
        {cartItems?.length===0 && (<h1>Your cart is empty please add some food to it</h1>)}
        <div className="w-6/12 m-auto">
            <Itemlist />
        </div>
    </div>;


};

export default Cart;