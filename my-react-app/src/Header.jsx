import React from 'react'
import './Styles/Header.css';

const Header = () => {
  return (
    <nav className='Topnav'>
      <a href="#" className='brand'>Portfolio</a>
      <ul>
        <li className='active'><a href="#">Home </a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
      </ul>

    </nav>
  )
}

export default Header
