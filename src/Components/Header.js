import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, View, Image } from 'react-native'

import Logo from '../logo_app_.png'

const styles = StyleSheet.create({
	navbar: {
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    minHeight: 60,
    padding: 20,
    position: 'relative',
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
