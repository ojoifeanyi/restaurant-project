import React from 'react'
import './style.css';
import food from './images/food.jpg';
function Product() {
  return (
    <div className='wrapper'>
             <div className='card'>
        <div><img className='im2' src={food} alt='img'/></div>
        <div className='card-des'>Jellof Rice</div>
        <div><span>Order</span></div>
        </div>

        

        

        </div>
  )
}

export default Product ;