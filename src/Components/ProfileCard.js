import React from 'react'
import { Link } from 'react-router-dom'
import ContextUser from '../Context/ContextUser'
import Profile from '../default_profile.png'

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
                <img className="is-rounded" src={Profile} alt="default profile"/>
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
                  See photos of cats that you have saved as favorites.
                  </p>
                  <button className="button is-danger is-small" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </article>
        }
      }
    </ContextUser.Consumer>
  )
}

export default ProfileCard