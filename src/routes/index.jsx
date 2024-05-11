
import { createBrowserRouter} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"
import Login from "../views/login";
import Private from "../views/private";

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
        }
        
        


    ],
}])

  export default RoutesApp;
