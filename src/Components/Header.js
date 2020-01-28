import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, View, Image } from 'react-native'

import Logo from '../logo_app_.png'

const styles = StyleSheet.create({
	navbar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 2,
    maxHeight: 80,
    padding: 20,
    zIndex: 30
	}
})

export function Header() {
  return (
    <View  style={styles.navbar}>
      <Link to="/home">
        <Image source={ Logo } style={{width: 110, height: 50}} />
      </Link>
    </View>
  )
}
