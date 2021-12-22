import React,{useState} from 'react'
import DocLogin from './components/DocLogin'
import Login from './components/Login'
import Home from './components/Home'
import PatientLogin from './components/PatientLogin'
import Patientregister from './components/Patient-register'
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
        <Route exact path="/patient-login">
          <PatientLogin/>
        </Route>
        <Route exact path="/patient-register">
          <Patientregister/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
