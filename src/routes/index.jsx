
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"
import Login from "../views/login";
import Private from "../views/private";

import React from "react";
import SectionCalculate from "../components/sections/sectionCalculate.jsx";

import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/calculate' } element={<SectionCalculate/>}/>
      <Route path={'/login' } element={<Login/>}/>
      <Route element={<AuthOutlet fallbackPath='/login' />}>
    
        <Route path='/private' element={<Private/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  
  )
}

  export default RoutesApp;
