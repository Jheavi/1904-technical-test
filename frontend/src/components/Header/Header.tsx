import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header () {
  return (
    <header>
      <h1>TV Shows and Movies</h1>
      <div className="options">
        <Link to="">
          <h2>Movies</h2>
        </Link>
        <Link to="">
          <h2>TV Shows</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
