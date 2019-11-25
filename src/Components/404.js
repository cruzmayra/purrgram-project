import React from 'react'
import { Link } from 'react-router-dom'

const DontFound = () => {
  return (
    <div className="container is-fullhd dontFound has-background-white-bis">
      <h1 class="title">Oops!</h1>
      <h2 class="subtitle">There is nothing to show</h2>
      <Link to="/home">
        <button class="button is-primary">Go to Home</button>
      </Link>
    </div>
  )
}

export default DontFound