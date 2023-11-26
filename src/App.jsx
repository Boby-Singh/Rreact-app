import react from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/Components/Navbar/navbar'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Register from '../src/Components/RegisterPage/Register'
import About from '../src/Components/about/about'
import Contact from '../src/Components/contact/contact'
import Footers from '../src/Components/Footer/footer'
import Dashbosrd from '../src/Components/Dashboard/dashboard'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/deshboard' element={<Dashbosrd/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/RegisterPage' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
  )
}

export default App
