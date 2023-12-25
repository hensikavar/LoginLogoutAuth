import React from 'react'
import logo from '../images/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=''/>
      <ul className='nav-menu'>
        <Link to={"/signin"}><li>Sign In</li></Link>
        <Link to={"/signup"}><li>Sign Up</li></Link>
        <Link to={"/profile"}><li>Profile</li></Link>
        <Link to={"/createpost"}><li>Create Post</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
