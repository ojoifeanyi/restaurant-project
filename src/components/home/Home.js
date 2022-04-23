import React from 'react'
import './style.css';
import Button from '../button/Button';
import illustration from './images/illustration.jpg';
function Home() {
  return (
    <div className='wrapper'>
        <div className='cta'>
            <h1>
Boost Sales with the mobile express checkout
            </h1>
            <p>
Zeppto enables express checkout on your e-commerce with no code.
Activate with 
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