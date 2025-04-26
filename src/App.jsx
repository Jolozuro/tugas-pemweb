// Import Libraries
import React, { useState } from 'react';
import {Button, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './List';
import Top from './Top';


const App = () => {
  const [state,setState] = useState(0)

  const tambah = () =>{
    setState(count=>count+1)
  }

  const kurang = () => {
    setState (count=>count-1)
  }

  return(
    <div className='App'>
      
     <Button variant='primary' onClick={tambah}>Tambah</Button>
     <span>{state}</span>
     <Button onClick={kurang}>Kurang</Button>

      
    <h1>Hello React</h1>
    <Navbar />
    <Header /> <br/>
    <Top />
    <List />
    <Footer />
    </div>
  );
}

export default App

