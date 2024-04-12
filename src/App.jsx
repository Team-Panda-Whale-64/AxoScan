import React from 'react';
import Home from './components/Home.jsx';
import TotalSum from './totalSum/totalSum.jsx';
import Login from './components/login.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//import login

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/totalSum' element={<TotalSum/>}/>
      <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
