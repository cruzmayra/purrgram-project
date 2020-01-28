import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { View } from "react-native"
import ContextUser  from './Context/ContextUser'

// Components
import { Header } from './Components/Header'
import DontFound from './Components/404'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Containers/Home'
import Profile from './Containers/Profile'
import Login from './Containers/Login'

export function App() {
  const {currentUser} = window.localStorage

  function handleChange(e) {
    window.localStorage.setItem('currentUser', e.target.value)
  }

  return (
    <ContextUser.Provider value={ currentUser }>
      <View style={{ flex: 1, backgroundColor: "#fafafa"}}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login handleChange={handleChange} />
          </Route>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/:id">
            <Profile />
          </PrivateRoute>
          <Route>
            <DontFound />
          </Route>
        </Switch>
      </View>
    </ContextUser.Provider>
  );
}
