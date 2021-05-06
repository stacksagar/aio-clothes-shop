import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css' 
const Header = () => {
 return (
  <menu className="Header">
  <div className="HeaderContainer">
   <Link to="/" className="logo"> LOGO </Link>
   <nav className="options">
    <Link to="shop" className="option"> SHOP </Link>
    <Link to="contact" className="option"> Contact</Link>
    <Link to="signin-signup" className="option"> Signup </Link>
   </nav>
  </div>
  </menu>
 )
}

export default Header
