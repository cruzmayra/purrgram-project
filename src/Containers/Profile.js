import React from 'react'
import ContextUser from '../Context/ContextUser'
import { StyleSheet, View } from 'react-native'

// Components
import ProfileCard from '../Components/ProfileCard'
import ListFavorites from '../Components/ListFavorites'

const styles = StyleSheet.create({
  favContainer: { 
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20
  }
})

export function Profile () {

  function removeFav (ident) {
    const { currentUser } = window.localStorage
    const favUser = JSON.parse(window.localStorage.getItem(currentUser))
    delete favUser[ident]

    window.localStorage.setItem(currentUser, JSON.stringify(favUser))
  }

  return(
    <ContextUser.Consumer>
      {
        value => {
          return (
            <View >
              <ProfileCard />
              <View style={ styles.favContainer }>
                <ListFavorites
                  items={JSON.parse(window.localStorage.getItem(value))}
                  action={removeFav}
                  callTo="Remove to favorites" />
              </View>
            </ View>
          )
        }
      }
    </ContextUser.Consumer>
  )
}
