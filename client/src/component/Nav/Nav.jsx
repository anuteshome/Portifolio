import React from 'react'
import { Link } from 'react-scroll';
import './Nav.css'

function Nav() {
  return (


    <div id='nav'>
  <nav className='naving' style={{ position: 'fixed', top: '10px', right:'90', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1 ,fontFamily: 'Arial, sans-serif',marginLeft:'25rem'}}>
        <Link to="nav" smooth={true} duration={500} style={{ color:'chocolate', fontSize:'0.9rem', margin: '0 15px', textDecoration: 'none',fontFamily: 'Arial, sans-serif', textAlign:'right'}}>Home</Link>
        <Link to="about"  smooth={true} duration={500} style={{ fontSize:'0.9rem', margin: '0 15px', color: 'white', textDecoration: 'none',fontFamily: 'Arial, sans-serif' }}>About</Link>
        <Link to="project" smooth={true} duration={500} style={{ fontSize:'0.9rem', margin: '0 15px', color: 'white', textDecoration: 'none',fontFamily: 'Arial, sans-serif' }}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} style={{ fontSize:'0.9rem', margin: '0 15px', color: 'white', textDecoration: 'none',fontFamily: 'Arial, sans-serif' }}>Contact Us</Link>
      </nav>
    </div>
  
  )
}

export default Nav