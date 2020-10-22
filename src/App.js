import React, { Component, useState, useEffect } from "react";
import "./windows-95-ui-kit/w95.css"
import "./App.css";
import LoginForm from "./Containers/LoginForm";
import DesktopContainer from "./Containers/DesktopContainer"
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";


const GlobalStyles = createGlobalStyle(
  `
    @font-face {
      font-family: 'ms_sans_serif';
      src: url('${ms_sans_serif}') format('woff2');
      font-weight: 400;
      font-style: normal
    }
    @font-face {
      font-family: 'ms_sans_serif';
      src: url('${ms_sans_serif_bold}') format('woff2');
      font-weight: bold;
      font-style: normal
    }
    body {
      font-family: 'ms_sans_serif';
    }
    ${styleReset}
  `
  )
  

const usersUrl = 'http://localhost:3000/users/'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false)
  //testing. Uncomment above and delete line below when ready to deploy.
  
  
  // const [loggedInUser, setLoggedInUser] = useState(
  //   {id: 1,
  //   username: 'mar',
  //   email: "myemail@email.com"
  // }
  // )

  const [userArr, setUserArr] = useState([])
  
  const logout = () => {
    setLoggedInUser(false)
  }

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
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
    <Switch>
      <Route path="/" exact render={() => <LoginForm user={loggedInUser} loginUser={userLoggedIn}/>} />
      <Route path="/desktop" render={() => (loggedInUser? <DesktopContainer logout={logout} loggedinUser={loggedInUser}/> : false)} />
    </Switch>
      </ThemeProvider>
    </>
  )
}

export default App;
