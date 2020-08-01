import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/music" exact component={Music} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
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
