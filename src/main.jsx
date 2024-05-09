import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './views/home/home'
import SectionA from './components/sections/sectionA'
import SectionC from './components/sections/sectionC'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <SectionA/>
    <SectionC/>
  </React.StrictMode>,
)
