import React from 'react'
import Logo from '../logo_app_.png'

const Header = () => {
  return (
    <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} alt="logo_nasagram" width="110" height="30" />
        </a>
      </div>
    </nav>
  )
}

export default Header