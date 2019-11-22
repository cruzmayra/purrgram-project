import React, { useState, useEffect } from 'react'


const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    var url = 'https://images-api.nasa.gov/search?q=all';
 
    fetch( url )
        .then( r => r.json() )
        .then( data => setItems( data.collection.items ) )
        .catch( e => console.error( 'Something went wrong' ) );
      })

  return (
    <div className="container is-fullhd">
        <div className="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
        </div>
    </div>
  )
}

export default Home