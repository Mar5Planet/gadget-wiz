import React, { Component, useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Containers/LoginForm";
import DesktopContainer from "./Containers/DesktopContainer"
import { Route, Switch } from 'react-router-dom'
const baseGadgetsUrl = 'http://localhost:3000/base_gadgets/'
const usersUrl = 'http://localhost:3000/users/'

function App() {
  const [loggedInUser, setloggedInUser] = useState(false)
  const [baseGadgets, setbaseGadgets] = useState([])

  const fetchBaseGadgets = () => {
    fetch(baseGadgetsUrl)
    .then(res => res.json())
    .then(data => setbaseGadgets(data));
  }
  useEffect(() => { fetchBaseGadgets()}, [])

  const userLoggedIn = (user) => {
    setloggedInUser(user)
  }

  return(
    <Switch>
      <Route path="/" exact render={() => <LoginForm user={loggedInUser} loginUser={userLoggedIn}/>} />
      <Route path="/desktop" render={() => <DesktopContainer baseGadgets={baseGadgets}/>} />
    </Switch>
  )
}

export default App;
