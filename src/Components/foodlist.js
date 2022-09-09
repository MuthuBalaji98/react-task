import React from 'react';
import './foodlist.css';
import Foods from './food';
// import img1 from "./images/food image-1.jpg";
// import img2 from "./images/food image-2.jpg";
// import img3 from "./images/food image-3.jpg";
// import img4 from "./images/food image-4.jpg";
// import img5 from "./images/food image-5.jpg";
// import img6 from "./images/food image-6.jpg";

function FoodList(props){
    return(<>
    {
        (props.foods.length===0|| props.foods.length<2)&&<p>please add food</p>
    }
    {
        props.foods.length>0?(props.foods.map((foods)=>{
            return<Foods key={foods.id}
            name={foods.name} 
            item={foods.item}
            offer={foods.offer}
            price={foods.price}>
            </Foods>
        })):<div className='body-con'><p>No Foods Found</p></div>
    }
    </>);
}

export default FoodList;