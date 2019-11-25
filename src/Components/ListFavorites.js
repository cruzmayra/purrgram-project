import React from 'react'

// Components
import Card from './Card'

const ListFavorites = ({items, action, callTo}) => {

  if(!items) return (<h3 class="title is-3">You don't have favorites yet.</h3>)

  if(items) {
    let valueFav = Object.values(items)
    let keyFav = Object.keys(items)

    return (
      valueFav.map((fav, indx) => {
        return (
          <Card
          key={keyFav[indx]}
          description={fav.description}
          image={fav.image}
          id={keyFav[indx]}
          action={action}
          callTo={callTo}
        />
        )
      })
    )
  }
}

export default ListFavorites