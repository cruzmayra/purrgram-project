import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import ErrorCat from '../sad-error-cat.png'

export function DontFound () {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ height:150, width: 150}}
        source={ErrorCat}
        alt="sad cat"/>
      <Text
        style={{color: "#363636", fontSize: 32, fontWeight: 600, marginBottom: 20 }}>
        Oops!
      </Text>
      <Text
        style={{ color: "#4a4a4a", fontSize: 20, fontWeight: 400, marginBottom: 20 }}>
        There is nothing to show
      </Text>
      <Button
        color="#00d1b2"
        title="Go to Home"
        onPress={() => window.location.href= "/home"}
      />
    </View>
  )
}
