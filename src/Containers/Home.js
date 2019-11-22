import React, { useState, useEffect } from 'react'

// Components
import ListCards from '../Components/ListCards'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    var url = 'https://images-api.nasa.gov/search?q=all';
 
    fetch( url )
        .then( r => r.json() )
        .then( data => setItems( data.collection.items ) )
        .catch( e => console.error( 'Something went wrong' ) );
      }, [])

  return (
    <div className="columns is-vcentered has-background-light is-flex">
      <div className="column is-9 items-container is-flex">
        <ListCards items={items}/>
      </div>
      <div className="column">
        <p className="bd-notification is-primary">Second column with more content. This is so you can see the vertical alignment.</p>
      </div>
    </div>
  )
}

export default Home