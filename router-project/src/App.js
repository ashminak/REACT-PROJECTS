import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  console.log("App:", isLoggedIn);



  return <div className="flex flex-col h-screen w-screen bg-richblack-900">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
      }/>

    </Routes>
  </div>;
}

export default App;
