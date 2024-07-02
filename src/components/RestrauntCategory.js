import Itemlist from "./Itemlist";
import {useState}  from "react";

const RestrauntCategory = () =>{

    const[showItems,setshowItems]= useState(false);




    const handleclick = () => {
        setshowItems(!showItems);
    }
      



    return (
        <div>
            <div className="bg-white shadow-lg w-6/12 m-auto justify-between p-4 cursor-pointer  " onClick={handleclick}>
                <span className="font-bold text-lg" >Recomeneded (4)  </span>
               <div className="bg-white shadow-lg w-6/12 m-auto justify-between p-4 ">
                <span className="font-bold text-lg">Deserts (20)</span>
               </div>
              {showItems && <Itemlist/> }
              
                
            </div>
        </div>
    );

};

export default RestrauntCategory;