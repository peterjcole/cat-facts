import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Facts from './components/Facts'
import Add from './components/Add'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/">
          <Facts />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
