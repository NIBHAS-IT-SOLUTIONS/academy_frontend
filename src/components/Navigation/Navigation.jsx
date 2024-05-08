import React, { useEffect } from 'react'
import './Navigation.css'

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
      
      <a href="#" className='logo'><i class="ri-home-7-line"></i><span>Logo</span></a>

      <ul className='navbar'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Info pedia</a></li>
        <li><a href="">IQ Test</a></li>
        <li><a href="">Scholarship</a></li>
      </ul>

<div className="main">
  <a href="#" className='user'><i class="ri-user-line"></i>Sign in</a>
  <a href=""><i class="ri-user-line"></i>Login</a>
 
 <div className='bx bx-menu' id='menu-icon'></div>
</div>

     </header>
      
    </>
   
  )
}

export default Navigation

