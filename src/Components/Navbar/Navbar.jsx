import React from 'react'
import {Link} from 'react-router-dom';
import './file.css';

export const Navbar = () => {
  return (
    <div className='section'>
     <nav className='nav'>
        <ul className='nav_ul'>
           <li className='home'><Link to='/'/>Home</li>
            <li className='about'><Link to='/about'/>About</li>
            <li className='contact'><Link to='/contact'/>Contact</li>
            <li className='profile'><Link to='/profile'/>Profile</li>
          
        </ul>
     </nav>
    </div>
    
        
   
  )
}
