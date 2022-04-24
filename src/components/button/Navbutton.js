import React from 'react'
import './button.css';
import {Link} from 'react-router-dom';
import Button from './Button';
function Navbutton() {
  return (
    <div>
        <Link to='/contact' className='activelink'>  <Button props={"Contact"} /> </Link>
    </div>
  )
}

export default Navbutton