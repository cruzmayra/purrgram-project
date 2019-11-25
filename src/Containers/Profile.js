import React from 'react'
import ContextUser from '../Context/ContextUser'

// Components
import ProfileCard from '../Components/ProfileCard'
import ListFavorites from '../Components/ListFavorites'

const Profile = () => {

  const removeFav = (ident) => {
    const { currentUser } = window.localStorage
    const favUser = JSON.parse(window.localStorage.getItem(currentUser))
    delete favUser[ident]

    window.localStorage.setItem(currentUser, JSON.stringify(favUser))
  }

  return(
    <ContextUser.Consumer>
      {
        value => {
          return (
            <div className="container is-fullhd profile-container has-background-white-bis">
              <ProfileCard />
              <div className="favorites-container">
                <ListFavorites
                  items={JSON.parse(window.localStorage.getItem(value))}
                  action={removeFav}
                  callTo="Remove to favorites" />
              </div>
            </div>
          )
        }
      }
    </ContextUser.Consumer>
  )
}

export default Profile
