import React from 'react'
import './style.css';
import food4 from './images/food4.jpeg';
import food3 from './images/food3.jpg';
import food2 from './images/food2.jpeg';
import food1 from './images/Food1.jpeg';
import food from './images/food.jpg';

function About() {
  return (
    <div>
            <h1 className='cen'>
          About Us
            </h1>

            <p className="text">
            Founded in April of 2022 and based in Port Harcourt, Nigeria, Toppers believes that the atmosphere of every meal makes a great meal. Inspired by the love built and felt from a good family meal time, Toppers takes a step futher to create an evironment where food is not only eaten but shared and felt. By creating a restaurant with thoughtful and professionally trained chefs for business and classy moments, a Sports bar & Karaoke for family and friends create and strengthen bond over a good meal, Toppers is the standard for food are made for the heart. 
             
             </p>

             <div className='aboutimages'>
           <img className='img' src={food4} alt='img'/>
           <img className='img' src={food3} alt='img'/>
           <img className='img' src={food2} alt='img'/>
           <img className='img' src={food1} alt='img'/>
           <img className='img' src={food} alt='img'/>
           </div>
        </div>
           
        

  )
}

export default About ;