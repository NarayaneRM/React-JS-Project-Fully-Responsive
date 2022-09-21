import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
         <Link to='/' className='navbar-logo'>
            TRVL <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Link>    
        </div>
    </nav>
    </>
  )
}
 
export default Navbar