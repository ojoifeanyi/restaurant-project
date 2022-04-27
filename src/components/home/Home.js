import React from 'react'
import './style.css';
import Button from '../button/Button';
import food from './images/food.jpg';
function Home() {
  return (
    <div className='wrapper'>
        <div className='cta'>
            <h1>
            Restaurant, Sports Bar & Karaoke
            </h1>
            <p>
            Relaxing with your family and loved ones, 
            or having a brief meeting with colleagues and friends? 
            
            </p>
            <Button props={"Order Now"}/>
        </div>

        <div className='cta-illustration'>
        <img className='im' src={food} alt='img'/>
        </div>
        
        </div>
  )
}

export default Home