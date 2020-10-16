import React, { Component, useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Containers/LoginForm";
import DesktopContainer from "./Containers/DesktopContainer"
import { Route, Switch } from 'react-router-dom'

function App() {
  const [loggedInUser, setloggedInUser] = useState(false)

  const userLoggedIn = (user) => {
    setloggedInUser(user)
    console.log(user)
  }
  return(
    <Switch>
      <Route path="/" exact render={() => <LoginForm user={loggedInUser} loginUser={userLoggedIn}/>} />
      <Route path="/desktop" component={DesktopContainer} />
    </Switch>
  )
}

export default App;
