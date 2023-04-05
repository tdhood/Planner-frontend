import './App.css';
import React, { useState, useEffect } from "react";
import { BulletApi } from './api';
import jwt_decode from "jwt-decode";
// import Navigation from "./Navigation";
import RouteList from "./RouteList";
import { BrowserRouter, useNavigate } from "react-router-dom";
import userContext from "./userContext";

/**
 * App -- wrapper component
 *
 * props= none
 * state= 
 * -user: null or {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        application: [...]
      }
 * -token: null or 'token'
 * 
 * App -> UserContext -> {Navigation, RouteList}
 *
 */
function App() {
  console.log("App");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  console.log("user=", user, "token=", token, 'userData=', userData)

  useEffect(
    function fetchUserOnChange() {
      console.log("fetUserOnChange")

      async function fetchUser(username) {
      const userData = await BulletApi.getUser(username);
      setUser(userData)
      }
      if (token !== null) {
        const { username } = jwt_decode(token);
        fetchUser(username)
      }
    },
    [token]
  )

  /**makes call to backend API to log in an existing user 
   * takes loginInfo (obj) {
        username: username,
        password: password,
      }
    generates token that updates in BulletApi class
    sets token state
  */
  async function login(loginInfo) {
    const [user, token] = await BulletApi.login(loginInfo);
    console.log('user', user, 'token', token)
    setToken(token);
    setUser(user);
    
    if(setToken !== null && setUser !== null) {
      const userData = await BulletApi.getBullet(user);
      setUserData(userData);
    }
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <RouteList login={login} userData={userData}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
