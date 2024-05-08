
import { createBrowserRouter} from "react-router-dom";
import Home from "../views/home/home";
import "./index.css"

const RoutesApp = createBrowserRouter([{
  
    children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path: "/login",
            element: <h1>AAAAAAAAAA</h1>
        },

    ],
}])
  
  export default RoutesApp;
