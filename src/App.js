import React, { useState } from 'react';
import './App.css';
import VideoChatContainer from './VideoChatContainer';
import { Home } from './components/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/video" component={VideoChatContainer} />
      </Switch>
    </Router>
  );
}

export default App
