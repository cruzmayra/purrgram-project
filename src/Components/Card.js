import React from 'react'
import {StyleSheet, View, Image, Text, Button } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
    display: "flex",
    flexDirection: "column",
    margin: 15,
    maxWidth: 230,
    width: "90%"
  },
  cardHeader: {
    height: 200,
    width: "100%",
    resizeMode: 'cover'
  },
  cardDescription: {
    padding: 24,
    flex: 1
  }
})

export default function Card ({description, image, id, action, callTo}) {
  return (
    <View 
      style={styles.card}
      className="card item-card">
      <Image
        source={image}
        alt={description}
        style={ styles.cardHeader }
      />
      <View style={ styles.cardDescription }>
        <Text style={{ flex: 4, margin: 10, color: "#363636", fontSize: 16 }}>
          {description}
        </Text>
        <Button
          style={{ flex: 2}}
          title={callTo}
          color="#00d1b2"
          onPress={() => action(id)}
        />
      </View>
    </View>
  )
}
