import React from "react";
import './Card.css';
const Card =({emoji,heading,details})=>{
    return(
<div className="card">
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{details}</span>
    <button className="c-button"><a href="https://www.bing.com/search?q=details+about+css%2chtml%2cjavascript&FORM=AWRE">LEARN MORE</a></button>
</div>
    )
}

export default Card;