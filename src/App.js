import React, { Component, useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Containers/LoginForm";
import DesktopContainer from "./Containers/DesktopContainer"
import { Route, Switch } from 'react-router-dom'
const usersUrl = 'http://localhost:3000/users/'

function App() {
  // const [loggedInUser, setLoggedInUser] = useState(false)
  //testing. Uncomment above and delete line below when ready to deploy.
  
  
  const [loggedInUser, setLoggedInUser] = useState(
    {id: 1,
    username: 'mar',
    email: "myemail@email.com"
  }
  )

  const [userArr, setUserArr] = useState([])
  
  const fetchUsers = () => {
    fetch(usersUrl)
    .then(res => res.json())
    .then(data => setUserArr(data));
  }
  

  useEffect(() => { fetchUsers()}, [])
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
      <Route path="/" exact render={() => <LoginForm user={loggedInUser} loginUser={userLoggedIn}/>} />
      <Route path="/desktop" render={() => (loggedInUser? <DesktopContainer loggedinUser={loggedInUser}/> : false)} />
      
    </Switch>
  )
}

export default App;
