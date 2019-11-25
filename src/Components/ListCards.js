import React from 'react'

// Components
import Card from './Card'

const ListCards = ({items, action, callTo}) => {

  if(!items) return (<h3 class="title is-3">Oops! Something went wrong.</h3>)

  if(items)
  return (
    items.map((item) => {
      return (
        <Card
          key={item.id}
          description={item.alt_description}
          image={item.urls.small}
          id={item.id}
          action={action}
          callTo={callTo}
        />
      )
    })
  )
}

export default ListCards