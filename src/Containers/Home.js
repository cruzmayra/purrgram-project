import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import { ListCards } from '../Components/ListCards'
import ProfileCard from '../Components/ProfileCard'

const accessKey = process.env.REACT_APP_ACCESS_KEY

const styles = StyleSheet.create({
  catsContainer: { 
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20}
})

export function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    var url = `https://api.unsplash.com/search/photos?query=cats&client_id=${accessKey}`
 
    fetch( url )
        .then( r => r.json() )
        .then( data => setItems(data.results) )
        .catch( e => console.error( 'Something went wrong' ) );
      }, [])
  
  function addFavorites(ident) {
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
    <View style={{ flex: 1, flexDirection: "row"}} >
      <View style={styles.catsContainer}>
        <ListCards
          items={items}
          action={ addFavorites }
          callTo="Add to Favorites"
        />
      </View>
      <View style={{ flex: 2 }}>
        {/* <ProfileCard /> */}
      </View>
    </View>
  )
}
