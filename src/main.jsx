import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar/Navbar'
import Waves from './Components/Waves/waves'
import Card from './Components/Cards/Card'
import './index.css'
// DEFAULT ** IMPORTANT ** 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <NavBar></NavBar>
//       <Waves></Waves>
//   </React.StrictMode>,
// )



//Test 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card></Card>
  </React.StrictMode>,
)