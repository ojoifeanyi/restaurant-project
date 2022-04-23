import React from 'react';
import {Link} from 'react-router-dom';
import Navbutton from '../button/Navbutton';
import './style.css';

function Navbar() {
  return (
   
    <div className="navbar-wrapper">
       <div className="logo-container">
           <span> <Link to='/home' className='activelink'>Zeppto</Link></span>
       </div>
      
       <div className='link'>
           <ul>
               <li>solutions</li>
               <li>
               <Link to='/about' className='activelink'>About Us</Link>
                 </li>
               <li>Blog</li>
               <li><Navbutton /></li>
           </ul>
          
       </div>
        </div>
       
  )
}

export default Navbar