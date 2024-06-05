
import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './routes'
import {RouterProvider, /*Route*/ } from "react-router-dom";
import {AuthProvider} from './context/authcontex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
        <RouterProvider router={RoutesApp}/>
        </AuthProvider>
    </React.StrictMode>,
)
