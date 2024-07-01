import React from "react";
import logo from "../assets/airbnb1.png";

function Navbar(){
    return(
        <div className="flex bg-gray-100 shadow-xl py-4 px-9">   
            <img src={logo}/>
        </div>
        
    )
}

export default Navbar;