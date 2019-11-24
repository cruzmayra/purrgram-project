import React, { useState, useEffect } from 'react'

// Components
import ListCards from '../Components/ListCards'
import ProfileCard from '../Components/ProfileCard'

const accessKey = process.env.REACT_APP_ACCESS_KEY

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    var url = `https://api.unsplash.com/search/photos?query=cats&client_id=${accessKey}`
 
    fetch( url )
        .then( r => r.json() )
        .then( data => setItems(data.results) )
        .catch( e => console.error( 'Something went wrong' ) );
      }, [])
  
  const addFavorites = (id) => {
    const {currentUser} = window.localStorage
    const favUser = window.localStorage.getItem(currentUser)
    const currentFav = items.filter(item => {
      return item.id === id
    })

    if(!favUser) {
      window.localStorage.setItem(currentUser, JSON.stringify(currentFav))
    } else {
      window.localStorage.setItem(currentUser, JSON.stringify([...JSON.parse(favUser), currentFav[0]]))
    }
  }

  return (
    <div className="columns has-background-light is-flex home-container">
      <div className="column is-9 items-container is-flex">
        <ListCards items={items} action={ addFavorites } />
      </div>
      <div className="column">
        <ProfileCard />
      </div>
    </div>
  )
}

export default Home