import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const appstore =() =>  configureStore ({
    reducer:cartReducer
    
    
    
})

export default appstore;