import React from 'react'
import { Link } from 'react-router-dom'

const PerfilCard = () => {
  return (
    <article className="media">
      <Link to="/john-smith">
        <figure className="media-left">
        <p className="image is-64x64">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
        </figure>
      </Link>
      <div className="media-content">
      <div className="content">
          <p>
          <Link to="/john-smith" className="has-text-dark">
            <strong>John Smith</strong> <small>@johnsmith</small>
          </Link>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
      </div>
      </div>
    </article>
  )
}

export default PerfilCard