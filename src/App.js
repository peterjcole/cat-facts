import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Facts from './components/Facts'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Facts />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
