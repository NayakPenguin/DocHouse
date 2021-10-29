import React,{useState} from 'react'
import DocLogin from './components/DocLogin'
import Login from './components/Login'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/doc-register">
          <DocLogin/>
        </Route>
        <Route exact path="/doc-login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
