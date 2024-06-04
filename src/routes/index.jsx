
import { createBrowserRouter} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"
import Login from "../views/login";
import Private from "../views/private";

// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionCalculate from "../components/sections/sectionCalculate.jsx";
const RoutesApp = createBrowserRouter([{

    children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/private",
            element: <Private/>,
        },
        {
            path: "/Calculate",
            element:<SectionCalculate/>
        }


    ],
}])

  export default RoutesApp;
