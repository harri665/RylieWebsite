import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar/Navbar'
import Waves from './Components/Waves/waves'
import Card_Art from './Components/Cards/Card_Art'
import './index.css'


// ICONS 
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


// DEFAULT ** IMPORTANT ** 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NavBar></NavBar>
      <Waves></Waves>
      <div id = "test"></div>
  </React.StrictMode>,
)



//Test 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <NavBar></NavBar>
//     <span class="material-symbols-outlined">
// home
// </span>
    
//   </React.StrictMode>,
// )