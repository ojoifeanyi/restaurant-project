import React from 'react'
import './style.css';
import Button from '../button/Button';
import food from './images/food.jpg';
function Home() {
  return (
    <div className='wrapper'>
        <div className='cta'>
            <h1>
            Restaurant, Bar & Karaoke
            </h1>
            <p>
            Drelax with your family and loved ones, 
            or better still have a brief meeting with colleagues and friends.
            </p>
            <Button props={"Order Now"}/>
        </div>

        <div className='cta-illustration'>
        <img className='imm' src={food} alt='img'/>
        </div>
        
        </div>
  )
}

export default Home