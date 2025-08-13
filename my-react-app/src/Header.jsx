import React from 'react'
import './Styles/Header.css';

const Header = () => {
  return (
    <nav className='Topnav'>
      <a href="#" className='brand'>Portfolio</a>
      <ul>
        <li className='active'><a href="#">Home </a></li>
        <li><a href="about">About</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="techstack">Stack</a></li>
      </ul>

    </nav>
  )
}

export default Header
