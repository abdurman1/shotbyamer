import React from 'react';
import Navbar from './components/navbar'
import './App.css';
import Home from './components/pages/Home'
import Corporations from './components/pages/Corporations'
import Concerts from './components/pages/Concerts'
import Sports from './components/pages/Sports'
import Weddings from './components/pages/Weddings'

function App() {
  return (
    <div className="App">
      <Navbar />
      <switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/corporations' exact component= {Corporations}/>
        <Route path='/concerts' exact component= {Concerts}/>
        <Route path='/sports' exact component= {Sports}/>
        <Route path='/Weddings' exact component= {Weddings}/>
      </switch>
    </div>
  );
}

export default App;
