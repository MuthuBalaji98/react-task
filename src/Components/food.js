import { useState } from 'react';
import './food.css';


function Food(props){
        const [price,setPrice]=useState(props.price);
        const clickHandler =()=>{
            let newPrice=(props.price-(props.offer/100)*props.price);
           setPrice(newPrice);
        }
    return(
        <a>
        <div className='food-box'>
            <div className='food-img'>
            <img src={props.img} alt="" />    
            </div>
            <p className='hotel-name'>{props.name}</p>
            <p className='variety'>{props.item}</p>
            <div className='food-wrap'>
            <p className='rating'>3.5</p>
            <p className='min'>35mins</p>
            <p className='price'>{"₹ "}{price}</p>
            </div>
            <p className='offers'>{props.offer}{" % Offer"}</p>
            <button onClick={clickHandler}> button
            </button>
        </div></a>
    )
}
export default Food;