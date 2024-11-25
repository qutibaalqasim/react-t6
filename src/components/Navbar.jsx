import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Auth App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/register'}>Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
