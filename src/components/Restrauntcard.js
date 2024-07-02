import { useContext } from "react";
import  { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Restrauntcard = (props) => {
    const {resdata}=props;
    const{ name,cloudinaryImageId,avgRatingString,costfortwo,deliveryTime,cuisines}=resdata?.info;

    const { loggedInUser } = useContext(UserContext);
   
    return(
        <div className="m-4 p-4 w-[250px]  rounded-lg bg-gray-50 hover:bg-gray-100 "   > 
         <img className="rounded-lg" 
         alt ="restraunt-logo" src={CDN_URL+cloudinaryImageId}
         />
          <h1 className="font-bold py-4 text-lg">{name}</h1>
          <h2>{cuisines.join(",")}</h2>
          <h3>{avgRatingString}</h3>
          <h4>{costfortwo}</h4>
          <h5>{deliveryTime} minutes</h5>
          <h6> User:{loggedInUser}</h6>
          
        </div>
    );
};


//High order component 

// input - Restrauntcard=>> Restrauntpromotedlabel
 export const withPromotedlabel = () => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 *:rounded-lg">promoted</label>
                <Restrauntcard {...props}/>
            </div>
        );
    };
};
export  default Restrauntcard;