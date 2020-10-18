import React, { Component, useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Containers/LoginForm";
import DesktopContainer from "./Containers/DesktopContainer"
import { Route, Switch } from 'react-router-dom'
const baseGadgetsUrl = 'http://localhost:3000/base_gadgets/'
const usersUrl = 'http://localhost:3000/users/'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false)
  const [baseGadgets, setBaseGadgets] = useState([])
  const [userArr, setUserArr] = useState([])

  const fetchData = () => {
    fetch(usersUrl)
    .then(res => res.json())
    .then(data => setUserArr(data));

    fetch(baseGadgetsUrl)
    .then(res => res.json())
    .then(data => setBaseGadgets(data));
  }

  useEffect(() => { fetchData()}, [])

  const userLoggedIn = (username, password) => {
    // setLoggedInUser(username)

    let currentUser = userArr.find(user => user.username === username)
    if (currentUser && currentUser.password === password) {
      setLoggedInUser(currentUser)
    } else {
      alert('login failed')
    }
  }

  return(
    <Switch>
      <Route path="/" exact render={() => <LoginForm user={loggedInUser} loginUser={userLoggedIn} usersArr={userArr}/>} />
      <Route path="/desktop" render={() => (loggedInUser? <DesktopContainer loggedinUser={loggedInUser} baseGadgets={baseGadgets}/> : false)} />
      
    </Switch>
  )
}

export default App;
