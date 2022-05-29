import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
          <li>
            <NavLink to="/genres">Genres</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav;