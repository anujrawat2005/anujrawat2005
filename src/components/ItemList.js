import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Itemlist =({dummy}) => {

    const dispatch = useDispatch();



    const handleAddItems =()=>{
        dispatch(addItem("pizza"));
    }
    console.log(dummy);
    return ( <div>
            <button className="p-2 mx-16 rounded-lg bg-black" onClick={handleAddItems}>add+</button> 
            <div><li>Chicken</li>
            <span>100</span>
            </div>
            <p>This is the best chicken meal in Delhi</p>
        
        
        
        
        </div>
        
        
    );


    
    
};

export default Itemlist;