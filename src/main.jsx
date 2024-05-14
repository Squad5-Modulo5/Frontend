import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './views/home/home.jsx'
import SectionA from './components/sections/sectionA'
import SectionC from './components/sections/sectionC'
import SectionB from './components/sections/sectionB.jsx'
import SectionD from './components/sections/sectionD.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <SectionA/>
    <SectionC/>
    <SectionB/>
    <SectionD/>
  </React.StrictMode>,
)
