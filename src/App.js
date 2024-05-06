import React from 'react';
import Navbar from './components/navbar'
import './App.css';
import Home from './components/pages/Home'
import Corporations from './components/pages/Corporations'
import Concerts from './components/pages/Concerts'
import Sports from './components/pages/Sports'
import Weddings from './components/pages/Weddings'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/corporations' element={<Corporations />} />
        <Route path='/concerts' element={<Concerts />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/weddings' element={<Weddings />} />
      </Routes>
    </Router>
  );
}

export default App;
