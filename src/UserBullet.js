import { BulletApi } from "./api";
import React, { useEffect, useState, useContext } from "react";


function UserBullet({userData}) {
  console.log("UserBullet");
  console.log('user=', userData)

  const user = userData.user

  // const [userData, setUserData] = useState({
  //     data: null,
  //     isLoading: true,
  // });
  // const [params, setParams] = useState({})

  // useEffect(
  //     function fetchUserDataOnChange() {
  //         async function fetchUpdatedUserData() {}
  //     }
  // )

  return (
    <div className="UserBullet">
      <h1>{user.username}'s Bullet Journal</h1>
      
    </div>
  );
}

export default UserBullet;
