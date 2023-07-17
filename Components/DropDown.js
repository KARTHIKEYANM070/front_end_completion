import React from 'react';
import '../Styles/DropDown.css';
import { Link } from 'react-router-dom';
function DropDown() {
  return (
      <div className='DROPDOWN'>
      <ul className='DROP_DOWNA'>
      <Link to='/profile'><button><li style={{fontSize:"20px"}}>Profile</li></button></Link>
      <Link to='/login'><button><li style={{fontSize:"20px"}}>LogOut</li></button></Link>
      </ul>      
      </div>
   
  );
}

export default DropDown;