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
  
  const addFavorites = (ident) => {
    const { currentUser } = window.localStorage
    const favUser = JSON.parse(window.localStorage.getItem(currentUser))
    const currentFav = items.filter(item => {
      return item.id === ident
    })
    const {id, alt_description, urls} = currentFav[0]
    const obj = {
      [id]: {
        description: alt_description, 
        image: urls['small']
      }
    }

    if(!favUser) {
      window.localStorage.setItem(currentUser, JSON.stringify(obj))
    } else {
      favUser[id] = {
        description: alt_description, 
        image: urls['small']
      }
      window.localStorage.setItem(currentUser, JSON.stringify(favUser))
    }
  }

  return (
    <div className="columns has-background-white-bis is-flex home-container">
      <div className="column is-9 items-container is-flex">
        <ListCards items={items} action={ addFavorites } callTo="Add to Favorites"/>
      </div>
      <div className="column">
        <ProfileCard />
      </div>
    </div>
  )
}

export default Home