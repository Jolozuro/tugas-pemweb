import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Profil from './pages/Profil';
import { Navbar, Nav} from 'react-bootstrap'


import Contact from './pages/Contact';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
       <Navbar expand="lg" className="bg-body-tertiary">
      <nav>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>      
        <Nav.Link as={Link} to="/">Home</Nav.Link>  
        <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>
        <Nav.Link as={Link} to="/About">About</Nav.Link>
      </nav>
      </Navbar>
      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Profil' element={<Profil/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
