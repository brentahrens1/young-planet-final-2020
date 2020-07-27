import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <LandingPage />
    </div>
  );
}

export default App;
