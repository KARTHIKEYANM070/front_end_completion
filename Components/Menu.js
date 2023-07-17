import React from 'react';
import '../Styles/Menu.css';
function Menu() {
  return (
    <div className='Home'>
    <h1 className='head'>Menu</h1>
    <div className='navbar'>
   <ul>
  <li><a href="">Home</a></li>
  <li><a href="">Albums</a></li>
  <li><a href="">Songs</a></li>
  <li><a href="">PlayList</a></li>
  <li><a href="">Account detaills</a></li>
</ul>
</div>
    </div>
  )
}

export  {Menu}