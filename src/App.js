import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import Home from './Containers/Home'
import Profile from './Containers/Profile'
import './App.css'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><div>loggeate</div></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/:id"><Profile /></Route>
      </Switch>
    </div>
  );
}

export default App;
