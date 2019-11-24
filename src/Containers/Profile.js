import React from 'react'

// Components
import ProfileCard from '../Components/ProfileCard'
import ListCards from '../Components/ListCards'

const Profile = () => {
  return(
    <div className="container is-fullhd profile-container">
      <ProfileCard />
      <div className="column">
        <ListCards items={ [] }/>
      </div>
    </div>
  )
}

export default Profile
