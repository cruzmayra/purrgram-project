import React from 'react'
import { Text } from 'react-native'

// Components
import Card from './Card'

export function ListCards ({items, action, callTo}) {

  if(!items) return (<Text>Oops! Something went wrong.</Text>)

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
