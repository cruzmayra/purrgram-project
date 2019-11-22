import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import Home from './Containers/Home'

import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><div>loggeate</div></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/usuario"><div>los favoritos</div></Route>
      </Switch>
    </div>
  );
}

export default App;
