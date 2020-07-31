import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/music" exact component={Music} />
        </Switch>
      </div>
      <LandingPage />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
