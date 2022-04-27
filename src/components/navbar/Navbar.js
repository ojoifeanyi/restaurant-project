import React from 'react';
import {Link} from 'react-router-dom';
import Navbutton from '../button/Navbutton';

import './style.css';

function Navbar() {
  return (
   
    <div className="navbar-wrapper">
       <div className="logo-container">
           <span> <Link to='/' className='activelink'>TOPPERS</Link></span>
       </div>
      
       <div className='link'>
           <ul>
               <li>  <Link to='/restaurant-project' className='activelink'>Home</Link></li>
               <li>
               <Link to='/about' className='activelink'>About</Link>
                 </li>
               <li>  <Link to='/product' className='activelink'>Products</Link></li>
               <li><Navbutton /></li>
           </ul>
       </div>

       <div> 
       <div className='link-mobile-show'>
           <ul>
               <li>  <Link to='/' className='activelink'>Home</Link></li>
               <li>
               <Link to='/about' className='activelink'>About</Link>
                 </li>
               <li>  <Link to='/product' className='activelink'>Products</Link></li>
               <li>  <Link to='/contact' className='activelink'>Contact</Link></li>
             
           </ul>
       </div>
       
       </div>
        </div>
       
  )
}

export default Navbar