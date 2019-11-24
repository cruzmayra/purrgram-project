import React from 'react'
import { Link } from 'react-router-dom'
import ContextUser from '../Context/ContextUser'

const ProfileCard = () => {

  const handleLogout = () => {
    window.localStorage.removeItem('currentUser')
    window.location.href = "/"
  }

  return (
    <ContextUser.Consumer>
      {
        value => {
          return <article className="media">
            <Link to={`/${value}`}>
              <figure className="media-left">
              <p className="image is-64x64">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
              </figure>
            </Link>
            <div className="media-content">
              <div className="content">
                  <p>
                  <Link to={`/${value}`} className="has-text-dark">
                    <strong>{value}</strong> <small>@{value} </small>
                  </Link>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="has-text-black is-size-6" onClick={handleLogout}>Logout</p>
              </div>
            </div>
          </article>
        }
      }
    </ContextUser.Consumer>
  )
}

export default ProfileCard