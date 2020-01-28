import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from "react-native"
import ContextUser from '../Context/ContextUser'

const styles = StyleSheet.create({
  containerForm: {
    justifyContent: "space-around",
    height: 150,
    maxWidth: 600,
    width: "90%"
  },
	title: {
    color: "#363636",
    fontSize: 32,
    fontWeight: 600
  },
  input: {
    backgroundColor: "#fff",
    border: "1px solid #dbdbdb",
    borderRadius: 4,
    color: "#363636",
    height: 40
  }
})

const Login = ({handleChange}) => {
  return (
    <ContextUser.Consumer>
      {
        value => {
          return (
            <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }} >
              <View style={ styles.containerForm }  >
                <Text style={ styles.title }>Enter and enjoy beautiful images of cats.</Text>
                <TextInput style={ styles.input } onChange={ handleChange } />
                <Button color="#00d1b2" title="Login" onPress={() => window.location.href= "/home"} />
              </View>
            </View>
          )
        }
      }
    </ContextUser.Consumer>
  )
}

export default Login