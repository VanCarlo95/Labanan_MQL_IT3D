import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Sidebar from './components/Sidebar'

function App(){
  return(
    <>
    <div className='App'>
      <header>Hardware Inventory Management System</header>
    </div>
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App