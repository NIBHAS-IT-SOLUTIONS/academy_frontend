import React, { useEffect } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
 
  useEffect(()=>{
    let menu =document.querySelector('#menu-icon');
  let navbar =document.querySelector('.navbar')

  menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  }
  })
  
  return (
   
    <>
    
     <header>
      
      <Link to="#" className='logo'><i class="ri-home-7-line"></i><span>Edu Rainbow</span></Link>

      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">About</Link></li>
        <li><Link to="">Info pedia</Link></li>
        <li><Link to="">IQ Test</Link></li>
        <li><Link to="">Scholarship</Link></li>
      </ul>

<div className="main">
  <Link to="#" className='user'>Sign in</Link>
  <Link to="/login" className='login-btn'>Login</Link>
 
 <div className='bx bx-menu' id='menu-icon'></div>
</div>

     </header>
      
    </>
   
  )
}

export default Navigation

