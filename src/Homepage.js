import { useContext, useEffect } from "react";
import userContext from "./userContext";
import React from "react";
import { useNavigate } from "react-router-dom";

/**Shows homepage
 *
 * useContext= user
 * props=none
 * state=none
 *
 * Routes --> Homepage
 */
function Homepage() {
  console.log("homepage");
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  console.log('user', user)

  //TODO:import bootstrap, links to buttons style
  return (
    <div className="Homepage">
      {user === null && (
        <div>
          <h1>Bullet</h1>
          <h3>Organize your life, one bullet at a time.</h3>

          <a href="/login" className="btn btn-primary">
            Log in
          </a>
          <a href="/signup" className="btn btn-primary">
            Sign up
          </a>
        </div>
      )}
      {user !== null && (
        // navigate(`/myCalendar/${user.username}`)
        <div>
          <h1>Bullet</h1>
          <h3>All the jobs in one, convenient place.</h3>
          <h2>Welcome Back, {user.username} </h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
