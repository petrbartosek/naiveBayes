import React from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <ul className='menu'>
        <li><NavLink to='/training'>Model training</NavLink></li>
        <li><NavLink to='/classifier'>Classifier</NavLink></li>
        <li><NavLink to='/'>Presentation</NavLink></li>
    </ul>
  )
}

export default Menu