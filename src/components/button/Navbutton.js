import React from 'react'
import './button.css';
import {Link} from 'react-router-dom';
function Navbutton() {
  return (
    <div>
        <Link to='/contact' className='activelink'>  <button>Contact Us</button></Link>
    </div>
  )
}

export default Navbutton