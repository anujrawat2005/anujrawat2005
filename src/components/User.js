import { useEffect, useState } from "react";



const User = ( { name } ) => {

    const[count]= useState(0);
    const[count2]=useState(1);


useEffect(() =>{

},[]);


    return(
        <div className="user-card">
          
            <h3>Name : {name}</h3>
            <h4>Location: New Delhi</h4>
            <h5>Contact:@anujrawat</h5>
        </div>
    );
};


export default User;