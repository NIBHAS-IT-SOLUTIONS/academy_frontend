import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
 const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    let menu =document.querySelector('#menu-icon');
  let navbar =document.querySelector('.navbar')

  menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  }
  })

  

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
   
    <>
    
     <header id='container-header' className={scrolled ? 'change-color' : ''}>
      
      <Link to="/" className='logo'><span>Edu Rainbow</span></Link>

      <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">About</Link></li>
        <li><Link to="">Info pedia</Link></li>
        <li><Link to="/iqtest">IQ Test</Link></li>
        <li><Link to="/scholarship">Scholarship</Link></li>
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

