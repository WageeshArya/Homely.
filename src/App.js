import React, { useEffect } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import Intro from './components/Intro';
import Homes from './components/Homes';
import IntroOverlay from './components/IntroOverlay';
import Sell from './components/Sell';
import './App.scss';

function App() {

  useEffect(() => {
    let vh = window.innerHeight* 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    gsap.to('body', 0, {css: { visibility: "visible" }});

    const tl = gsap.timeline();

    tl.from(".texts span", 1, {
      y: 75,
      ease: "power4.out",
      delay: 0.3,
      skewY: 10,
      stagger: {
        amount: 0.3
      }
    }).to(".topOverlay", 1, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.2
    }).to(".bottomOverlay", 1, {
      width: 0,
      ease: 'expo.inOut',
      delay: -1,
      stagger: 0.2
    }).to(".introOverlay", 0,{ css: {
      display: 'none'
    }})
    .from(".propImg img", 1, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -1.75,
      stagger: 0.3
    }).to("body", 0, {
      css: {
        overflowY: 'scroll'
      }
    });

  }, []);

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Intro />
      <Homes />
      <Sell />
    </div>
  );
}

export default App;
