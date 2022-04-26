import React from 'react'
import './style.css';
import food from './images/food.jpg';
import frice from './images/frice.jpg';
import vsoup from './images/vsoup.jpg';
import ind from './images/ind.jpg';
function Product() {
  return (
    <div class="row">
    <div class="column">
      <div class="card">
        <h3><img className='im' src={food} alt='img'/></h3>
        <p>Salad Rice</p>
        <p>N5,600</p>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
      <h3><img className='im' src={frice} alt='img'/></h3>
        <p>Fried Rice</p>
        <p>N5,800</p>
      </div>
    </div>
    
    <div class="column">
      <div class="card">
      <h3><img className='im' src={vsoup} alt='img'/></h3>
        <p>Vegetable soup</p>
        <p>N7,600</p>
      </div>
    </div>
    
    <div class="column">
      <div class="card">
      <h3><img className='im' src={ind} alt='img'/></h3>
        <p>Indomine and Egg</p>
        <p>N10,600</p>
      </div>
    </div>
  </div>
  )
}

export default Product ;