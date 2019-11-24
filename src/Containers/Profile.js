import React from 'react'
import ContextUser from '../Context/ContextUser'


// Components
import ProfileCard from '../Components/ProfileCard'
import ListCards from '../Components/ListCards'

const Profile = () => {
  return(
    <ContextUser.Consumer>
      {
        value => {
          return (
            <div className="container is-fullhd profile-container">
              <ProfileCard />
              <div className="favorites-container">
                <ListCards items={ JSON.parse(window.localStorage.getItem(value)) }/>
              </div>
            </div>
          )
        }
      }
    </ContextUser.Consumer>
  )
}

export default Profile
