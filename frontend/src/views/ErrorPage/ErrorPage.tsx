import React from 'react'
import { Link } from 'react-router-dom'
import './errorPage.css'

export default function ErrorPage () {
  return (
    <div className="error-container">
      <span>There was an error, please click button below</span>
      <Link to="/movies">
        <button>Go to Movies list</button>
      </Link>
    </div>
  )
}
