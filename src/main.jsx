import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar/Navbar'
import Waves from './Components/Waves/waves'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NavBar></NavBar>
      <Waves></Waves>
  </React.StrictMode>,
)
