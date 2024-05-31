
import { createBrowserRouter} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"
import Login from "../views/login";
import Private from "../views/private";
import CalculateProduct from "../views/calculate";
// eslint-disable-next-line no-unused-vars
import React from "react";
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
            element: <CalculateProduct/>,
        }


    ],
}])

  export default RoutesApp;
