import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main'
import './App.css'
import Skils from './components/Skils';
import Work from './components/Work';
import MyProject from './components/Myproject';
function App() {
  return (
    <div className="App">
        <Home className="inner home"/>
        <About className="inner about"/>
        <Main className="inner main"/>
        <Work/>
        <MyProject/>
        <Skils/>
    </div>
  );
}

export default App;