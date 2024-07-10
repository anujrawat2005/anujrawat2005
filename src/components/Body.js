import Restrauntcard ,{withPromotedlabel} from "./Restrauntcard";
import {   useState , useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useonlinestatus";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";




function Body() {   

   //local state variable-superpowerful state variabless
   const [listofRestraunts, setlistofRestraunts] = useState([]);
   const [filteredRestraunts, setfilteredRestraunts] = useState([]);

   const [searchText, setsearchText] = useState("");

   

   const RestrauntcardPromoted = withPromotedlabel(Restrauntcard);

   //whenever the state variable updates ,react triggered cycle (re-render the component)
   console.log("Body Rendered", listofRestraunts);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      

      const json = await data.json();
      console.log(json);

      

      setlistofRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setfilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   };

   const onlineStatus = useOnlineStatus();
   if( onlineStatus === false)
      return(
   <h1>Looks like you are offline,Please check your internet connection</h1>
      );

   const{loggedInUser,setUserName}= useContext(UserContext);

   


   return listofRestraunts.length === 0 ? 
     <Shimmer /> :

      (
         <div className="Body ">
            <div className="filter flex">
               <div className="search m-4 p-4">
                  <input type="text" className="border border-solid border-black" placeholder="Resname" value={searchText}
                     onChange={(e) => {
                        setsearchText(e.target.value);
                      } } />
                  <button className="px-4 py-4 bg-green-50 m-4 rounded-lg"
                  onClick={() => {
                     console.log(searchText);

                     const filteredRestraunts = listofRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );
                     setfilteredRestraunts(filteredRestraunts);







                  } }
                  >Search</button>
               </div>
               <div className="search m-4 p-4 flex items-center" >
               <button className=" px-2 py-2 bg-yellow-50 m-4 rounded-lg"
                  onClick={() => {
                     const filteredList = listofRestraunts.filter(
                        (res) => res.info.avgRatingString > 4.5);
                     setlistofRestraunts(filteredList);


                  } }
               >Top rated restaurants
               </button>
               <label>Username</label>
               <input className="border border-black m-2"
               value={loggedInUser}
               onChange={(e)=>setUserName(e.target.value)}/>

               </div>
               
            </div>
            <div className="flex flex-wrap">
               {filteredRestraunts.map((restraunt) => (
                  <Link
                  key={restraunt.info.id}
                  to={"/restaurants/"+restraunt.info.id} >
                     {
                        restraunt.info. isOpen ?( <RestrauntcardPromoted resdata = {restraunt}/>) : (
                        <Restrauntcard resdata = {restraunt}/>
                        )
                     }
                  
                   </Link>
               ))}
            </div>
         </div>
      );
}
export default Body;