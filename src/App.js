import React, { useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Homes from './components/Homes';
import './App.scss';

function App() {

  useEffect(() => {
    let vh = window.innerHeight* 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }, [])

  return (
    <div className="App">
      <Header />
      <Intro />
      <Homes />
    </div>
  );
}

export default App;
