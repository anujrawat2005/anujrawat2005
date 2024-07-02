import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestrauntCategory from "./RestrauntCategory";
import Itemlist from "./Itemlist";





const RestrauntMenu = () => {

    
   const { resId }=useParams();

   const dummy = "dummy data";


   const resInfo = useRestaurantMenu(resId);
   


  


   if( resInfo === null) return<Shimmer/>


    const  {name,cuisines,costForTwoMessage} = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]?.card?.card?.info;
    
const categories =  resInfo?.cards[1]?.card?.card?.info.filter(
(c) => 
c.cards[0]?.["card"]?.card["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget");
console.log(categories);


    return  (
        <div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <p className="font-bold text-lg mx -4">{cuisines .join(",")}-{costForTwoMessage}
            </p>
            <RestrauntCategory />
            <Itemlist/>
           

           
        </div>
    );
};

export default RestrauntMenu;
    