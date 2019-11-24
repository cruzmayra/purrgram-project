import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ContextUser  from './Context/ContextUser'

// Components
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Containers/Home'
import Profile from './Containers/Profile'
import Login from './Containers/Login'
import './App.css'
import 'bulma/css/bulma.css'

function App() {
  const {currentUser} = window.localStorage

  const handleChange = (e) => {
    window.localStorage.setItem('currentUser', e.target.value)
  }

  return (
    <ContextUser.Provider value={ currentUser }>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login handleChange={handleChange} />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/:id">
            <Profile />
          </PrivateRoute>
        </Switch>
      </div>
    </ContextUser.Provider>
  );
}

export default App;
