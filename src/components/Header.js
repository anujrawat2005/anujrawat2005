import { Logo_URL } from "../utils/constant";
import {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
import useOnlineStatus from "../utils/useonlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("login");

    const onlineStatus= useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);


    const cartItems = useSelector((store) => store?.cart?.items); 
        
 
   




    return(
        <div className ="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50"  >
           <div className = "logo-container" >
            <img className="w-40"  src = {Logo_URL}/>
            </div>
            <div className = "flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "yes":"no"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about" >About us
                        </Link>                        
                        </li>
                    <li className="px-4"><Link to="/contact" >Contact us</Link> </li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl">
                        <Link to= "/cart">Cart-({cartItems?.length} Items)</Link>
                        </li>
                    <li className="px-4"><Link to ="/login">Login</Link></li>
                    <button className="login"
                           onClick={() => {
                              btnNameReact === "login" ?
                              setbtnNameReact("logout"):
                              setbtnNameReact("login");
                            console.log(btnNameReact);

                           }}>{btnNameReact}</button>
                    <li className="px-4 my-2 font-bold">{ loggedInUser }  </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;