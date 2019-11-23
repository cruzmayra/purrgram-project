import React, { useState, useEffect } from 'react'

// Components
import ListCards from '../Components/ListCards'
import PerfilCard from '../Components/PerfilCard'

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

  return (
    <div className="columns has-background-light is-flex home-container">
      <div className="column is-9 items-container is-flex">
        <ListCards items={items}/>
      </div>
      <div className="column">
        <PerfilCard />
      </div>
    </div>
  )
}

export default Home