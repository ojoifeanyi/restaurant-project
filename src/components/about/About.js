import React from 'react'
import './style.css';
import Button from '../button/Button';
import illustration from './images/illustration.jpg';
function Home() {
  return (
    <div className='wrapper'>
        <div className='cta'>
            <h1>
About
            </h1>
            <p>
This Is About
            </p>
            <Button />
        </div>

        <div className='cta-illustration'>
        <img src={illustration} alt='img'/>
        </div>
        
        </div>
  )
}

export default Home