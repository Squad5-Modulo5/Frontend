
import { BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"
import Login from "../views/login";
import Private from "../views/private";

import React from "react";
import SectionCalculate from "../components/sections/sectionCalculate.jsx";

import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Regiteruser from "../views/register/index.jsx";
import ListProducts from "../views/lists/Listsproducts.jsx";



const RoutesApp = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/calculate' } element={<SectionCalculate/>}/>
      <Route path={'/register'} element={<Regiteruser/>}/>
      <Route path={'/login' } element={<Login/>}/>
      <Route element={<AuthOutlet fallbackPath='/login' />}>
    
        <Route path='/private' element={<Private/>} />
        
      
      </Route>
      <Route path='/listproduct' element={<ListProducts/>} />
    </Routes>
    </HashRouter>
  
  )
}

  export default RoutesApp;
