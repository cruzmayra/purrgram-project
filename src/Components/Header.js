import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo_app_.png'

const Header = () => {
  return (
    <nav className="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/home">
          <img src={Logo} alt="logo_nasagram" width="110" height="30" />
        </Link>
      </div>
    </nav>
  )
}

export default Header