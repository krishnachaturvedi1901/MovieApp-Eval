import React from "react";
import {Routes,Route} from "react-router-dom"
import Bookings from "../Pages/Bookings.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import MovieDetail from "../Pages/MovieDetail.jsx";
import PrivateRoute from "./PrivateRoute"

const AllRoutes = () => {
  

  return (
  <div>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/bookings" element={<PrivateRoute><Bookings/></PrivateRoute>}></Route>
      <Route path="/movie/:id" element={<MovieDetail/>}></Route>
    </Routes>
  </div>
  )
};

export default AllRoutes;