import './App.css';
import React, { useState, useEffect } from "react";
// import Navigation from "./Navigation";
// import RouteList from "./RouteList";


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
        isAdmin: boolean,
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

}

export default App;
