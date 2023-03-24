import LoginForm from "./LoginForm";
import Homepage from "./Homepage";
import UserHome from "./UserHome";
import { Navigate, Route, Routes } from "react-router-dom";

/**Routes for browser
 *
 * props=functions to be called in parent: login, signup, logout
 * state=none 
 * 
 * App --> RouterList --> { Homepage, CompanyList, CompanyDetail, JobList, LoginForm,
 * SignupForm, ProfileForm, Logout}
 */
function RouteList({ login, signup, logout }) {
    console.log("RouteList")
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login}/>} />
        <Route path="/myCalender/:username" element={<UserHome />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  
  export default RouteList;