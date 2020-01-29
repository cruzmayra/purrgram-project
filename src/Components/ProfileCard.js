import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import ContextUser from '../Context/ContextUser'
import Profile from '../default_profile.png'

const styles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80
  }
})

export default function ProfileCard () {

  function handleLogout () {
    window.localStorage.removeItem('currentUser')
    window.location.href = "/"
  }

  return (
    <ContextUser.Consumer>
      {
        value => {
          return <View style={{ flex: 1, flexDirection: "row", padding: 20}}>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Link to={`/${value}`}>
                <Image
                  style={ styles.avatar }
                  source={Profile}
                  alt="default profile"
                />
              </Link>
            </View>
            <View style={{ flex: 4 }}>
              <Link to={`/${value}`}>
                <Text>
                  @{value}
                </Text>
              </Link>
              <br />
              <Text
                style={{ fontSize: 16, color: "#4a4a4a", fontWeight: 400 }}>
                See photos of cats that you have saved as favorites.
              </Text>
              <br />
              <View style={{ width: 200}}>
                <Button
                  color="#F0395F"
                  title="Logout"
                  onPress={handleLogout}
                />
              </View>
            </View>
          </View>
        }
      }
    </ContextUser.Consumer>
  )
}
