import { Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "./Home"

function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
   
   </Routes>
  )
}

export default AllRoutes