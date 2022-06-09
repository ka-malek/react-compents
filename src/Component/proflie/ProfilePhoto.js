import React from "react";
import picture from './malek.jpg';


const Photo = () => {
	return ( 
        <img className="image" src= {picture} alt='myimage' width={400} height/>
    );
}


export default Photo;